@AGENTS.md

# CLAUDE.md

Marketing and content site for **FoggyBrain**, an iOS app for tracking brain fog and correlating it with sleep, stress, diet, and weather. This site's job: rank in search for brain-fog topics, tell the founder's story, and convert visitors to App Store downloads.

## Context

- **Domain**: `foggybrain.app` — purchased (July 2026). Deploys to Vercel from this repo (`juangrafista/foggybrain-site`, standard Next.js preset, no config needed).
- **The iOS app repo** lives at `/Users/juan/Documents/Swift/Projects/FoggyBrain` (separate Claude project with its own CLAUDE.md and memory).
- **Legacy pages**: `juangrafista.github.io/foggybrain-support` (repo `juangrafista/foggybrain-support`) currently hosts the live support page + privacy policy that the shipped app and App Store Connect link to. This site's `/privacy` and `/support` are ports of them and become canonical once the domain is live — see TODOs.
- **Audience**: people with brain fog (long COVID, ME/CFS, perimenopause, ADHD). The founder (Juan) and his wife had long COVID — the `/story` page is the trust anchor; community outreach links there. Never use "fix yourself" framing; the app finds patterns, it doesn't cure.

## Architecture

Fully static Next.js App Router (Next 16, Tailwind v4). No CMS, no database, no analytics, no client data collection — `/privacy` promises this, so don't add trackers.

- `app/` — routes: `/` (landing), `/articles`, `/articles/[slug]`, `/story`, `/privacy`, `/support`
- `content/articles/*.mdx` — one article per file. Frontmatter: `title`, `description`, `category`, `readMinutes`, `date`. Rendered via `next-mdx-remote/rsc` (`lib/articles.ts` reads the directory; `generateStaticParams` builds every slug). `<Callout type="tip|info|warning">` is available inside MDX.
- `components/` — `Header`, `Footer`, `FogWaves` (signature wave divider), `Callout`
- Adding an article = dropping an `.mdx` file in `content/articles/`. It appears everywhere automatically. Articles were seeded from the app's Learn section (`LearnContent.swift` in the app repo); keep the two loosely in sync when adding topics.

## Design system (do not drift from this)

Deliberately low-cognitive-load for fatigued readers: warm near-white ground, short measures (`prose-fog` = 42rem), generous spacing, minimal motion.

- **Tokens** live in `app/globals.css` `@theme`: `--color-mist` #fbf6f3 (bg), `--color-ink` #2a2140 (text, from the app icon's face), `--color-rose` #d5527e (accent), `--color-wave-1/2/3` (pinks from the icon's wave bands), `--color-blush` (card tint), `--color-soft` (secondary text).
- **Type**: Fraunces (headings, via `--font-fraunces`), **Atkinson Hyperlegible** (body, via `--font-atkinson`) — chosen because it's designed for maximum legibility; the footer tells users this on purpose. Don't swap fonts casually.
- **Signatures**: (1) `FogWaves` — layered drifting waves from the app icon, used to transition into pink sections. Solid edge is at the bottom, so it must sit directly ABOVE a section starting with `#d5527e` (never use it flipped against cream — that was a bug once). (2) The hero word "foggy" un-blurs on load (`.fog-word`).
- **All animation must respect `prefers-reduced-motion`** (existing rules in globals.css handle the current ones — extend that block for any new animation).
- Every article page auto-renders a soft app CTA + medical disclaimer; keep both.

## Writing rules

Copy is part of the accessibility story: short sentences, plain verbs, no hype. Health content must never promise cures or diagnose — "track", "notice patterns", "talk to your doctor". Article SEO targets: long-tail brain-fog queries ("brain fog after covid", "brain fog and sleep"); expand articles toward 1,000+ words over time, but never at the cost of readability.

## Commands

```bash
npm run dev     # local dev
npm run build   # static build — run before committing layout changes
```

Note: `next start` serves the LAST build — rebuild and restart to see changes outside dev mode.

## TODOs / pending

- [x] Connect repo to Vercel; add `foggybrain.app` domain (project `foggybrain-site` under `juangrafistas-projects`, GitHub auto-deploy connected). DNS still pending: add `A @ 76.76.21.21` and `A www 76.76.21.21` at Hover (registrar wasn't switched to Vercel nameservers).
- [ ] `/story` is a Claude-written draft in Juan's voice — Juan must personalize it with real details before promoting the page.
- [x] App Store CTA replaced site-wide with an email waitlist signup (`components/EmailSignupForm.tsx`, Kit/ConvertKit form 9704183, embedded at `/#waitlist` on the landing page) since the app is in private beta, not public yet. `Header.tsx`, `app/story/page.tsx`, and the article CTA all link to `/#waitlist` now.
- [ ] Once the app has a TestFlight public link, add it to the waitlist confirmation email (or alongside the form) so subscribers can join beta testing directly.
- [ ] Once public on the App Store, decide whether to keep the email list running (marketing/launch announcements) or swap the primary CTA back to a direct download link.
- [ ] Add a sitemap (`app/sitemap.ts`) + robots before promoting articles.
- [ ] Once the domain is live: update the iOS app's Settings + paywall privacy links and the App Store Connect privacy-policy URL to `https://foggybrain.app/privacy`, and put redirects (or at least matching content) on the old GitHub Pages URLs. Coordinate in the app repo.
- [ ] Set up `hello@foggybrain.app` email forwarding at the registrar, then update contact addresses here and in the app (currently juangrafista@icloud.com everywhere).
