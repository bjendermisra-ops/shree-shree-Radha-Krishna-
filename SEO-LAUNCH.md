# Search launch and genuine discovery

Primary website: https://www.srisriradhakrishnachandra.online/
Sitemap: https://www.srisriradhakrishnachandra.online/sitemap.xml

## Implemented

- 16 crawlable, pre-rendered HTML routes with unique titles, descriptions, one H1, canonical and social metadata.
- Descriptive headings and internal links for temple visits, aarti, Damodar Ashtakam, Ekadashi, Sunday Feast, learning, seva and app features.
- Sri/Shri/Shree spelling variants and the 15 Number Hadapsar location in visible content and entity aliases.
- HinduTemple, WebSite, WebPage/AboutPage/ContactPage/CollectionPage, breadcrumbs, Android app and traditional prayer structured data where relevant. No fabricated ratings, reviews, location coordinates or festival dates.
- Image-enabled sitemap, robots.txt, logo/favicon/apple icon, optional llms.txt summary, IndexNow key and explicit notification script.
- Old Vercel hostname redirects to corresponding paths on www; no redirect is applied to unrelated hosts.
- Build/CI validation on every push. Existing app folder is preserved.

## Submit after reviewing the live site

1. Verify the apex Domain property `srisriradhakrishnachandra.online` in Google Search Console with the exact DNS TXT token Google supplies. A Domain property includes www.
2. Submit the sitemap above. Inspect the homepage and the visit, prayers, Ekadashi, Sunday Feast and features pages. Check Google's chosen canonical after processing.
3. Add the same domain to Bing Webmaster Tools, optionally importing the verified Search Console property. Submit the sitemap.
4. `npm run seo:notify` is a safe dry run. `npm run seo:notify -- --submit` verifies the live public key file before notifying IndexNow's participating engines. It has not been submitted as part of this change.
5. Check indexing, crawl errors, search queries, clicks and Core Web Vitals after search engines have collected data. Do not repeatedly request indexing or keep changing titles daily.

## Page intent map

| Page | Visitor need |
| --- | --- |
| / | Temple identity, Sri/Shri/Shree name variations, 15 Number Hadapsar |
| /temple | About the mandir and local identity |
| /visit | Temple opening hours, aarti schedule, address, directions |
| /damodar-ashtakam | Damodarashtakam Sanskrit lyrics, transliteration, meaning |
| /aarti | Daily aarti and prayer collection |
| /ekadashi | Pune Ekadashi planner and how to confirm fasting/parana |
| /sunday-feast | Sunday kirtan, katha, prasad and 5–8 PM programme |
| /features | Temple Android app features and Google Play download |
| /learning | Kids Sanskar, Gita classes and spiritual learning enquiries |
| /festivals | Temple festival and devotional programme information |
| /seva | Volunteering and seva enquiries |
| /contact | Temple contact and visitor questions |
| /gallery | Real temple deity photograph |
| /community | Community participation |
| /privacy, /terms | Trust, privacy and website usage information |

## Genuine links: priority and action

| Source | Action | Status |
| --- | --- | --- |
| This project's GitHub README | Visible website, visit and prayer links for repository visitors | Added |
| Existing Google Business Profile for this exact 15 Number temple | Owner updates its website field and confirms address/name; do not create duplicate listings | Owner action |
| Temple app's Google Play listing | Owner updates website/support URL and relevant app description | Owner action |
| Existing temple YouTube/Instagram/Facebook profiles | Owner adds the website to the official profile and relevant real posts | Owner action |
| iskconhadapsar.com | Ask its administrator whether a relevant community/app resource link is appropriate; its published address differs, so do not imply it is the same location | Not contacted |
| Real partner temples, schools, community organisers | Request a link only where there is a real collaboration or useful event/resource | Not contacted |

No backlink outreach messages were sent, paid links purchased, automated directory profiles created or search-engine submissions made. Those external actions need the correct account/recipient and factual relationship. One genuine relevant citation is preferable to a manufactured link campaign.

## Practical limits

Indexability is not indexing or ranking. No system guarantees #1 for every misspelling or partial name. Google Play search ranking is separate from website ranking. The existing translated views are client-side, so we do not claim 48 independently indexable language pages or emit false hreflang tags.

AI search uses the same accessible, clear and useful source content. llms.txt is a convenient optional summary, not an instruction that forces AI recommendations. Do not use hidden keywords, fake reviews or doorway pages.

References:
- https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- https://developers.google.com/search/docs/essentials/spam-policies
- https://developers.google.com/search/docs/appearance/site-names
- https://www.indexnow.org/documentation
