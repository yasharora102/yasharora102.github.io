/** Rendering modules */
function renderHeader(profile) {
  document.getElementById("nav-name").textContent = profile.name;
  document.getElementById("footer-name").textContent = profile.name;

  const desktopNav = document.getElementById("desktop-nav-links");
  const mobileNav = document.getElementById("mobile-nav-links");
  desktopNav.innerHTML = "";
  mobileNav.innerHTML = "";

  profile.navLinks.forEach((link) => {
    desktopNav.insertAdjacentHTML(
      "beforeend",
      `<a href="${link.href}" class="text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary transition-colors duration-200">${link.name}</a>`
    );
    mobileNav.insertAdjacentHTML(
      "beforeend",
      `<a href="${link.href}" class="block text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary transition-colors duration-200 py-1">${link.name}</a>`
    );
  });

  const desktopSocial = document.getElementById("desktop-social-links");
  const mobileSocial = document.getElementById("mobile-social-links");
  desktopSocial.innerHTML = "";
  mobileSocial.innerHTML = "";
  profile.socials.forEach((social) => {
    const icon = `<i data-feather="${social.icon}" class="w-5 h-5"></i>`;
    desktopSocial.insertAdjacentHTML(
      "beforeend",
      `<a href="${social.url}" title="${social.name}" class="text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary transition-colors duration-200 social-icon-hover">${icon}</a>`
    );
    mobileSocial.insertAdjacentHTML(
      "beforeend",
      `<a href="${social.url}" title="${social.name}" class="text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary transition-colors duration-200 social-icon-hover">${icon}</a>`
    );
  });
}

function renderAbout(container, profile, education) {
  const socialLinksHtml = profile.socials
    .map(
      (s) => `<a href="${s.url}" title="${s.name}" class="text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary transition-colors duration-200 social-icon-hover">
                <i data-feather="${s.icon}" class="w-6 h-6"></i>
              </a>`
    )
    .join("");

  const interestsHtml = profile.interests.map((i) => `<li>${i}</li>`).join("");

  const educationHtml = education
    .map(
      (e) => `<li>
        <p class="font-semibold text-light-heading dark:text-dark-heading text-lg">${e.degree}</p>
        <p class="text-light-primary dark:text-dark-primary">${e.institution} (${e.year})</p>
      </li>`
    )
    .join("");

  const section = document.createElement("section");
  section.id = "about";
  section.className = "flex flex-col md:flex-row items-center gap-12 lg:gap-16";
  section.innerHTML = `
    <div class="flex-shrink-0 text-center reveal">
      <img src="${profile.imageUrl}" alt="${profile.name}" class="rounded-full w-40 h-40 md:w-48 md:h-48 object-cover border-4 border-light-border dark:border-dark-border shadow-lg mx-auto">
      <h1 class="text-3xl font-bold text-light-heading dark:text-dark-heading mt-6">${profile.name}</h1>
      <p class="text-sm mt-1">${profile.email}</p>
      <p id="typing-tagline" class="text-light-primary dark:text-dark-primary mt-2 text-lg typing-text"></p>
      <p class="text-sm mt-1">${profile.affiliation}</p>
      <div class="flex justify-center space-x-6 mt-6">${socialLinksHtml}</div>
    </div>
    <div class="flex-1">
      <h2 class="text-4xl font-bold text-light-heading dark:text-dark-heading mb-6 reveal" data-delay="100">About Me</h2>
      <p class="text-lg mb-8 leading-relaxed reveal" data-delay="200">${profile.aboutMe}</p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="reveal" data-delay="300">
          <h3 class="text-2xl font-semibold text-light-heading dark:text-dark-heading mb-4">Interests</h3>
          <ul class="list-disc list-inside space-y-2 text-lg">${interestsHtml}</ul>
        </div>
        <div class="reveal" data-delay="400">
          <h3 class="text-2xl font-semibold text-light-heading dark:text-dark-heading mb-4">Education</h3>
          <ul class="space-y-4">${educationHtml}</ul>
        </div>
      </div>
    </div>
  `;
  container.appendChild(section);

  // Improved typing effect
  const taglineEl = section.querySelector("#typing-tagline");
  const text = profile.tagline;
  let index = 0;

  taglineEl.classList.add("typing", "typing-text");
  const typingSpeed = 80; // ms per character

  const typingInterval = setInterval(() => {
    taglineEl.textContent = text.slice(0, index);
    index++;
    if (index > text.length) {
      clearInterval(typingInterval);
      setTimeout(() => taglineEl.classList.remove("typing"), 800); // remove caret
    }
  }, typingSpeed);

}

function renderExperience(container, experiences) {
  const experiencesHtml = experiences
    .map(
      (exp) => `
      <div class="max-w-3xl mx-auto bg-light-card dark:bg-dark-card p-8 rounded-lg shadow-lg border border-light-border dark:border-dark-border flex flex-col sm:flex-row items-center gap-8 reveal">
        <img src="${exp.logoUrl}" alt="${exp.alt}" class="w-24 h-24 rounded-full flex-shrink-0 border-2 border-light-border dark:border-dark-border">
        <div>
          <h3 class="text-2xl font-semibold text-light-heading dark:text-dark-heading">${exp.role}</h3>
          <p class="text-light-primary dark:text-dark-primary font-medium my-2 text-lg">${exp.duration}</p>
          <p class="text-light-text dark:text-dark-text">${exp.supervisor}</p>
        </div>
      </div>`
    )
    .join("");

  const section = document.createElement("section");
  section.id = "experience";
  section.className = "mt-24";
  section.innerHTML = `<h2 class="text-3xl font-bold text-light-heading dark:text-dark-heading mb-10 text-center reveal">Research Experience</h2>${experiencesHtml}`;
  container.appendChild(section);
}

