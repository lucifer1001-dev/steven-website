# Steven Chen — Senior Software Engineer Portfolio

A focused engineering portfolio built with Next.js, TypeScript, and Tailwind CSS. The site presents selected technical impact, professional experience, engineering capabilities, and a production-ready contact workflow.

## Highlights

- Responsive, accessible interface with reduced-motion support
- Evidence-led case studies and accomplishment-focused career timeline
- Route-specific metadata, canonical URLs, sitemap, robots, and Person structured data
- Contact delivery through Resend or a generic webhook
- TypeScript, ESLint, and production-build validation

## Local development

```bash
npm install
copy .env.example .env.local
npm run dev
```

The application runs at [http://localhost:3000](http://localhost:3000).

## Environment

Set `NEXT_PUBLIC_SITE_URL` to the deployed canonical origin.

Configure one contact delivery option:

- `RESEND_API_KEY` and `CONTACT_TO_EMAIL`; optionally set `CONTACT_FROM_EMAIL`
- `CONTACT_WEBHOOK_URL`

## Validation

```bash
npm test
npm run lint
npm run build
```

`npm test` currently performs a strict TypeScript check. Add component and end-to-end tests as interactive behavior expands.

## Structure

- `app/` — routes, metadata, SEO resources, and contact API
- `components/` — page content, navigation, backgrounds, and shared presentation
- `lib/` — canonical URL helpers
- `public/` — static assets
