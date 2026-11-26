// api/send-push.js (Zero-Dependency Node.js FCM v1 Gateway)
import crypto from 'node:crypto';

const PROJECT_ID = "radha-krishna-chandra";
const CLIENT_EMAIL = "firebase-adminsdk-fbsvc@radha-krishna-chandra.iam.gserviceaccount.com";

const PRIVATE_KEY = process.env.RADHA_FCM_PRIVATE_KEY;

function base64url(input) {
  return Buffer.from(input)
    .toString('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

async function getGoogleAccessToken() {
  if (!PRIVATE_KEY) throw new Error('RADHA_FCM_PRIVATE_KEY is missing in Vercel production environment');
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: 'RS256', typ: 'JWT' };
  const claim = {
    iss: CLIENT_EMAIL,
    scope: 'https://www.googleapis.com/auth/firebase.messaging',
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now
  };

  const headerB64 = base64url(JSON.stringify(header));
  const claimB64 = base64url(JSON.stringify(claim));
  const signInput = `${headerB64}.${claimB64}`;

  const signer = crypto.createSign('RSA-SHA256');
  signer.update(signInput);
  const signatureB64 = signer.sign(PRIVATE_KEY, 'base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');

  const jwt = `${signInput}.${signatureB64}`;

  const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt
    })
  });

  const tokenData = await tokenRes.json();
  if (!tokenRes.ok) {
    throw new Error(tokenData.error_description || tokenData.error || 'OAuth Token Generation Failed');
  }
  return tokenData.access_token;
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ success: false, reason: "Method Not Allowed" });

  const { title, body, imageUrl, actionUrl, topic, isLoudAlert } = req.body || {};

  if (!title || !title.trim()) return res.status(400).json({ success: false, reason: "Missing Title" });
  if (!body || !body.trim()) return res.status(400).json({ success: false, reason: "Missing Body" });

  const targetTopic = (!topic || topic === 'all' || topic === 'temple_all') ? 'temple_all' : topic;
  const safeImg = (imageUrl && imageUrl.trim().startsWith('http')) ? imageUrl.trim() : "";
  const safeAction = (actionUrl && actionUrl.trim()) ? actionUrl.trim() : "home.html";
  
  // चेक करें कि क्या यह कोई वेब/यूट्यूब/प्लेस्टोर का लिंक है
  const isExternalUrl = /^https?:\/\//i.test(safeAction);

  try {
    const accessToken = await getGoogleAccessToken();

    // 🔥 100% CRASH-PROOF DATA PAYLOAD + अलार्म व एक्सटर्नल लिंक सपोर्ट
    const fcmPayload = {
      message: {
        topic: targetTopic,
        data: {
          title: title.trim(),
          body: body.trim(),
          message: body.trim(),
          image: safeImg,
          imageUrl: safeImg,
          img: safeImg,
          // किसी भी लिंक या स्क्रीन के लिए कीवर्ड्स
          page: safeAction,
          url: safeAction,
          link: safeAction,
          target_page: safeAction,
          targetUrl: safeAction,
          is_external: isExternalUrl ? "true" : "false",
          // साइलेंट/म्यूट मोड में ज़ोर से बजने के लिए अलार्म फ्लैग्स
          sound_mode: isLoudAlert ? "alarm" : "default",
          is_urgent: isLoudAlert ? "true" : "false",
          channel_id: isLoudAlert ? "alarm_high_channel" : "general_channel"
        },
        android: {
          priority: "HIGH"
        }
      }
    };

    const fcmRes = await fetch(`https://fcm.googleapis.com/v1/projects/${PROJECT_ID}/messages:send`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(fcmPayload)
    });

    const fcmData = await fcmRes.json();
    if (!fcmRes.ok) {
      return res.status(fcmRes.status).json({
        success: false,
        reason: fcmData.error?.status || "FCM_API_ERROR",
        details: fcmData.error?.message || "Google FCM Rejected Message"
      });
    }

    return res.status(200).json({
      success: true,
      messageId: fcmData.name,
      targetTopic: targetTopic,
      targetLink: safeAction,
      isLoud: !!isLoudAlert,
      timestamp: new Date().toISOString()
    });

  } catch (err) {
    return res.status(500).json({
      success: false,
      reason: "SERVER_EXECUTION_ERROR",
      details: err.message
    });
  }
};
