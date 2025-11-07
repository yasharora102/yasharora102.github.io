
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
    if (activeIndex === -1) activeIndex = 0;
    navLinks.forEach((a, i) => {
      a.classList.toggle("text-dark-primary", i === activeIndex);
    });
  }
  document.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
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

