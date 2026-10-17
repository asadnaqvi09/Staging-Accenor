# Accenor Consulting

Marketing website for **Accenor Consulting** — accounting, bookkeeping, taxation, business registration, and financial consultancy (Rawalpindi, Pakistan).

Frontend and contact API live in **one Next.js app** (App Router). No separate Express server.

## Features

- Responsive public site: Home, About, Services (+ detail pages), Clients, Contact
- Contact form with validation (Zod + React Hook Form)
- `POST /api/inquiries` — MongoDB persistence, rate limiting, Resend email
- WhatsApp CTA with brand icon (`react-icons`) — configurable in `src/config/site.js`
- Privacy Policy & Terms placeholders (in progress)
- Custom 404 page

## Tech stack

| Layer | Stack |
|--------|--------|
| Framework | Next.js 16 (App Router), React 19, JavaScript/JSX |
| Styling | Tailwind CSS v4, shadcn/ui |
| Motion | Motion |
| Icons | Lucide React, react-icons (WhatsApp brand) |
| Validation | Zod, React Hook Form, `@hookform/resolvers` |
| Database | MongoDB + Mongoose |
| Email | Resend |
| Deploy | Vercel or Render (single project) |

## Pages

| Route | Description |
|--------|-------------|
| `/` | Home |
| `/about-us` | About |
| `/services` | Services listing |
| `/services/[slug]` | Service detail |
| `/our-clients` | Clients |
| `/contact-us` | Contact form + details |
| `/privacy-policy` | Privacy (stub) |
| `/terms-and-conditions` | Terms (stub) |

Service slugs: `accounting-bookkeeping`, `international-accounting`, `pakistan-taxation`, `business-registration`, `business-financial-consultancy`

## Getting started

### Prerequisites

- Node.js 20+ recommended
- MongoDB Atlas (or compatible) URI
- Resend API key (and verified domain for production mail)

### Install

```bash
npm install
```

### Environment

Copy the example file and fill in real values (never commit secrets):

```bash
cp .env.example .env.local
```

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Public site origin |
| `MONGODB_URI` | MongoDB connection string |
| `RESEND_API_KEY` | Resend API key |
| `CONTACT_FROM_EMAIL` | Verified sender address |
| `CONTACT_FROM_NAME` | Sender display name |
| `CONTACT_TO_EMAIL` | Staff inbox for enquiries |
| `SEND_INQUIRY_AUTO_REPLY` | Visitor confirmation email (`true` / `false`) |
| `INQUIRY_RATE_LIMIT_MAX` | Max submissions per IP per window |
| `INQUIRY_RATE_LIMIT_WINDOW_MS` | Rate-limit window (ms) |
| `INQUIRY_EMAIL_RATE_LIMIT_MAX` | Max submissions per email per window |

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

```bash
npm run dev      # development server
npm run build    # production build
npm run start    # serve production build
npm run lint     # ESLint
```

## Project structure (high level)

```text
src/
  app/
    (website)/          # Public pages
    api/inquiries/      # Contact API route
  components/           # UI (layout, home, about, services, contact, shared)
  config/site.js        # Company contact, WhatsApp, nav
  data/                 # Page copy & catalogues
  models/               # Mongoose models (Inquiry, RateLimit)
  controllers/          # API handlers
  services/             # Business logic (enquiry + email)
  repositories/         # DB access
  lib/                  # Mongo, email, security, validations
```

## Contact API

- **Endpoint:** `POST /api/inquiries`
- **Body:** `fullName`, `email`, `phone?`, `service`, `message` (+ honeypot `website` must be empty)
- **Response shape:**
  - Success: `{ "success": true, "data": { ... } }`
  - Error: `{ "success": false, "error": "..." }`

Flow: validate → rate limit (MongoDB, no Redis) → save enquiry → notify staff via Resend → optional auto-reply.

## Configuration notes

- **WhatsApp / phone / email:** `src/config/site.js`
- **Client logos:** `src/data/clients.js` (replace placeholders when assets are ready)
- **Services catalogue:** `src/data/services.js`

## Deploy

### Vercel (recommended)

1. Import the GitHub repo in [Vercel](https://vercel.com)
2. Framework preset: Next.js
3. Add the same env vars as `.env.example`
4. Deploy
5. Set `NEXT_PUBLIC_SITE_URL` to the deployment URL (or custom domain) and redeploy if needed

### Render

1. New **Web Service** from the GitHub repo
2. Build: `npm install && npm run build`
3. Start: `npm run start`
4. Add the same env vars
5. Deploy and smoke-test `/contact-us`

## Smoke test after deploy

1. Browse main pages on mobile and desktop
2. Submit the contact form
3. Confirm a document in MongoDB (`inquiries`)
4. Confirm staff email in Resend / inbox
5. Test WhatsApp link

## License

Private — Accenor Consulting. All rights reserved.
