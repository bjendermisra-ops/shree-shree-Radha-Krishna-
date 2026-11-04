# Sri Sri Radha Krishna Chandra Mandir website

Official temple-first website for Shree Shree Radha Krishna Chandra Mandir, built with React 19, TypeScript and Vite. The homepage and inner pages are pre-rendered during production builds for crawlable content and a complete first response. The Android app is an optional secondary resource, not the primary website identity.

## Development

Requires Node.js 22.12+ (or a supported newer LTS).

```sh
npm ci
npm run dev
npm run build
npm run preview
```

## Deployment

The root `vercel.json` defines the Vite build and `dist` output. Push to the existing Vercel-connected GitHub branch. The existing `/app` Play Store redirect is retained. `scripts/preserve-app.mjs` copies the original `app/` folder unchanged into build output; the website does not import, depend on or modify its code.

## Content and interactions

- `src/content.ts`: English, Hindi and Marathi feature copy, FAQs, download and maps links.
- `src/App.tsx`: responsive homepage, keyboard-accessible feature tabs, screenshot dialog, mobile navigation, theme/language preferences, FAQs, address-copy and contact actions.
- `src/styles.css`: responsive layouts, light/dark palette and reduced-motion support.
- `public/images`: optimized WebP assets. The screenshot content remains the user's actual app UI; system status/navigation bars are cropped for presentation. Dated information in screenshots is illustrative captured app state, not a live calendar.
- `public/favicon.svg`: original lotus mark for this website, not a claimed institutional logo.

App capabilities and program details are based on supplied screenshots and the original repository. No invented ratings, download counts or testimonials. The linked Android listing is `com.iskcon.hadapsar.santosh.in`. Website pages work across devices; no iOS app is claimed.

## Asset provenance

- `devotional-art.webp`: original artwork generated with the built-in imagegen tool. Brief: editorial still life of a bansuri, natural peacock feather, brass diya and jasmine on ivory paper/cream silk; warm natural light; no typography, people or specific temple depiction.
- `temple.webp`: optimized original temple photo from the repository's pre-existing image URL: `https://i.ibb.co/3mYLpLN8/IMG-20261013-WA0001.jpg`.
- Other WebP files: screenshots supplied by the repository owner.

## Maintenance

Update event information in `src/App.tsx` and `src/content.ts` when the temple changes its program. Confirm fasting/parana timing with the temple. No personal data is submitted to this website; localStorage holds only selected language and theme. WhatsApp/phone/maps/Play links open their respective services. Privacy and terms links use the temple's existing public site.

## November 2026 redesign

Cinematic navy/gold design with a CSS perspective device, subtle pointer response,
reduced-motion support, responsive layouts and persistent light/dark preference.
The device in the hero is an interactive website presentation, labelled as such;
the feature explorer below uses actual supplied Android screenshots.

### Website routes

`/`, `/temple`, `/visit`, `/sunday-feast`, `/festivals`, `/seva`, `/features`, `/learning`, `/aarti`,
`/damodar-ashtakam`, `/ekadashi`, `/contact`, `/privacy`, `/terms`.
All routes are built to real HTML documents, then hydrated with React. Vercel
clean URLs serve the corresponding HTML. There is a real noindex 404 document. The Royal Vrindavan redesign adds the standalone /festivals and /seva routes.
This is an interactive frontend with build-time rendering; there is no account,
payment, donation processing, or contact database. The contact form prepares a
WhatsApp draft for the visitor to review/send. No messages are silently sent.

### Content provenance

- Daily schedule: owner app repository `bjendermisra-ops/iskcon-mob/schedule.html`,
  inspected 2026-11-04. Morning 04:30–13:00, evening 16:15–21:00 IST.
- Sunday Feast, address and contact: supplied temple screenshots and existing
  project. Festival changes must be confirmed with organisers.
- Traditional public-domain Damodar Ashtakam Sanskrit checked against
  https://www.iskconjamnagar.org/sridamodarashtakam . English concise meanings are
  original reading aids. This site does not reproduce the source's long translation.
- No unverified dates or live parana calculation are presented. Ekadashi screenshots
  are labelled as saved examples. The Android app contains the saved planner.
- No iOS download, invented testimonials, user counts or payment links are claimed.

### Original new image

`public/images/sacred-night.webp` is generated devotional artwork, not a temple
photograph. Built-in image generation prompt: cinematic luxury devotional still
life, deep midnight navy atmosphere; peacock feather along lower left, pink lotus
and brass diya at lower right; dark reflective stone, golden bokeh and subtle blue
light; negative space above; no buildings, people, text, phones or interface.
Optimized to WebP (about 132 KB). Real deity photo remains `temple.webp`.

### Discoverability

Build script emits page-specific titles/descriptions, canonicals, Open Graph,
WebPage/WebSite/HinduTemple/MobileApplication/BreadcrumbList structured data as
applicable, and a sitemap covering all 14 pages. Important text is present in HTML
without JavaScript. Temple aliases Sri/Shri/Shree are stated naturally on `/temple`
and in `alternateName`, rather than repeated keyword stuffing or doorway pages.

Guidance checked: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
and https://developers.google.com/search/docs/appearance/ai-features . No markup
can guarantee ranking or AI recommendations. The website does not pretend that
`llms.txt` or a special GEO schema provides ranking benefits.

Owner follow-up: verify the domain in Google Search Console, submit `/sitemap.xml`,
check URL Inspection and indexing, and align the temple's existing verified Google
Business Profile with the correct website/address. These require owner access and
are not claimed complete. If moving to a custom domain, update the base URL in
`scripts/prerender.mjs` and `public/robots.txt`, then redirect the old origin.

### Validation

Run `npm run check`: TypeScript + production builds + output verification of
all routes, one H1 per page, unique titles, canonicals, JSON-LD, local links and
assets, sitemap, 8 reader verses, 404 and byte-identical preserved app files.
Browser QA covers desktop, 768px tablet, 390px mobile and 320px narrow reader,
menu, tab switching, theme, search, reader script/size and saved-verse persistence.

The root `app/` directory is unchanged. It is copied by the existing preservation
script only. No screenshot QA wrapper is published.


## Royal Vrindavan design pass (4 November 2026)

- The primary brand is **Shree Shree Radha Krishna Chandra Mandir**, not any application or local chapter branding.
- Real existing temple darshan photography is used as the homepage hero. Devotional still-life images are labeled as illustrations, not photographs of the temple.
- Mobile-first cinematic home, quick darshan links, daily service schedule, full eight-verse reader, festival discovery and verified seva enquiry.
- No made-up festival dates, direct payment interface or unverified live darshan claim. Directions and existing schedule remain available.
- The existing `app/` redirect content and **all files in the separate `iskcon-mob` repository** remain untouched.
- `src/Royal.tsx` and `src/royal.css` contain the new presentation; original information architecture and app feature pages remain accessible.
- GitHub Actions runs `npm run check`, including TypeScript build, SSR output and route validation.
