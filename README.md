# Sri Sri Radha Krishna Chandra Mandir

[Visit the temple website](https://www.srisriradhakrishnachandra.online/) · [Darshan timings](https://www.srisriradhakrishnachandra.online/visit) · [Read Damodar Ashtakam](https://www.srisriradhakrishnachandra.online/damodar-ashtakam)

Temple and Android app information for **15 Number, Hadapsar, Pune, Maharashtra**. The name is also written Shri Shri or Shree Shree Radha Krishna Chandra Mandir.

## Run and check

Node.js 22.12+ is required.

```sh
npm ci
npm run dev
npm run check
```

React 19, TypeScript and Vite. Production builds pre-render every route into HTML, then hydrate interactive controls. No account, payment processing or contact database is claimed; the contact form prepares a WhatsApp message for the visitor to send.

## Pages

Home, temple information, visit/timings, Damodar Ashtakam, aarti, Ekadashi guidance, Sunday Feast, Android app features, learning, festivals, seva, contact, gallery, community, privacy and terms. The header switches English/Hindi/Marathi in the browser; these are not separate translated search URLs.

## Brand and imagery

- `public/brand/temple-mark.svg`: lightweight original lotus-and-flute website mark, with PNG sizes and matching browser icons. It does not reproduce the institutional ISKCON logo.
- `public/images/temple.webp`: actual deity photo from the owner's existing repository asset: https://i.ibb.co/3mYLpLN8/IMG-20261013-WA0001.jpg .
- App screenshots are supplied by the owner. Dates shown in screenshots are captured examples, not a live calendar.
- Older generated/placeholder artwork remains in source history but is not rendered by the current pages.

## SEO and deployment

`site.config.mjs` uses the verified **www** custom domain. `scripts/prerender.mjs` generates 16 self-canonical pages, unique titles/descriptions, social metadata, temple/site/page/app/prayer/breadcrumb JSON-LD, an image-enabled sitemap, robots.txt and an optional llms.txt navigation summary. The latter is not a ranking guarantee or special search-engine requirement.

`vercel.json` retains the app redirect and sends the old Vercel host to corresponding custom-domain paths. The apex domain already redirects to www through the existing hosting setup.

`npm run check` validates TypeScript, HTML structure, canonicals, assets, internal links, sitemap coverage, 8 prayer verses, 404 noindex, all 48 page/language render combinations, and byte-identical preservation of `app/`.

For later URL notification:

```sh
npm run seo:notify            # preview only; contacts no search engine
npm run seo:notify -- --submit # explicit IndexNow notification after launch
```

IndexNow acceptance is not a promise of indexing or ranking, and does not submit to Google Search Console. See [SEO launch checklist](SEO-LAUNCH.md) for owner verification and legitimate link opportunities. Search engine submission has not been performed automatically.

## Content maintenance

The owner app's published schedule supplies morning 04:30–13:00 and evening 16:15–21:00 IST. Sunday Feast is 17:00–20:00; confirm festival changes with organisers. Traditional Damodar Ashtakam Sanskrit was checked against https://www.iskconjamnagar.org/sridamodarashtakam ; English meanings are concise reading aids.

Update `src/pages.ts`, `src/content.ts`, `src/Palace.tsx` and `src/prayers.ts` when information changes. All files in `app/` remain unchanged. No unrelated repository is modified.
