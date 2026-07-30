(() => {
  "use strict";

  document.querySelector("[data-year]").textContent = new Date().getFullYear();

  const skipLink = document.querySelector(".skip-link");
  const main = document.querySelector("#main-content");

  skipLink?.addEventListener("click", () => {
    requestAnimationFrame(() => main?.focus());
  });

  const navigationLinks = [...document.querySelectorAll(".site-nav a[href^='#']")];
  const sections = navigationLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) {
        return;
      }

      navigationLinks.forEach((link) => {
        const isCurrent = link.getAttribute("href") === `#${visible.target.id}`;
        if (isCurrent) {
          link.setAttribute("aria-current", "true");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    },
    { rootMargin: "-18% 0px -65%", threshold: [0.05, 0.2, 0.5] }
  );

  sections.forEach((section) => observer.observe(section));
})();

(() => {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("primary-nav");

  if (!header || !toggle || !nav) {
    return;
  }

  const compact = window.matchMedia("(max-width: 52rem)");

  const setOpen = (open) => {
    header.dataset.navOpen = String(open);
    toggle.setAttribute("aria-expanded", String(open));
  };

  setOpen(false);

  toggle.addEventListener("click", () => {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      setOpen(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      setOpen(false);
      toggle.focus();
    }
  });

  document.addEventListener("click", (event) => {
    if (
      toggle.getAttribute("aria-expanded") === "true" &&
      !header.contains(event.target)
    ) {
      setOpen(false);
    }
  });

  document.addEventListener("focusin", (event) => {
    if (
      toggle.getAttribute("aria-expanded") === "true" &&
      !header.contains(event.target)
    ) {
      setOpen(false);
    }
  });

  compact.addEventListener("change", () => setOpen(false));
})();

(() => {
  const stages = document.querySelectorAll(
    "#top, #work, #research, #studio, #contact"
  );

  if (!stages.length || !("IntersectionObserver" in window)) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.dataset.motion = entry.isIntersecting ? "active" : "idle";
      });
    },
    { rootMargin: "20% 0px 20%" }
  );

  stages.forEach((stage) => {
    stage.dataset.motion = "idle";
    observer.observe(stage);
  });
})();
