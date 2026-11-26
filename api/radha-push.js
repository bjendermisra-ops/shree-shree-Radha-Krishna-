import { createSign, timingSafeEqual } from 'node:crypto';

const project = 'radha-krishna-chandra';
const fail = (res, code, reason) => res.status(code).json({success:false, reason});
const same = (a,b) => typeof a === 'string' && typeof b === 'string' && Buffer.byteLength(a) === Buffer.byteLength(b) && timingSafeEqual(Buffer.from(a),Buffer.from(b));
const b64 = x => Buffer.from(JSON.stringify(x)).toString('base64url');

async function accessToken(account) {
  const now = Math.floor(Date.now()/1000);
  const unsigned = b64({alg:'RS256',typ:'JWT'})+'.'+b64({iss:account.client_email,scope:'https://www.googleapis.com/auth/firebase.messaging',aud:'https://oauth2.googleapis.com/token',iat:now,exp:now+3600});
  const signature = createSign('RSA-SHA256').update(unsigned).sign(account.private_key).toString('base64url');
  const response = await fetch('https://oauth2.googleapis.com/token',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:new URLSearchParams({grant_type:'urn:ietf:params:oauth:grant-type:jwt-bearer',assertion:unsigned+'.'+signature}),signal:AbortSignal.timeout(12000)});
  const data = await response.json();
  if(!response.ok || !data.access_token) throw new Error('Firebase authentication failed');
  return data.access_token;
}

export default async function handler(req,res) {
  res.setHeader('Cache-Control','no-store');
  res.setHeader('X-Robots-Tag','noindex, nofollow');
  if(req.method !== 'POST') {res.setHeader('Allow','POST');return fail(res,405,'Method not allowed');}
  const key = process.env.RADHA_PUSH_ADMIN_KEY;
  if(!key || key.length<24) return fail(res,503,'Server setup incomplete: RADHA_PUSH_ADMIN_KEY');
  if(!same(req.headers.authorization,'Bearer '+key)) return fail(res,401,'Invalid admin access key');
  let account;
  try {account=JSON.parse(process.env.RADHA_SERVICE_ACCOUNT||'null');} catch {}
  if(account?.project_id!==project || !account.client_email || !account.private_key) return fail(res,503,'Server setup incomplete: RADHA_SERVICE_ACCOUNT (radha-krishna-chandra)');
  let input=req.body;
  if(typeof input==='string') {try{input=JSON.parse(input)}catch{return fail(res,400,'Invalid JSON');}}
  if(!input || typeof input!=='object' || Array.isArray(input)) return fail(res,400,'Invalid request');
  if(input.action==='status') return res.status(200).json({success:true,project,ready:true});
  const {title,body,imageUrl='',actionUrl='home.html',topic='all',isLoudAlert=false}=input;
  if(typeof title!=='string'||!title.trim()||title.length>100||typeof body!=='string'||!body.trim()||body.length>500) return fail(res,400,'Title (1–100) and message (1–500) are required');
  if(typeof topic!=='string'||!/^[A-Za-z0-9_.~%-]{1,150}$/.test(topic))return fail(res,400,'Invalid topic');
  if(typeof imageUrl!=='string'||imageUrl.length>1000||typeof actionUrl!=='string'||actionUrl.length>1000||typeof isLoudAlert!=='boolean') return fail(res,400,'Invalid image, action or alert');
  const https = s=>{try{const u=new URL(s);return u.protocol==='https:'&&!u.username&&!u.password}catch{return false}};
  const img=imageUrl.trim(), action=actionUrl.trim()||'home.html';
  if(img&&!https(img))return fail(res,400,'Image must use HTTPS');
  if(!https(action)&&!(/^[A-Za-z0-9][A-Za-z0-9_./-]*(?:\?[A-Za-z0-9_=&%.-]*)?$/.test(action)&&!action.includes('..')))return fail(res,400,'Use an app page or HTTPS link');
  const targetTopic=topic==='all'?'temple_all':topic;
  const payload={message:{topic:targetTopic,data:{
    title:title.trim(),body:body.trim(),message:body.trim(),image:img,imageUrl:img,img,
    page:action,url:action,link:action,target_page:action,targetUrl:action,is_external:https(action)?'true':'false',
    sound_mode:isLoudAlert?'alarm':'default',is_urgent:isLoudAlert?'true':'false',channel_id:isLoudAlert?'alarm_high_channel':'general_channel'
  },android:{priority:'HIGH'}}};
  if(Buffer.byteLength(JSON.stringify(payload.message.data))>2048)return fail(res,400,'Message payload too long for topic delivery; shorten links or message');
  try {
    const token=await accessToken(account);
    const response=await fetch('https://fcm.googleapis.com/v1/projects/'+project+'/messages:send',{method:'POST',headers:{Authorization:'Bearer '+token,'Content-Type':'application/json'},body:JSON.stringify(payload),signal:AbortSignal.timeout(12000)});
    const data=await response.json();
    if(!response.ok||!data.name)return res.status(response.status>=400?response.status:502).json({success:false,reason:data.error?.status||'FCM rejected the message',details:String(data.error?.message||'').slice(0,500)});
    return res.status(200).json({success:true,messageId:data.name,targetTopic,targetLink:action,timestamp:new Date().toISOString()});
  } catch {return fail(res,502,'Firebase request failed or timed out; delivery is not confirmed');}
}
