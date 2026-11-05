# Search visibility launch — Sri Sri Radha Krishna Chandra Mandir

Canonical website: https://www.srisriradhakrishnachandra.online/
Sitemap: https://www.srisriradhakrishnachandra.online/sitemap.xml

## Implemented November 5, 2026

- 16 distinct English pages, 16 Hindi pages at `/hi/`, and 16 Marathi pages at `/mr/`: 48 pre-rendered HTML documents.
- Per-language, per-page descriptive titles and meta descriptions; one main H1; translated visible content for visitor-facing routes.
- Self-referential canonical URLs, reciprocal `hreflang` alternates (`en-IN`, `hi-IN`, `mr-IN`) and `x-default` on HTML documents and in the sitemap.
- Accurate HinduTemple, WebSite, WebPage, breadcrumbs, Android app and hymn structured data where relevant. No fictional reviews, ratings or location coordinates.
- Temple name variations in structured data and visible explanation on the Visit and About pages: Sri Sri, Shri Shri, Shree Shree, Radha Krishna Chandra, ISKCON 15 Number Hadapsar.
- Separate user intent and internal links for darshan/aarti, visiting/address, Ekadashi, Damodar Ashtakam, Sunday Feast, kids' learning, seva, festivals, gallery, community, app and contact.
- The user-supplied Radha-Krishna deity seal replaces the generic lotus favicon. The source photo is optimized to a 48px search icon and reused for the header and an SVG home-screen mark.
- A canonical sitemap, robots.txt, 404 noindex page, OG/Twitter preview metadata and image URLs.
- Automated GitHub checks test all 48 localized pages, canonical URLs, JSON-LD and XML sitemap; Vercel preview routes have been checked as 200 OK.

## Search Console: important setup step

The GSC Wizard connected account was checked on November 5, 2026 and returned **no registered Search Console properties**. Trying to register `https://www.srisriradhakrishnachandra.online/` returned **property not found in the Search Console of any Google account connected to the plugin**. Hence no live query, index coverage, CTR or ranking data could be verified, and no Google sitemap submission was made.

The site owner should:
1. Sign into https://search.google.com/search-console with the Google account that owns the domain.
2. Create and **verify** a Domain property `srisriradhakrishnachandra.online` with the DNS TXT token supplied by Google. This covers both apex and www. Alternatively verify a URL-prefix property for the exact www HTTPS origin.
3. In the verified property, submit `https://www.srisriradhakrishnachandra.online/sitemap.xml`.
4. In GSC Wizard, connect that same Google account, register the verified property, and inspect homepage, Visit, Damodar Ashtakam, Ekadashi and language pages.
5. Inspect performance every few weeks for real query opportunities. Do not repeatedly change titles based on one day's position.

Bing Webmaster data is also not configured through the connected GSC Wizard account. It requires the Bing API key in that service.

## Prioritised intent clusters (natural language, not stuffing)

| Query variants real visitors may use | Most relevant page |
| --- | --- |
| Sri Sri Radha Krishna Chandra Mandir, Shree Shree Radhakrishna Chandra Mandir, Shri Shri Radha Krishna, 15 Number Mandir Pune, ISKCON 15 No Hadapsar | Home, About |
| ISKCON 15 Number darshan time, Radha Krishna Chandra Mandir Hadapsar address, morning evening aarti Pune | Visit |
| Damodar Ashtakam 8 verses, Sri Damodarastakam Sanskrit lyrics, दामोदर अष्टकम्, कार्तिक दामोदराष्टकम् | Damodar Ashtakam |
| Mangala aarti, Tulasi aarti, Nrsimha pranam, prayers in Hadapsar | Aarti |
| Ekadashi in Pune, Ekadashi date and parana guidance, एकादशी दिनदर्शिका पुणे | Ekadashi |
| Sunday Feast Hadapsar, Sunday kirtan Pune, mahaprasad on Sunday, रविवार उत्सव | Sunday Feast |
| Kids Sanskar Pune, children's Gita study Hadapsar, बाल संस्कार | Learning |
| Volunteer seva in Hadapsar, temple volunteering Pune, volunteering for festivals | Seva |
| Krishna Janmashtami events in Hadapsar, Kartik month programs Pune, temple festivals | Festivals |

These are research themes and intent mapping, **not measured search-volume or actual ranking claims**.

## Real-world visibility is essential

Search visibility requires more than code:
- Keep **one** accurate Google Business Profile for the actual temple, with approved name, address, website, photos, category and verified hours. Do not create duplicate profiles or invent addresses.
- Put the canonical site URL on the temple's real social accounts, app listing and official event announcements.
- Publish authentic helpful event updates with validated dates, original temple photos and accurate notices. Avoid doorway pages, paid link spam, keyword stuffing or fabricated testimonials.
- Fix any indexing and Core Web Vitals issues from **actual** Search Console and field metrics.

No SEO can legitimately guarantee ranking #1 for every spelling, partial word or search query. Indexability is not indexing or ranking. Google site names and favicons may take days or weeks to update following recrawl.
