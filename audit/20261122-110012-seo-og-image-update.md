# SEO Audit: OG Image Update

**Date**: 2026-11-22 11:00:12
**Agent**: seo
**Site**: https://jeszapanta.vercel.app
**Stack**: Vite 6.4.3 + React 19, prerendered static HTML, Vercel
**Scope**: 1 asset updated (`og:image` / `twitter:image`)

## Scorecard

| # | Check | Before | After | Evidence |
|---|-------|--------|-------|----------|
| 8 | Open Graph / og:image | PASS | PASS | Replaced the generated text card with the supplied landing-page screenshot; 1200x630, 67.3 KB, `image/jpeg`; absolute `og:image` and `twitter:image`; preview returns 200 |

All other checks are unchanged from `20261122-104455-seo-jessel-zapanta-portfolio.md`.

## Findings

- No defect. The previous OG card was valid (1200x630, 51 KB); the user requested the branded landing-page screenshot instead.

## Changes

| File | Change |
|------|--------|
| `public/og-image.jpg` | Replaced with a 1200x630 center crop of `D:\Downloads\landing.png` (1738x784 → 1493x784 center crop → 1200x630 JPEG, quality 90), 67.3 KB |

No source or metadata changes were needed: `index.html` already declares `/og-image.jpg`, `image/jpeg`, 1200x630, and the correct alt text.

## Verification

- Build: `npm run build` — PASS (client, SSR, prerender, sitemap).
- Image: 1200x630, 67.3 KB, `image/jpeg`.
- Local preview: `/og-image.jpg` — `200 image/jpeg`, 68,899 bytes.
- Tags: `og:image` and `twitter:image` both resolve to `https://jeszapanta.vercel.app/og-image.jpg`; width/height/type match.
- Not rerun: Lighthouse (metadata and dimensions unchanged), social-platform caches.

## Manual follow-ups

- After deploy, refresh the Facebook Sharing Debugger and X Card Validator cache if they show the old image.
- Re-share the URL or use the debugger's scrape action to force a new fetch.

## Notes

- The supplied screenshot was 1738x784 (2.22:1); a centered 1493x784 crop reaches the 1.91:1 OG aspect without letterboxing and keeps the hero copy, portrait, nav, and stats in frame.
