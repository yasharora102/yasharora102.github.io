document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app-container");

  function init() {
    renderHeader(profileData);
    renderAbout(app, profileData, educationData);
    renderExperience(app, experienceData);
    renderAchievements(app, achievementsData);
    renderPublications(app, publicationsData);
    renderProjects(app, projectsData);

    // Mobile menu
    setupMobileMenu();

    // Enhancements
    setupThemeToggle(); // <-- NEW
    setupScrollReveal();
    setupScrollSpy();
    setupBackToTop();

    // Activate icons after all HTML is rendered and theme is set
    feather.replace();

    // Footer year
    document.getElementById("current-year").textContent = new Date().getFullYear();
  }

  function setupMobileMenu() {
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    const menuIcon = menuBtn.querySelector("i");

    menuBtn.addEventListener("click", () => {
      const isHidden = mobileMenu.classList.toggle("hidden");
      menuIcon.setAttribute("data-feather", isHidden ? "menu" : "x");
      feather.replace();
    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
        menuIcon.setAttribute("data-feather", "menu");
        feather.replace();
      });
    });
  }

  /** NEW: Theme Toggle Logic */
  function setupThemeToggle() {
    const docEl = document.documentElement;
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    const toggleDesktop = document.getElementById("theme-toggle-desktop");
    const toggleMobile = document.getElementById("theme-toggle-mobile");

    function applyTheme(isDark) {
      docEl.classList.toggle("dark", isDark);
      metaThemeColor.setAttribute("content", isDark ? "#121212" : "#FFFFFF");
      toggleDesktop.checked = isDark;
      toggleMobile.checked = isDark;
      localStorage.setItem("theme", isDark ? "dark" : "light");
      // Re-run feather.replace() to update icons inside the toggle
      feather.replace({ width: 16, height: 16 });
    }

    function initTheme() {
      const savedTheme = localStorage.getItem("theme");
      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      
      // Light mode is default (isDark = false)
      // We switch to dark if:
      // 1. User has explicitly saved "dark"
      // 2. User has no saved theme, but their system prefers dark
      const isDark = savedTheme === "dark" || (savedTheme === null && systemPrefersDark);
      
      applyTheme(isDark);
    }

    toggleDesktop.addEventListener("change", (e) => applyTheme(e.target.checked));
    toggleMobile.addEventListener("change", (e) => applyTheme(e.target.checked));

    // Listen for system changes (if user hasn't set a preference)
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
      if (localStorage.getItem("theme") === null) {
        applyTheme(e.matches);
      }
    });

    initTheme();
  }

  // Force all links to open in new tab by default
  document.querySelectorAll('a[href]').forEach((a) => {
    if (!a.getAttribute('target') && a.href && !a.href.startsWith(window.location.origin + window.location.pathname + '#')) {
      a.setAttribute('target', '_blank');
      a.setAttribute('rel', 'noopener noreferrer');
    }
  });

  init();
});