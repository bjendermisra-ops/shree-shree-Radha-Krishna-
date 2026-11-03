# Sri Sri Radha Krishna Chandra Mandir website

Production website for the Android temple app, built with React 19, TypeScript and Vite. The homepage is pre-rendered during the production build for crawlable content and a complete first response.

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
