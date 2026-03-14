# Portfolio Website

A professional portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🚀 Built with Next.js (App Router) and TypeScript
- 🎨 Modern, clean UI with Tailwind CSS
- 📱 Fully responsive design
- 🔍 SEO optimized with metadata and structured data
- ♿ Accessibility focused
- ⚡ Performance optimized

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

4. Configure environment variables:

```bash
cp .env.example .env.local
```

Set at least:

- `NEXT_PUBLIC_SITE_URL` for canonical URL, sitemap, and robots
- One contact delivery option:
  - `RESEND_API_KEY` + `CONTACT_TO_EMAIL` (optional `CONTACT_FROM_EMAIL`)
  - or `CONTACT_WEBHOOK_URL`

## Project Structure

```
.
├── app/
│   ├── layout.tsx      # Root layout with SEO metadata
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── Navigation.tsx   # Navigation bar
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About section
│   ├── Skills.tsx       # Skills section
│   ├── Experience.tsx   # Experience section
│   ├── Contact.tsx      # Contact form
│   └── Footer.tsx       # Footer
└── public/              # Static assets
```

## Customization

### Personal Information

Update the following files with your personal information:

- `app/layout.tsx` - Update metadata (title, description, Open Graph, etc.)
- `components/Hero.tsx` - Update hero section content
- `components/About.tsx` - Update about section
- `components/Experience.tsx` - Update experience data
- `components/Skills.tsx` - Update skills data
- `components/Contact.tsx` - Connect to your email service/API

### SEO Configuration

Update SEO metadata in `app/layout.tsx`:

- Update `metadata.openGraph.url` with your domain
- Add verification codes in `metadata.verification`
- Update canonical URL in the `<head>` section

### Styling

The project uses Tailwind CSS. Customize colors and styles in:

- `tailwind.config.ts` - Theme configuration
- `app/globals.css` - Global styles and utilities

## Build for Production

```bash
npm run build
npm start
```

## License

MIT
