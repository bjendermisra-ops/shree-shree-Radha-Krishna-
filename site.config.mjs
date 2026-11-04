// Verified public HTTPS origin; apex redirects to www.
export const customDomain = 'https://www.srisriradhakrishnachandra.online';
export const currentOrigin = 'https://sriradha.vercel.app';
export const siteUrl = (process.env.SITE_URL || customDomain).replace(/\/$/, '');
if (![currentOrigin, customDomain].includes(siteUrl)) throw new Error('SITE_URL must be a verified production origin.');
