# DJ Mobangs — Official Website

Premium multi-page website for DJ Mobangs. Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and editorial typography.

## Stack

- **Next.js 14** (App Router, RSC)
- **TypeScript**
- **Tailwind CSS** + `tailwindcss-animate`
- **Lucide** icons
- **Bricolage Grotesque** + **Instrument Serif** + **Geist** (Google Fonts)

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Pages

| Route          | File                                |
| -------------- | ----------------------------------- |
| `/`            | `src/app/page.tsx`                  |
| `/about`       | `src/app/about/page.tsx`            |
| `/experiences` | `src/app/experiences/page.tsx`      |
| `/mixes`       | `src/app/mixes/page.tsx`            |
| `/gallery`     | `src/app/gallery/page.tsx`          |
| `/booking`     | `src/app/booking/page.tsx`          |
| `/contact`     | `src/app/contact/page.tsx`          |

## Design system

- **Colors**: deep ink black `#0A0A0A`, bone white `#F5F1E8`, warm gold `#E5B358` — defined in `tailwind.config.ts`
- **Reusable components**: `Navbar`, `Footer`, `Button`, `Marquee`, `Reveal`, `SectionHeader`, `PageHeader`, `PlaceholderImage`, `BookingForm`, `ContactForm`

## Replacing placeholders

1. **Images** — the supplied DJ Mobangs photos are wired through `public/gallery/`. Add more hi-res files there as new shoots arrive.
2. **Mix embeds** — `src/app/mixes/page.tsx` has placeholder blocks ready for YouTube, Audiomack and Mixcloud iframes.
3. **Contact details** — phone, email and WhatsApp placeholders are in `src/app/contact/page.tsx` and `src/components/Footer.tsx`.
4. **Form submission** — `BookingForm` and `ContactForm` currently `console.log()` on submit. Wire them to your backend (Resend, Formspree, an API route, etc.).

## SEO

- Title and description set in `src/app/layout.tsx` and per-page `metadata`.
- `robots.ts` and `sitemap.ts` ship out of the box (point `metadataBase` at the production domain).

## Build

```bash
npm run build
npm start
```
