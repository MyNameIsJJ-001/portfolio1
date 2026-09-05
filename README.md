# JJ Portfolio v2

Built from `JJ-Portfolio-v2-Design-Doc.md`. Static site — no build step, deploys straight to GitHub Pages.

## Structure
```
index.html      Home
work.html       Work (case studies)
contact.html    Contact
404.html        On-brand error page
assets/css/style.css   Design system (tokens, layout, components)
assets/js/data.js      All content — projects, testimonials, socials, contact info
assets/js/main.js      Theme toggle, nav, motion, scroll behavior
```

## One thing you need to add: images
This rebuild reuses your **existing `assets/img` folder** from the old site — just copy it in as-is:
- `assets/img/logo.png`, `assets/img/favicon.png`
- `assets/img/portfolio/graphics/websites/web1.jpg`, `web2.jpg` (H.O.I, Shokem thumbnails)
- `assets/img/portfolio/graphics/sample3.png`, `sample7.png` (used for the two branding case studies — swap for whichever samples represent Darmi Crotchet and Luxe Locks best)
- `assets/img/testimonials/Logo/logo1.png`, `logo2.png`, `logo3.png`

If any file is missing, that image will just show as broken — nothing else breaks.

## Content
Everything editable (email, phone, socials, project copy, testimonials, capabilities, process steps) lives in **`assets/js/data.js`**. Edit that one file instead of hunting through HTML.

## Deploying
Push this folder to your GitHub Pages repo root (or `/docs`) and it's live — no build step required.

## Notes on the build vs. the spec
The blueprint's tech stack (Ch.13) calls for Next.js/TypeScript. I built the same architecture and design system in plain HTML/CSS/JS with GSAP + Lenis instead, so it's a zero-build static site you can preview and deploy immediately. If you later want it in Next.js for routing/data-fetching benefits, the CSS tokens and `data.js` content structure port over directly.
