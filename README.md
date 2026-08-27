# Vito’s Pizza of Mechanicsburg

Sales demo site for [Vito’s Pizza of Mechanicsburg](https://vitospizzaofmechanicsburg.com) — pizza, pastas, subs & salads at 265 Cumberland Pkwy, Mechanicsburg, PA.

Built with Astro. Order Online CTAs link out to Slice (no checkout rebuild). Dark mode is the default look; light mode is available from the header toggle.

## Commands

```bash
npm install
npm run dev
npm run build && npm run preview
```

## Structure

```
src/
  components/     Header, Footer, SEO, sticky bar, home sections
  data/           Site copy, menu, legal
  layouts/        SiteLayout (theme script)
  pages/          Routes
  styles/         global.css (dark + light tokens)
public/media/     Brand images, dishes, gallery
```

## Pages

| Path | Description |
|------|-------------|
| `/` | Home (order-first) |
| `/menu/` | Full menu by category |
| `/catering/` | Catering inquiry |
| `/about-us/` | Story |
| `/contact-us/` | Hours, map, contact |
| `/join-us/` | Careers |
| Legal | Privacy, terms, cookies |

## Notes

- Demo only: forms are not wired to a live backend.
- NAP / phone in this build: `(717) 790-1970` · 265 Cumberland Pkwy.
- Theme preference is stored in `localStorage` (`vitos-theme`).
