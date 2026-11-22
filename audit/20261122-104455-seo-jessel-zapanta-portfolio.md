# SEO Audit: Jessel Zapanta Portfolio

**Date**: 2026-11-22 10:44:55
**Agent**: seo
**Site**: https://jeszapanta.vercel.app (production alias; verified live, includes the Google verification tag)
**Stack**: Vite 6.4.3 + React 19 SPA (single page, hash sections), prerendered to static HTML at build time, hosted on Vercel
**Scope**: 1 route audited (`/`, five hash sections), 1 route changed; 18 tracked files changed + 4 new code files + 26 new assets

## Scorecard

| # | Check | Before | After | Evidence |
|---|-------|--------|-------|----------|
| 1 | sitemap.xml | FAIL | PASS | `scripts/generate-sitemap.mjs` emits `dist/sitemap.xml` (1 URL, HTTPS, lastmod 2026-11-22); preview `200 text/xml` |
| 2 | robots.txt | FAIL | PASS | `public/robots.txt` allows all and references the absolute sitemap; preview `200 text/plain` |
| 3 | Remove noindex | PASS | PASS | No `noindex`/`nofollow`/`X-Robots-Tag`; robots meta is `index, follow`; intentional exclusions: none |
| 4 | Canonical tags | FAIL | PASS | One self-referencing canonical `https://jeszapanta.vercel.app/`, identical to `og:url` and sitemap `<loc>` |
| 5 | Enforce HTTPS | PASS | PASS | `http://` returns `308` to `https://`; HSTS `max-age=63072000; includeSubDomains; preload` (Vercel default) |
| 6 | Meta titles | FAIL | PASS | Original title 15 chars; now 57 rendered chars, unique page, intent-first |
| 7 | Meta descriptions | FAIL | PASS | Missing; now 158 chars, unique, derived from visible content |
| 8 | Open Graph / og:image | FAIL | PASS | Full OG + Twitter tags; `og-image.jpg` 1200x630, 51 KB, preview `200 image/jpeg`; `og:url` = canonical |
| 9 | Schema markup | FAIL | PASS | JSON-LD `Person`, `WebSite`, `ProfilePage` with stable `@id`s; parses cleanly; no fabricated ratings/reviews |
| 10 | One H1 per page | PASS | PASS | Exactly 1 H1; static `sr-only` name added and decorative typewriter is `aria-hidden` |
| 11 | Heading order | PASS | PASS | h1=1, h2=4, h3=17; no skipped levels |
| 12 | Alt text | PASS | PASS | 15/15 images have alt; icon-only links now have `aria-label` |
| 13 | Internal links | PASS | PASS | 11 hash anchors resolve to existing IDs; no orphan pages (single-page site) |
| 14 | Broken links | FAIL | PASS | DisciScan GitHub link returned 404; removed with "Source unavailable" fallback. All 10 external links return 200 |
| 15 | Clean URL slugs | PASS | PASS | Single canonical root URL; no URL changes, no redirects needed |
| 16 | llms.txt | FAIL | PASS | `public/llms.txt` (1.7 KB) with site summary, sections, real projects, and profiles; preview `200 text/plain` |
| 17 | Core Web Vitals | FAIL | PASS | Lighthouse mobile: LCP 3.2 s → **2.1 s**; TBT 120 ms → **10 ms**; CLS **0.011**; FCP 2.3 s → 1.8 s; Performance **98** (lab, simulated mobile) |
| 18 | Mobile layout | PASS | PASS | Correct viewport; Lighthouse mobile Accessibility 100, SEO 100, 98.8% legible text, no tap-target failures |
| 19 | Stack-appropriate implementation | PASS | PASS | Static metadata in `index.html`, Vite SSR prerender, no second SEO/head library, no new runtime dependencies |

## Findings

### P0
- None.

### P1
- The site shipped an empty HTML shell (`<div id="root"></div>`, 514 bytes). All content depended on JavaScript, and the H1 name was typed by `react-simple-typewriter` starting from an empty string.
- No meta description, canonical, Open Graph/Twitter tags, or structured data.
- No `/robots.txt` or `/sitemap.xml` (both 404 in production).
- Project link `https://github.com/JesselZapanta/disciscan` returned 404 (repo is not public).
- Generic 15-character title (`Jessel Zapanta`) with no role or context.

### P2
- No favicon or social share image (`/favicon.ico` and OG image absent).
- Google Fonts loaded via CSS `@import` (third-party render-blocking chain, ~910 ms wasted in Lighthouse).
- Hero portrait 669 KB; project screenshots 2.2 MB total, displayed at ~400 px wide.
- Footer bottom text (`text-slate-400`, 12 px) failed contrast (2.63:1); two icon-only contact links lacked accessible names.

### P3
- Remaining render-blocking CSS bundle (~450 ms simulated).
- JPEG used for the portrait; WebP/AVIF could save ~16 KB.
- `llms.txt` added as an emerging convention; it is not a ranking factor.

## Changes

