/* ============================================================
   JOHN FRENCH PORTFOLIO — Main JS
   ============================================================ */

(function () {
  "use strict";

  // --- Mobile nav toggle ---
  const toggle = document.querySelector(".nav__toggle");
  const navLinks = document.querySelector(".nav__links");
  if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      navLinks.classList.toggle("is-open");
    });
    // Close on outside click
    document.addEventListener("click", (e) => {
      if (!toggle.contains(e.target) && !navLinks.contains(e.target)) {
        toggle.setAttribute("aria-expanded", "false");
        navLinks.classList.remove("is-open");
      }
    });
  }

  // --- Scroll reveal ---
  const revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => observer.observe(el));
  }

  // --- Case study sticky TOC highlight ---
  const sidebarLinks = document.querySelectorAll(".sidebar-nav__link");
  if (sidebarLinks.length) {
    const headings = Array.from(
      document.querySelectorAll(".case-study-content h2[id]")
    );
    const onScroll = () => {
      let current = "";
      headings.forEach((h) => {
        if (window.scrollY >= h.offsetTop - 120) {
          current = h.id;
        }
      });
      sidebarLinks.forEach((link) => {
        link.classList.toggle(
          "is-active",
          link.getAttribute("href") === `#${current}`
        );
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // --- Password gate ---
  const gate = document.getElementById("password-gate");
  const content = document.getElementById("protected-content");
  if (gate && content) {
    const STORAGE_KEY = "jf_case_study_auth";
    const CORRECT_HASH = gate.dataset.hash;

    // Check if already authenticated (session)
    if (sessionStorage.getItem(STORAGE_KEY) === CORRECT_HASH) {
      gate.hidden = true;
      content.hidden = false;
      return;
    }

    const form = gate.querySelector(".password-gate__form");
    const input = gate.querySelector("#gate-password");
    const error = gate.querySelector(".password-gate__error");

    // Simple hash function (FNV-1a 32-bit) — good enough for portfolio gating
    function simpleHash(str) {
      let hash = 0x811c9dc5;
      for (let i = 0; i < str.length; i++) {
        hash ^= str.charCodeAt(i);
        hash = (hash * 0x01000193) >>> 0;
      }
      return hash.toString(16);
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const val = input.value.trim();
      const hashed = simpleHash(val);
      if (hashed === CORRECT_HASH) {
        sessionStorage.setItem(STORAGE_KEY, CORRECT_HASH);
        gate.hidden = true;
        content.hidden = false;
        // Trigger reveal animations on newly shown content
        content.querySelectorAll(".reveal").forEach((el) => {
          el.classList.add("is-visible");
        });
      } else {
        error.textContent = "Incorrect password. Please try again.";
        error.hidden = false;
        input.value = "";
        input.focus();
        // Shake animation
        form.style.animation = "none";
        form.offsetHeight; // reflow
        form.style.animation = "shake 0.4s ease";
      }
    });
  }
})();

// Shake keyframe (injected once)
const style = document.createElement("style");
style.textContent = `@keyframes shake{0%,100%{transform:translateX(0)}20%,60%{transform:translateX(-6px)}40%,80%{transform:translateX(6px)}}`;
document.head.appendChild(style);
