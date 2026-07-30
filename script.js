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
