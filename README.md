# foggybrain.app

Marketing and content site for [FoggyBrain](https://apps.apple.com/gb/app/foggybrain-brain-fog-tracker/id6759265919), the brain fog tracking app for iOS.

Fully static Next.js (App Router). No CMS, no database, no analytics.

## Structure

- `app/` — pages: landing, `/articles`, `/story`, `/privacy`, `/support`
- `content/articles/*.mdx` — one file per article; frontmatter: `title`, `description`, `category`, `readMinutes`, `date`. Rendered with `next-mdx-remote`; `<Callout type="tip|info|warning">` is available inside MDX.
- `components/FogWaves.tsx` — the signature wave divider, derived from the app icon.

## Design notes

- Palette comes from the app icon: warm pinks/corals (`--color-rose`, `--color-wave-*`) over deep plum ink (`--color-ink`) on a warm near-white (`--color-mist`). Tokens live in `app/globals.css`.
- Headings: Fraunces. Body: Atkinson Hyperlegible — chosen deliberately for legibility (the audience has cognitive fatigue). Keep line lengths short and spacing generous.
- All motion is subtle and disabled under `prefers-reduced-motion`.

## Develop

```bash
npm run dev    # local dev
npm run build  # static production build
```

## Deploy

Vercel, standard Next.js preset. The domain is `foggybrain.app`.

## Adding an article

Drop a new `.mdx` file in `content/articles/` with the frontmatter fields above — it appears in the index and gets its own route automatically. Keep the closing app mention soft, and keep the medical disclaimer footer intact (it renders on every article automatically).
