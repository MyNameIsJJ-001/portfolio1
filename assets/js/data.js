// =====================================================
// JJ Portfolio v2 — Centralized content data
// Keep contact info, socials, and project content here
// so pages never hardcode duplicate copies.
// =====================================================

const SITE = {
  name: "Joshua Joseph Olakunle",
  shortName: "JJ",
  role: "Graphic Designer & Web Creator",
  email: "jj.olakunle.dev@gmail.com",
  phoneIntl: "+2348112052659",
  whatsappNumber: "2348112052659",
  location: "Nigeria",
  availability: "Available for new projects",
  responseTime: "Usually replies within 24 hours",
};

const SOCIALS = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/joetech10/", icon: "linkedin" },
  { name: "Behance", url: "https://www.behance.net/josepholakunle2", icon: "behance" },
  { name: "Dribbble", url: "https://dribbble.com/jj-olakunle-dev", icon: "dribbble" },
  { name: "Instagram", url: "https://www.instagram.com/simply_jj_001", icon: "instagram" },
  { name: "X", url: "https://x.com/I_Am_JJ_001", icon: "x" },
];

const WHATSAPP_URL = (text) =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(text)}`;

const CAPABILITIES = [
  { title: "Brand identity", text: "Logos, color systems, and guidelines that hold together across every touchpoint." },
  { title: "Graphic design", text: "Flyers, social creatives, and print pieces built to be noticed and remembered." },
  { title: "Website development", text: "Fast, responsive websites that turn visitors into conversations." },
  { title: "Freelance collaboration", text: "Flexible remote support for startups and small teams, short or long term." },
];

const PROJECTS = [
  {
    slug: "hoi",
    name: "H.O.I",
    tag: "Website & Brand",
    summary: "A clean, conversion-focused site and visual identity for H.O.I.",
    challenge: "H.O.I needed a web presence that matched the quality of their offering, but their existing materials were inconsistent and hard to navigate.",
    solution: "I rebuilt their site from the ground up with a clear structure, paired it with a simplified logo mark, and kept the visual language consistent across every page.",
    highlights: ["Responsive site rebuild", "Simplified brand mark", "Clearer navigation & CTAs"],
    outcome: "A site the client could confidently share with customers and partners, with a consistent identity behind it.",
    image: "assets/img/portfolio/graphics/websites/web2.jpg",
    link: "https://mynameisjj-001.github.io/H.O.I/",
    external: true,
  },
  {
    slug: "shokem",
    name: "Shokem",
    tag: "Website",
    summary: "A modern, fast-loading website built to present Shokem professionally.",
    challenge: "Shokem needed an online presence that could be built and launched quickly without sacrificing polish.",
    solution: "I designed and developed a lightweight, responsive site with a focused structure — no clutter, just what visitors needed to understand the offer and take action.",
    highlights: ["Built and shipped fast", "Mobile-first layout", "SEO-ready structure"],
    outcome: "A live site the client could point customers to with confidence.",
    image: "assets/img/portfolio/graphics/websites/web1.jpg",
    link: "https://mynameisjj-001.github.io/Shokem/",
    external: true,
  },
  {
    slug: "darmi-crotchet",
    name: "Darmi Crotchet",
    tag: "Branding & Graphics",
    summary: "A warm, handmade-feeling brand identity for a crotchet business.",
    challenge: "Darmi Crotchet's handmade products deserved branding and marketing visuals that felt just as considered as the craft itself.",
    solution: "I designed a set of business cards and social creatives with a soft, tactile visual style that reflected the handmade nature of the products.",
    highlights: ["Business card design", "Social media creatives", "Consistent visual tone"],
    outcome: "Materials the client could use immediately to look more established to customers.",
    image: "assets/img/portfolio/graphics/sample3.png",
    link: null,
    external: false,
  },
  {
    slug: "luxe-locks",
    name: "Luxe Locks By Jeh",
    tag: "Branding & Social",
    summary: "A confident, polished visual identity for a hair and locs brand.",
    challenge: "Luxe Locks needed creatives that felt premium enough to match their pricing and clientele.",
    solution: "I built a set of branded social templates and promotional graphics with a refined, consistent style the client could reuse for every post.",
    highlights: ["Branded social templates", "Promotional graphics", "Reusable design system"],
    outcome: "A stronger, more consistent presence across the client's social channels.",
    image: "assets/img/portfolio/graphics/sample7.png",
    link: null,
    external: false,
  },
];

const TESTIMONIALS = [
  {
    quote: "I so much love this idea, thanks — you really did well.",
    name: "Mr. Stuff",
    role: "H.O.I",
    avatar: "assets/img/testimonials/Logo/logo1.png",
  },
  {
    quote: "JJ delivered fast and nailed the brief. Highly recommend.",
    name: "Engineer Shola Joshua",
    role: "Shokem",
    avatar: "assets/img/testimonials/Logo/logo2.png",
  },
  {
    quote: "Thank you so much, I love the design — especially the business cards.",
    name: "Damilola",
    role: "Darmi Crotchet",
    avatar: "assets/img/testimonials/Logo/logo3.png",
  },
];

const PROCESS = [
  { title: "Project", text: "You share what you're building and what success looks like." },
  { title: "Discussion", text: "We align on scope, timeline, and budget before anything starts." },
  { title: "Design", text: "I design, you review, we refine — until it's ready to launch." },
];
