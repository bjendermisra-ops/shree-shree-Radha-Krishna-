# Cinematic Mandir UI — image & content operations

This branch introduces the user-approved maroon / gold / ivory desktop-and-mobile design direction. The original pages, prayer reader, app screenshots, and URL structure remain in place.

## Artwork inventory

| Local asset | Use | Provenance |
| --- | --- | --- |
| `/images/temple.webp` | Hero and real darshan photograph | Existing project temple image |
| `/images/home.webp`, `calendar.webp`, `prayers.webp`, `learning.webp`, `reader.webp`, `stickers.webp` | Real Android app and learning previews | Existing project screenshots |
| `/visual/ornament-divider.svg` | Delicate antique-gold divider | Custom vector motif |
| `/visual/diya-gold.svg` | Non-photographic festival / Sunday art | Custom vector motif |
| `/visual/peacock-feather.svg` | Optional decorative motif | Custom vector illustration |
| `/visual/temple-silhouette.svg` | Decorative silhouette (not an actual exterior photo) | Custom vector illustration |

Never describe a vector temple silhouette as a photograph of the Hadapsar mandir. Keep uploaded documentary photos attributed and use them only with appropriate permission.

## Add an original image from your phone

1. Open the repository on GitHub and select the correct branch.
2. Upload a WebP/JPEG/PNG file into `public/images/` (e.g. `kartik-diya-2026.webp`). Use meaningful names, good compression, and no unnecessary sensitive location information.
3. Keep the mobile subject inside the central ~60% of the image because cinematic sections have different crops at 320px and 1440px.
4. For a festival hero image, edit `public/content/spotlights.json` and set its `image` to `/images/kartik-diya-2026.webp`.
5. Add accurate language strings, `href`, start/end dates in `YYYY-MM-DD` (Asia/Kolkata). Use `null` for an evergreen reading feature.
6. Commit to a feature branch, preview, and test mobile and desktop before merging.

## Festival manifest

`public/content/spotlights.json` is public data (no secrets). It supports multiple localized entries with optional scheduling, priority, and image paths.

Fields: `id`, `enabled`, `priority`, `startDate`, `endDate`, `image`, `href`, `artworkType`, `label`, `title`, `description`, `cta`.

Only images under `/images/` and `/visual/` and internal relative links are accepted by the website. If the JSON file fails to load or contains no active entries, the homepage keeps an accessible evergreen Damodar Ashtakam card instead of breaking.

## Live media and schedules

Do not add a `LIVE` badge unless a real stream and its current availability can be verified. The existing site provides a temple visit schedule rather than a made-up viewer count. Always confirm festival timings with the temple.

## Internationalization

The new homepage strings live in `src/CinematicHome.tsx`, with EN, HI and MR text in one data object. Existing interior routes retain their previous translated components. The FAQ is now translated in all three languages.

## Testing

GitHub Actions runs `npm run check` on the PR and validates prerendered routes, sitemap and internal image links. Before merging, manually review:
- 320, 375, 390, 430, 768, 1024, 1366, 1440, 1920 and 2560 px
- tap targets, mobile menu, language switching, dark mode, image cropping, links and reader accessibility
- Vercel preview; never confuse the preview with production

Do not merge to `main` before review and approval.
