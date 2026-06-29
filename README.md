# Nomoexam Marketing Site

This is the marketing website for Nomoexam, hosted at `nomoexam.com`.

## Purpose

- Landing pages, features, pricing
- Public-facing content
- SEO optimized
- No authentication required

## Tech Stack

- **Next.js 14+** (App Router)
- **Tailwind CSS**
- **TypeScript**

## Pages

- `/` - Homepage
- `/features` - Feature showcase
- `/pricing` - Pricing page
- `/how-it-works` - How it works
- `/contact` - Contact form
- `/compare/*` - Comparison pages
- `/privacy-policy` - Privacy policy
- `/terms-of-service` - Terms of service
- `/cookie-policy` - Cookie policy

## Getting Started

### Install Dependencies

```bash
npm install
```

### Environment Setup

Copy `.env.example` to `.env.local` and update:

```bash
cp .env.example .env.local
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## Deployment

Deployed to Vercel at `nomoexam.com`

### Environment Variables (Production)

- `NEXT_PUBLIC_BASE_URL`: https://nomoexam.com
- `NEXT_PUBLIC_APP_URL`: https://app.nomoexam.com
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`: (optional)

## Links to Student App

All CTA buttons link to `app.nomoexam.com`:
- Login → `https://app.nomoexam.com/auth`
- Sign Up → `https://app.nomoexam.com/auth`
- Get Started → `https://app.nomoexam.com/dashboard`

## Project Structure

```
/app                    # Next.js app router pages
/components
  /landing              # Landing page components
  /layout               # Layout components
  /ui                   # Shared UI components
/lib                    # Utilities and helpers
/public                 # Static assets
```

## Notes

- This is a completely separate project from the student app
- No shared code or dependencies
- Fast, static site optimized for marketing
- Update frequently without affecting the main app