| File | Change |
|------|--------|
| `index.html` | Title, 158-char description, author/robots/theme-color, canonical, `rel=me`, favicon/apple icons, self-hosted font preloads, full OG/Twitter tags, Person/WebSite/ProfilePage JSON-LD, noscript reveal fallback; removed Google Fonts links |
| `src/index.css` | Removed Google Fonts `@import`; added six self-hosted Poppins `@font-face` rules (latin subset, `font-display: swap`) |
| `src/entry-server.jsx` (new) | SSR entry that renders `<App />` with `renderToString` |
| `scripts/prerender.mjs` (new) | Injects the server-rendered app into `dist/index.html` after the client build |
| `scripts/generate-sitemap.mjs` (new) | Emits `dist/sitemap.xml` with `SITE_URL` support (fallback production alias) and build-date `lastmod` |
| `package.json` | Build now runs client build → SSR build → prerender → sitemap; no new dependencies |
| `src/main.jsx` | Hydrates prerendered HTML in production; falls back to `createRoot` in dev |
| `src/Pages/Home.jsx` | Static `sr-only` H1 name, `aria-hidden` typewriter, responsive `srcset`/`sizes` hero, `fetchPriority`, dimensions, indigo-600 contrast |
| `src/Pages/Projects.jsx` | Responsive JPEG project images with dimensions/lazy loading, descriptive alt, conditional GitHub button for missing repo |
| `src/Pages/Skills.jsx` | Absolute icon paths, alt text, dimensions, lazy loading |
| `src/Pages/Contact.jsx` | `aria-label` on icon-only links, absolute CV path |
| `src/Pages/Footer.jsx` | Contrast fix (`text-slate-500`) |
| `src/Components/Reveal.jsx` | `data-reveal` hook for the no-JS fallback |
| `eslint.config.js` | Ignores generated `dist-ssr` |
| `public/robots.txt` (new) | Allow all + sitemap directive |
| `public/llms.txt` (new) | Accurate site/project/profile index |
| `public/favicon.svg`, `public/apple-touch-icon.png` (new) | Brand icon assets |
| `public/og-image.jpg` (new) | 1200x630 social card, 51 KB |
| `public/fonts/poppins-{300,400,500,600,700,900}.woff2` (new) | Self-hosted Poppins latin subset (7.6–8.0 KB each) |
| `public/pfp.jpg`, `pfp-420.jpg`, `pfp-560.jpg` (new) | Hero portrait 669 KB → 66.7 KB, with 420/560 px variants |
| `public/{smartlog,disciscan,sukicart,torch,tcemps,inventory}.jpg` (new) | Project screenshots 2.2 MB → 297 KB total |
| `public/{pfp,smartlog,disciscan,sukicart,torch,tcemps,inventory}.png` | Removed replaced originals (recoverable from git history) |

## Redirects added

None. The site keeps a single root URL; hash sections are fragments, not separate indexable URLs.

## Verification

- Build: `npm run build` — PASS (client 1653 modules, SSR bundle, 63,793-char prerender, sitemap written).
- Lint: `npm run lint` — 0 errors, 1 pre-existing warning (`src/App.jsx` `react-hooks/exhaustive-deps`, unchanged by this work).
- Rendered checks: local `vite preview` — title, 158-char description, one canonical, one H1, 622 words in prerendered root, 0 Google Fonts references.
- Assets: `/robots.txt`, `/sitemap.xml`, `/llms.txt`, `/og-image.jpg`, `/favicon.svg`, `/apple-touch-icon.png`, font and `srcset` variants all return 200 with correct content types.
- Structured data: JSON parsed successfully; `Person`, `WebSite`, `ProfilePage` present; absolute `@id`s. Google Rich Results Test not run (no API access).
- Links: 11 internal hash anchors resolve; 10 external links checked, all 200.
- Lighthouse mobile (simulated, lab): Performance 98, Accessibility 100, Best Practices 100, SEO 100; LCP 2.1 s, CLS 0.011, TBT 10 ms, Speed Index 1.8 s, FCP 1.8 s.
- Live transport: `http://jeszapanta.vercel.app/` → 308 `https://jeszapanta.vercel.app/`; HTTPS 200; HSTS preload header present.
- Not measured: field/CrUX data, real-device 320/375/768 overflow sweep, Google Rich Results Test, Bing index status.

## Manual follow-ups

- Commit and deploy. The Vercel build must run `npm run build` so the SSR/prerender and sitemap steps execute.
- After deploy, verify `https://jeszapanta.vercel.app/sitemap.xml`, `/robots.txt`, `/llms.txt`, and the OG image, then submit the sitemap in Google Search Console and Bing Webmaster Tools.
- Update the GitHub repository homepage from the stale `https://react-fundamentals-rho.vercel.app` (404) to `https://jeszapanta.vercel.app/`.
- Confirm `jeszapanta.vercel.app` is the intended canonical. If a custom domain is added, update the canonical/OG/robots/llms URLs and set `SITE_URL` for the sitemap build step.
- Optional: provide a public DisciScan repo URL to restore its GitHub button; otherwise "Source unavailable" stays.
- Optional: convert the portrait and project screenshots to WebP/AVIF and add a `sameAs` LinkedIn profile if one exists.

## Notes

- The production origin was discovered from the live Vercel project alias and verified against the site content and Google verification meta; the repository homepage is outdated.
- Prerendering is hydration-aware: `createRoot` is used in dev, `hydrateRoot` in production.
- React 19 automatically emits a responsive image preload for the `fetchPriority="high"` hero, so no duplicate manual preload was kept.
- No new npm dependencies were added; the sitemap/prerender scripts use Node built-ins.
- The `google5c52301096a66bf9.html` verification file and meta tag were preserved.
- `dist/` and `dist-ssr/` remain gitignored and are regenerated at build time.