function renderAchievements(container, achievements) {
  const achievementsHtml = achievements
    .map((ach) => {
      const linksHtml = ach.links
        .map((link) => {
          const bg = link.name === "Paper" 
            ? "bg-light-primary dark:bg-dark-primary hover:bg-blue-700 dark:hover:bg-blue-600" 
            : "bg-gray-500 dark:bg-gray-600 hover:bg-gray-600 dark:hover:bg-gray-500";
          return `<a href="${link.url}" class="inline-flex items-center gap-2 ${bg} text-white px-5 py-2 rounded-md transition-colors duration-200 publication-link">
            <i data-feather="${link.icon}" class="w-4 h-4"></i>${link.name}
          </a>`;
        })
        .join("");
      return `
      <div class="bg-light-card dark:bg-dark-card overflow-hidden rounded-lg shadow-lg md:flex border border-light-border dark:border-dark-border max-w-5xl mx-auto reveal">
        <div class="md:w-1/3"><img src="${ach.imageUrl}" alt="${ach.alt}" class="object-cover w-full h-full min-h-[250px]"></div>
        <div class="md:w-2/3 p-8">
          <h3 class="text-2xl font-semibold text-light-heading dark:text-dark-heading mb-2">${ach.title}</h3>
          <p class="text-light-primary dark:text-dark-primary italic mb-4">${ach.authors}</p>
          <p class="mb-6">${ach.description}</p>
          <div class="flex flex-wrap gap-4">${linksHtml}</div>
        </div>
      </div>`;
    })
    .join("");

  const section = document.createElement("section");
  section.id = "achievements";
  section.className = "mt-24";
  section.innerHTML = `<h2 class="text-3xl font-bold text-light-heading dark:text-dark-heading mb-10 text-center reveal">Achievements</h2>${achievementsHtml}`;
  container.appendChild(section);
}

function renderPublications(container, publications) {
  const publicationsHtml = publications
    .map((pub) => {
      const linksHtml = pub.links
        .map((link) => {
          const bg = link.name === "Paper" 
            ? "bg-light-primary dark:bg-dark-primary hover:bg-blue-700 dark:hover:bg-blue-600" 
            : "bg-gray-500 dark:bg-gray-600 hover:bg-gray-600 dark:hover:bg-gray-500";
          return `<a href="${link.url}" class="inline-flex items-center gap-2 ${bg} text-white px-5 py-2 rounded-md transition-colors duration-200 publication-link">
            <i data-feather="${link.icon}" class="w-4 h-4"></i>${link.name}
          </a>`;
        })
        .join("");

      return `
      <div class="bg-light-card dark:bg-dark-card overflow-hidden rounded-lg shadow-lg md:flex border border-light-border dark:border-dark-border max-w-5xl mx-auto reveal">
        <div class="md:w-1/3"><img src="${pub.imageUrl}" alt="${pub.alt}" class="object-cover w-full h-full min-h-[250px]"></div>
        <div class="md:w-2/3 p-8">
          <h3 class="text-2xl font-semibold text-light-heading dark:text-dark-heading mb-2">${pub.title}</h3>
          <p class="text-light-primary dark:text-dark-primary italic mb-4">${pub.authors}</p>
          <p class="mb-6">${pub.description}</p>
          <div class="flex flex-wrap gap-4">${linksHtml}</div>
        </div>
      </div>`;
    })
    .join("");

  const section = document.createElement("section");
  section.id = "publications";
  section.className = "mt-24";
  section.innerHTML = `<h2 class="text-3xl font-bold text-light-heading dark:text-dark-heading mb-10 text-center reveal">Publications</h2>${publicationsHtml}`;
  container.appendChild(section);
}

function renderProjects(container, projects) {
  const projectsHtml = projects
    .map(
      (proj, i) => `
      <div class="project-card bg-light-card dark:bg-dark-card p-6 rounded-lg shadow-lg border border-light-border dark:border-dark-border flex flex-col h-full transition-all duration-300 reveal" data-delay="${i *
        150}">
        <h3 class="text-xl font-semibold text-light-heading dark:text-dark-heading mb-3">${proj.title}</h3>
        <p class="text-light-text dark:text-dark-text flex-grow mb-4">${proj.description}</p>
        <div class="mt-auto">
          <a href="${proj.githubUrl}" class="text-light-primary dark:text-dark-primary hover:underline inline-flex items-center gap-2">
            View on GitHub <i data-feather="external-link" class="w-4 h-4"></i>
          </a>
        </div>
      </div>`
    )
    .join("");

  const section = document.createElement("section");
  section.id = "projects";
  section.className = "mt-24";
  section.innerHTML = `<h2 class="text-3xl font-bold text-light-heading dark:text-dark-heading mb-10 text-center reveal">Projects</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">${projectsHtml}</div>`;
  container.appendChild(section);
}