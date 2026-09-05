// =====================================================
// JJ Portfolio — Merged interaction script
// Combines: main.js + main2.js
// Theme, preloader, navigation, scroll behavior, motion (GSAP + Lenis)
// Supports both markup conventions found in the source files:
//   - .navbar / .menu-btn / .mobile-panel / data-theme-toggle / .reveal
//   - .nav / .nav-toggle / .nav-links / .theme-switch / data-reveal
// =====================================================

(function () {
  "use strict";

  var root = document.documentElement;
  document.body.classList.add("js-ready");

  var prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  /* ---------------- Preloader ---------------- */
  window.addEventListener("load", function () {
    var pre = document.getElementById("preloader");
    if (pre) setTimeout(function () { pre.classList.add("hide"); }, 250);
  });

  /* ---------------- Theme ---------------- */
  var THEME_KEY = "jj-theme";

  function applyTheme(mode) {
    root.setAttribute("data-theme", mode);
    document.querySelectorAll(".theme-switch").forEach(function (btn) {
      btn.setAttribute("aria-checked", mode === "dark");
    });
  }

  var savedTheme =
    localStorage.getItem(THEME_KEY) ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  applyTheme(savedTheme);

  function setTheme(mode) {
    applyTheme(mode);
    localStorage.setItem(THEME_KEY, mode);
  }

  // data-theme-toggle buttons (main.js convention)
  document.querySelectorAll("[data-theme-toggle]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var current = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
      setTheme(current === "dark" ? "light" : "dark");
    });
  });

  // .theme-switch buttons (main2.js convention)
  document.querySelectorAll(".theme-switch").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var current = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
      setTheme(current === "dark" ? "light" : "dark");
    });
  });

  /* ---------------- Footer year ---------------- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------------- Active nav link ---------------- */
  var path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link[href]").forEach(function (a) {
    var href = a.getAttribute("href");
    if (href === path || (path === "" && href === "index.html")) {
      a.classList.add("active");
    }
  });

  /* ---------------- Hero portrait rotation (fade + swap src) ---------------- */
  var heroPortrait = document.getElementById("heroPortrait");
  if (heroPortrait && !prefersReducedMotion) {
    var portraitImg = heroPortrait.querySelector("img");
    // Add new photos here — just drop the filename in this array.
    var portraitSources = [
      "assets/img/profilee.webp",
      "assets/img/profile.webp",
      "assets/img/profileeee.webp"
    ];
    if (portraitImg && portraitSources.length > 1) {
      var currentIndex = 0;
      setInterval(function () {
        portraitImg.classList.add("fade-out");
        setTimeout(function () {
          currentIndex = (currentIndex + 1) % portraitSources.length;
          portraitImg.src = portraitSources[currentIndex];
          portraitImg.classList.remove("fade-out");
        }, 600); // matches the CSS transition duration
      }, 5000); // time each photo stays on screen
    }
  }

  /* ---------------- Navbar ready + scroll state ---------------- */
  var navbar = document.querySelector(".navbar");
  if (navbar) {
    requestAnimationFrame(function () { navbar.classList.add("is-ready"); });
    var onScroll = function () {
      navbar.classList.toggle("is-scrolled", window.scrollY > 24);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // .nav shrink-on-scroll variant
  var nav = document.querySelector(".nav");
  if (nav) {
    window.addEventListener("scroll", function () {
      nav.classList.toggle("is-shrunk", window.scrollY > 40);
    }, { passive: true });
  }

  /* ---------------- Scroll progress bar (desktop) ---------------- */
  var progressBar = document.querySelector(".scroll-progress");
  function updateProgress() {
    if (!progressBar) return;
    var scrollTop = document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - window.innerHeight;
    var percent = height > 0 ? (scrollTop / height) * 100 : 0;
    progressBar.style.width = percent + "%";
  }
  if (progressBar) {
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    updateProgress();
  }

  /* ---------------- Back to top ---------------- */
  var backToTop = document.querySelector(".back-to-top");
  if (backToTop) {
    function toggleBackToTop() {
      var height = document.documentElement.scrollHeight - window.innerHeight;
      var percent = height > 0 ? window.scrollY / height : 0;
      backToTop.classList.toggle("is-visible", percent > 0.35);
    }
    window.addEventListener("scroll", toggleBackToTop, { passive: true });
    toggleBackToTop();
    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
    });
  }

  /* ---------------- Mobile menu: .menu-btn / .mobile-panel ---------------- */
  var menuBtn = document.querySelector(".menu-btn");
  var mobilePanel = document.querySelector(".mobile-panel");
  if (menuBtn && mobilePanel) {
    var closeMenu = function () {
      menuBtn.classList.remove("is-open");
      mobilePanel.classList.remove("is-open");
      document.body.classList.remove("menu-locked");
      menuBtn.setAttribute("aria-expanded", "false");
    };
    var openMenu = function () {
      menuBtn.classList.add("is-open");
      mobilePanel.classList.add("is-open");
      document.body.classList.add("menu-locked");
      menuBtn.setAttribute("aria-expanded", "true");
    };
    menuBtn.addEventListener("click", function () {
      var isOpen = mobilePanel.classList.contains("is-open");
      isOpen ? closeMenu() : openMenu();
    });
    mobilePanel.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeMenu);
    });
    window.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });
  }

  /* ---------------- Mobile nav: .nav-toggle / .nav-links ---------------- */
  var navToggle = document.querySelector(".nav-toggle");
  var navLinks = document.querySelector(".nav-links");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      var open = navLinks.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", open);
    });
    navLinks.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { navLinks.classList.remove("open"); });
    });
  }

  /* ---------------- Lenis smooth scroll ---------------- */
  var lenis = null;
  if (window.Lenis && !prefersReducedMotion) {
    lenis = new Lenis({
      duration: 1.05,
      easing: function (t) { return 1 - Math.pow(1 - t, 3); },
      smoothWheel: true,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    if (window.gsap && window.gsap.ticker) {
      // Keep GSAP's ScrollTrigger in sync with Lenis
      lenis.on("scroll", function () {
        window.ScrollTrigger && ScrollTrigger.update();
      });
      gsap.ticker.add(function (time) { lenis.raf(time * 1000); });
      gsap.ticker.lagSmoothing(0);
    }
  }

  /* ---------------- GSAP motion ---------------- */
  if (window.gsap) {
    if (window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

    // Hero line-mask reveal
    var heroLines = document.querySelectorAll(".hero h1 .line span");
    if (heroLines.length) {
      gsap.to(heroLines, {
        y: "0%",
        duration: prefersReducedMotion ? 0.01 : 0.9,
        ease: "power3.out",
        stagger: 0.08,
        delay: 0.15,
      });
    }

    // Hero supporting fade-ups
    gsap.utils.toArray(".hero .fade-item").forEach(function (el, i) {
      gsap.fromTo(
        el,
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: prefersReducedMotion ? 0.01 : 0.6,
          ease: "power2.out",
          delay: 0.35 + i * 0.08,
        }
      );
    });

    // Scroll reveals: .reveal convention
    gsap.utils.toArray(".reveal").forEach(function (el) {
      gsap.fromTo(
        el,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: prefersReducedMotion ? 0.01 : 0.7,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        }
      );
    });

    // Scroll reveals: [data-reveal] convention
    var revealTargets = document.querySelectorAll("[data-reveal]");
    revealTargets.forEach(function (el, i) {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: prefersReducedMotion ? 0.01 : 0.8,
        ease: "power3.out",
        delay: prefersReducedMotion ? 0 : (i % 4) * 0.06,
        scrollTrigger: { trigger: el, start: "top 88%", once: true },
      });
    });
  } else {
    // GSAP failed to load — ensure content is still visible
    document.querySelectorAll(".reveal, [data-reveal]").forEach(function (el) {
      el.style.opacity = 1;
      el.style.transform = "none";
    });
  }

  /* ---------------- Contact quick actions ---------------- */
  // Relies on the global SITE object defined in data.js
  if (window.SITE) {
    document.querySelectorAll("[data-whatsapp]").forEach(function (el) {
      var msg =
        el.getAttribute("data-whatsapp") ||
        "Hi JJ, I found your portfolio and would like to talk about a project.";
      el.href = "https://wa.me/" + SITE.whatsappNumber + "?text=" + encodeURIComponent(msg);
    });
    document.querySelectorAll("[data-email]").forEach(function (el) {
      el.href = "mailto:" + SITE.email;
    });
    document.querySelectorAll("[data-call]").forEach(function (el) {
      el.href = "tel:" + SITE.phoneIntl;
    });
  }

  /* ---------------- Gallery show-more (data-gallery-limit) ---------------- */
  document.querySelectorAll("[data-gallery-limit]").forEach(function (grid) {
    var limit = parseInt(grid.getAttribute("data-gallery-limit"), 10) || 4;
    var items = Array.prototype.slice.call(grid.children);
    if (items.length <= limit) return; // nothing to hide, skip the button entirely

    var extra = items.slice(limit);
    extra.forEach(function (item) {
      item.classList.add("gallery-hidden");
    });

    var toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "btn btn-ghost gallery-toggle";
    var moreLabel = "View all " + items.length + " \u2192";
    var lessLabel = "Show less";
    toggle.textContent = moreLabel;
    grid.insertAdjacentElement("afterend", toggle);

    var expanded = false;
    toggle.addEventListener("click", function () {
      expanded = !expanded;
      extra.forEach(function (item) {
        item.classList.toggle("gallery-hidden", !expanded);
      });
      toggle.textContent = expanded ? lessLabel : moreLabel;
      if (!expanded) {
        grid.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "nearest" });
      }
    });
  });

  /* ---------------- Lucide icons ---------------- */
  if (window.lucide) lucide.createIcons();
})();
