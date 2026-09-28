# SIAVURA — website MVP

A bilingual (English-first / Italian) Next.js App Router site for SIAVURA.

## What is already included

- English at `/en`
- Italian at `/it`
- Fixed navigation with language switch
- Narrative homepage: Perception → Understanding → Transformation
- SIAVURA signature/reveal section
- Solutions section
- Projects section
- CMI project page at `/en/projects/cmi` and `/it/projects/cmi`
- About and Contact pages
- Responsive layout for desktop/mobile
- SIAVURA visual assets in `public/images`
- Basic SEO metadata, sitemap and robots files

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Main files to learn from

- `app/[locale]/page.tsx` — homepage composition
- `components/Header.tsx` — navigation
- `components/Logo.tsx` — logo mark
- `lib/copy.ts` — all English/Italian copy
- `app/globals.css` — visual system and motion

## Next build steps

1. Replace placeholder/temporary content with the final SIAVURA copy.
2. Add the final founder photo and social links.
3. Add a dedicated SIAVURA Studio/services page when the offer is validated.
4. Connect the domain deployment to Cloudflare.
5. Add analytics only after the content/design is stable.
