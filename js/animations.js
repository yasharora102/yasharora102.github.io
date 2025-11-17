/** IntersectionObserver-based reveal */
function setupScrollReveal() {
  const elements = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = parseInt(entry.target.dataset.delay || "0", 10);
          setTimeout(() => entry.target.classList.add("is-visible"), delay);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  elements.forEach((el) => observer.observe(el));
}

/** Smooth scroll with offset handled by CSS scroll-padding; add scrollspy */
function setupScrollSpy() {
  const navLinks = Array.from(
    document.querySelectorAll('#desktop-nav-links a, #mobile-nav-links a')
  );
  const sections = navLinks
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

  function onScroll() {
    const pos = window.scrollY + 100;
    let activeIndex = sections.findIndex((s, i) => {
      const next = sections[i + 1];
      return pos >= s.offsetTop && (!next || pos < next.offsetTop);
    });
    
    // Fallback for when no section is "active" (e.g., at the very top)
    // No, let's highlight the first one if we're above its offset
    if (pos < sections[0].offsetTop) {
      activeIndex = 0;
    } else if (activeIndex === -1 && sections.length > 0) {
      // If at the bottom, keep the last one active
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
         activeIndex = sections.length - 1;
      } else {
         activeIndex = 0; // Default to first
      }
    }


    navLinks.forEach((a, i) => {
      // UPDATED LOGIC:
      // Remove active classes from all, then add to the active one.
      // This is safer than toggling.
      a.classList.remove("text-light-primary", "dark:text-dark-primary");
      a.classList.add("text-light-text", "dark:text-dark-text");

      if (i === activeIndex) {
        a.classList.remove("text-light-text", "dark:text-dark-text");
        a.classList.add("text-light-primary", "dark:text-dark-primary");
      }
    });
  }
  document.addEventListener("scroll", onScroll, { passive: true });
  onScroll(); // Run on load
}

/** Back-to-top button */
function setupBackToTop() {
  const btn = document.getElementById("back-to-top");
  function toggle() {
    if (window.scrollY > 600) {
      btn.classList.add("show");
      btn.classList.remove("hidden");
    } else {
      btn.classList.add("hidden");
      btn.classList.remove("show");
    }
  }
  window.addEventListener("scroll", toggle, { passive: true });
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  toggle();
}