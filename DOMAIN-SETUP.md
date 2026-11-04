# Domain configuration

Verified public destination: **https://www.srisriradhakrishnachandra.online/**.
The apex `https://srisriradhakrishnachandra.online/` redirects to www in the existing host configuration. The site responded over HTTPS with the expected temple content on 5 November 2026.

`site.config.mjs` now defaults to www. The build emits canonical, Open Graph, JSON-LD, robots and sitemap URLs for that origin. `vercel.json` redirects the old `sriradha.vercel.app` hostname to corresponding www paths; `/app` keeps its existing Play Store redirect.

No registrar DNS records were changed. Future migrations must first verify the new HTTPS host, then change the shared origin and redirect configuration together. See `SEO-LAUNCH.md` for Search Console/Bing owner verification.
