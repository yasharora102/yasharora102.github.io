
document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app-container");

  function init() {
    renderHeader(profileData);
    renderAbout(app, profileData, educationData);
    renderExperience(app, experienceData);
    renderAchievements(app, achievementsData);
    renderPublications(app, publicationsData);
    renderProjects(app, projectsData);

    // Activate icons after rendering
    feather.replace();

    // Footer year
    document.getElementById("current-year").textContent = new Date().getFullYear();

    // Mobile menu
    setupMobileMenu();

    // Enhancements
    setupScrollReveal();
    setupScrollSpy();
    setupBackToTop();
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

  // Force all links to open in new tab by default
  document.querySelectorAll('a[href]').forEach((a) => {
    if (!a.getAttribute('target')) {
      a.setAttribute('target', '_blank');
      a.setAttribute('rel', 'noopener noreferrer');
    }
  });
  init();
});
