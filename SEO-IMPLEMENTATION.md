# Search implementation — 14 November 2026

## Scope and source of truth
Canonical host: https://www.srisriradhakrishnachandra.online
Temple: Sri Sri Radha Krishna Chandra Mandir, 15 Number, Hadapsar, Pune 411028.
Published site schedule retained: 04:30–13:00 and 16:15–21:00 IST; Sunday Feast 17:00–20:00.
Do not merge listings for other Hadapsar devotional centres just because names are similar.

## Search intent map
| Search intent | Primary page |
| --- | --- |
| Radha Krishna temple Hadapsar / Pune; Sri/Shri/Shree brand variations | / |
| Temple identity, community | /temple |
| Darshan / aarti timings, address, directions | /visit |
| Sunday Feast, kirtan and maha prasad Hadapsar | /sunday-feast |
| Kids Sanskar, spiritual learning enquiries | /learning |
| Temple deity photos | /gallery |
| Damodar Ashtakam lyrics and meaning | /damodar-ashtakam |
| First visit preparation | /blog/first-visit-radha-krishna-temple-hadapsar |
| Hare Krishna mantra text and beginner japa | /blog/hare-krishna-maha-mantra-japa-guide |
| Darshan / aarti / kirtan meanings | /blog/darshan-aarti-kirtan-difference |

Each route has English, Hindi and Marathi documents. New articles are original practical guides, with visible source links for the devotional definitions. No invented teacher credentials, reviews, class schedules or event dates. Common transliterations are explained naturally; no typo doorway pages.

## Implementation
- Three full guides plus journal index in three languages: 12 new HTML documents; 60 total.
- Home article discovery cards, sitewide journal link, article-to-service and article-to-article links.
- Broader home and visit titles, stable URL-based language rendering, locale-aware navigation/footer links.
- BlogPosting, ItemList, publisher entity, article breadcrumbs, existing HinduTemple/WebSite schemas.
- Temple social identity links taken from the owner's existing public app footer and also made visible on the website.
- Canonical, reciprocal hreflang, crawlable text, updated sitemap; lastmod only for affected main pages and journal.
- Three RSS feeds with article URLs and publication dates.
- Existing wildcard crawler allowance kept. llms.txt is supplementary documentation, not a Google AI ranking mechanism.

## External discovery
Contextual website links prepared for the owner's iskcon-mob app footer: visitor timings/directions and Hindi/Marathi guides. These are owned referral links, not independently earned editorial endorsements.
Do not describe this as purchased authority, a directory campaign or a completed third-party backlink campaign.

## Remaining account-dependent work
The GSC Wizard connector returned payment_required because its trial expired. No current Search Console rank, impression, indexing or query data was accessible through that connector.
Use Google's free Search Console for the verified domain: submit /sitemap.xml, inspect / and /visit plus the new guide URLs, then review non-brand queries and coverage. Compare equal periods after sufficient impressions; do not interpret a single personalized search as a rank baseline.
Confirm the exact Google Business Profile listing, owner access and current timings before changing its address, hours or website field. One public directory showed conflicting hours; preserve owner-published hours until checked in person. Avoid duplicate profiles.
Update existing YouTube/Instagram website fields through their owner accounts to the canonical site; do not create duplicate accounts. Local Pune community calendars, genuine temple partners and independently maintained visitor guides are candidates for editorial references when relevant. Outreach and third-party placement have not been performed.

## References checked
- https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- https://developers.google.com/search/docs/appearance/ai-features
- https://developers.google.com/search/docs/essentials/spam-policies
- https://iskcon.org/meditation/
- https://iskcon.org/kirtan/

## Validation
npm run check: TypeScript, client/SSR build, complete prerender, route assets/internal links, canonical/hreflang, unique English titles, H1s, sitemap and structured data; 9 article documents and 3 feeds checked.
Browser: desktop journal and article, Hindi language switch, light/dark reading, Hindi/Marathi at 390/320 CSS-pixel iframe widths with no horizontal content overflow.
