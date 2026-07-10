# JJ Portfolio — v2 (rebuild)

Static site: 3 pages (Home, Work, Contact), no backend, deployable straight to GitHub Pages.

## 1. Drop in your real assets
Create this folder structure next to the HTML files and copy your real files in — the HTML already points to these exact paths, so nothing else needs editing:

```
assets/
  img/
    logo.png
    favicon.png
    profilee.png
    JJ-CV.pdf            (put this directly in /assets, not /assets/img)
    portfolio/graphics/
      sample1.jpg ... sample18.png
      websites/web1.jpg, web2.jpg, web3.jpg
    certificates/
      cert1.jpg, cert2.jpg, cert3.png
    testimonials/Logo/
      logo1.png ... logo5.png
```

Right now those `<img>` tags will show broken-image icons until the real files are in place — that's expected.

## 2. What's already wired up
- **Theme switch** (top right, pill toggle) — full light/dark redesign, not just inverted colors, 300ms transition, saved to localStorage.
- **Floating glass navbar** — blurred, rounded, shrinks on scroll, hamburger only appears under ~860px.
- **GSAP scroll reveals + Lenis smooth scroll** — respects `prefers-reduced-motion`.
- **Editorial work list** on `work.html` — large project rows, no sliders/carousels, per your spec.
- **Contact page** — no form, just tap-through Email / WhatsApp / LinkedIn links. "Schedule a call" is a disabled placeholder — swap the `href="#"` in `contact.html` for your Calendly/Cal.com link once you have one.
- **Capabilities** section (renamed from Services) on the homepage.
- Design tokens (colors, radius system, fonts) all live at the top of `assets/css/style.css` — change once, applies everywhere.

## 3. Radius system (as specified)
Buttons `999px` · Navbar `28px` · Cards/Images `24px` · Inputs `18px`

## 4. Fonts
General Sans (display/body) loaded from Fontshare, IBM Plex Mono (labels/eyebrows) from Google Fonts. Both are free — no license to buy.

## 5. Deploying
No build step. Push this folder to a GitHub repo, enable Pages on the `main` branch, done.

## 6. Optional next steps
- Compress images to WebP/AVIF and add `loading="lazy"` where missing, to hit the sub-1.2s FCP target from your brief.
- Swap the placeholder Calendly link in `contact.html`.
- If you want a 4th case study written up in more depth (problem → approach → result), duplicate one `.work-row` block in `work.html`.
