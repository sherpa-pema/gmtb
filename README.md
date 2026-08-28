# GNARLY MTB Nepal 🇳🇵

Production-ready website for **GNARLY MTB Nepal** — Signature Himalayan Expeditions, Himalayan Enduro racing, and G MTB Skills coaching.

Built with **Next.js 14 (App Router)**, **Tailwind CSS**, and **TypeScript**, ready for one-click deployment on **Vercel**.

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production

```bash
npm run build
npm run start
```

## 🌐 Deploying to Vercel

### Option 1: Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option 2: Git Repository (Recommended)
1. Push this project to GitHub / GitLab / Bitbucket.
2. Go to [vercel.com/new](https://vercel.com/new).
3. Import the repository.
4. Framework preset will automatically be detected as **Next.js**.
5. Click **Deploy**.

## 📁 Project Structure

- `public/images/` — High-resolution optimized static images.
- `src/app/` — Next.js App Router (layout, font optimization with Google Fonts, metadata, globals.css).
- `src/components/` — Modular, typed React components for each section:
  - `Navbar.tsx` — Sticky header, mobile navigation drawer, active section indicator toast.
  - `Hero.tsx` — Hero banner with Mustang coordinates, guide statistics, and CTA actions.
  - `TrustBanner.tsx` — Certifications and UNESCO partner strip.
  - `WhyUs.tsx` — Value proposition cards with hover interactions.
  - `Tours.tsx` — 4 Signature Expeditions (Thin Air, Everest, Upper Mustang E-Bike, Moto).
  - `ThinAir.tsx` — Spotlight feature for Lower Mustang Thin Air descent and 8-point trip highlights.
  - `Enduro.tsx` — Himalayan Enduro race showcase with embedded videos.
  - `Team.tsx` — Founder & guide profiles.
  - `Skills.tsx` — G MTB Skills & coaching clinic booking.
  - `Contact.tsx` — Booking and inquiry banner.
  - `Footer.tsx` — Dark theme footer with navigation and copyright.
- `src/types/` — TypeScript interfaces.
