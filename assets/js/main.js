/* =========================================================
   JJ — main.js
   Theme switch · Lenis smooth scroll · GSAP reveals · Navbar
   ========================================================= */

(function () {
  "use strict";

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------- Preloader ---------------- */
  /* Waits for the full page (including images) to load before
     revealing content — intentional loading-screen behavior. */
  window.addEventListener("load", function () {
    var pre = document.getElementById("preloader");
    if (pre) setTimeout(function () { pre.classList.add("hide"); }, 250);
  });

  /* ---------------- Theme switch ---------------- */
  var root = document.documentElement;
  var stored = localStorage.getItem("jj-theme");
  var systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  var initial = stored || (systemDark ? "dark" : "light");
  root.setAttribute("data-theme", initial);

  function setTheme(theme) {
    root.setAttribute("data-theme", theme);
    localStorage.setItem("jj-theme", theme);
    document.querySelectorAll(".theme-switch").forEach(function (btn) {
      btn.setAttribute("aria-checked", theme === "dark");
    });
  }

  document.querySelectorAll(".theme-switch").forEach(function (btn) {
    btn.setAttribute("aria-checked", initial === "dark");
    btn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      setTheme(next);
    });
  });

  /* ---------------- Mobile nav toggle ---------------- */
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

  /* ---------------- Navbar shrink on scroll ---------------- */
  var nav = document.querySelector(".nav");
  if (nav) {
    var lastY = 0;
    window.addEventListener("scroll", function () {
      var y = window.scrollY;
      nav.classList.toggle("is-shrunk", y > 40);
      lastY = y;
    }, { passive: true });
  }

  /* ---------------- Footer year ---------------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------------- Lenis smooth scroll ---------------- */
  if (!prefersReducedMotion && window.Lenis) {
    var lenis = new Lenis({ duration: 1.05, smoothWheel: true });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    if (window.gsap && window.gsap.ticker) {
      gsap.ticker.add(function (time) { lenis.raf(time * 1000); });
      gsap.ticker.lagSmoothing(0);
    }
  }

  /* ---------------- GSAP scroll reveals ---------------- */
  if (window.gsap) {
    gsap.registerPlugin(ScrollTrigger);
    var targets = document.querySelectorAll("[data-reveal]");
    targets.forEach(function (el, i) {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: prefersReducedMotion ? 0.01 : 0.8,
        ease: "power3.out",
        delay: prefersReducedMotion ? 0 : (i % 4) * 0.06,
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          once: true
        }
      });
    });
  } else {
    // Fallback: no GSAP loaded, just show content
    document.querySelectorAll("[data-reveal]").forEach(function (el) {
      el.style.opacity = 1;
      el.style.transform = "none";
    });
  }

  /* ---------------- Lucide icons ---------------- */
  if (window.lucide) lucide.createIcons();

})();
