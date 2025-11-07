
/* All site content is centralized here for easy updates */
const profileData = {
  name: "Yash Arora",
  tagline: "Research Fellow @ CVIT",
  affiliation: "IIIT Hyderabad",
  email: "yasharora102@gmail.com",
  imageUrl: "assets/avatar.jpg",
  // aboutMe:
  //   "I am a B.Tech graduate in Electronics and Computer Engineering from Amrita Vishwa Vidyapeetham (CGPA 9.26/10). My work focuses on Computer Vision, including contributions to Zero-Shot Recognition for nutrition estimation during my research fellowship at IIIT Hyderabad. Previously, I interned at IIT Madras, developing Vision Mamba models for image deflaring. I also achieved 3rd place in the NTIRE 2024 Blind Compressed Image Enhancement Challenge.",
  aboutMe: `I am a B.Tech graduate in <a href="https://www.amrita.edu/" target="_blank" rel="noopener noreferrer" class="text-dark-primary hover:underline">Amrita Vishwa Vidyapeetham, Amritapuri</a> (CGPA 9.26/10). 
  My work focuses on Computer Vision, including contributions to Zero-Shot Recognition for nutrition estimation during my research fellowship at 
  <a href="https://www.iiit.ac.in/" target="_blank" rel="noopener noreferrer" class="text-dark-primary hover:underline">IIIT Hyderabad</a> in the 
  <a href="https://cvit.iiit.ac.in/" target="_blank" rel="noopener noreferrer" class="text-dark-primary hover:underline">CVIT Lab</a> 
  mentored by <a href="https://www.iiit.ac.in/faculty/jawahar-c-v/" target="_blank" rel="noopener noreferrer" class="text-dark-primary hover:underline">Prof. C.V. Jawahar</a>. 
  Previously, I interned at <a href="https://www.iitm.ac.in/" target="_blank" rel="noopener noreferrer" class="text-dark-primary hover:underline">IIT Madras</a> 
  in the <a href="https://www.ee.iitm.ac.in/comp_photolab/" target="_blank" rel="noopener noreferrer" class="text-dark-primary hover:underline">Computational Imaging Lab (CI Lab)</a> 
  under the mentorship of <a href="https://www.ee.iitm.ac.in/kmitra/" target="_blank" rel="noopener noreferrer" class="text-dark-primary hover:underline">Dr. Kaushik Mitra</a>. 
  I also achieved 3rd place in the NTIRE 2024 Blind Compressed Image Enhancement Challenge.`,

  interests: ["Artificial Intelligence", "Machine Learning", "Computer Vision"],
  socials: [
    { name: "Twitter", icon: "twitter", url: "https://x.com/yasharora102" },
    { name: "GitHub", icon: "github", url: "https://github.com/yasharora102" },
    { name: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/in/yasharora102/" },
    { name: "Email", icon: "mail", url: "mailto:yasharora102@gmail.com" },
    { name: "CV", icon: "file-text", url: "assets/Yash_CV.pdf" },
  ],
  navLinks: [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Achievements", href: "#achievements" },
    { name: "Publications", href: "#publications" },
    { name: "Projects", href: "#projects" },
  ],
};

const educationData = [
  {
    degree: "B.Tech, Electronics and Computer Engineering",
    institution: "Amrita Vishwa Vidyapeetham, Amritapuri",
    year: "2021 - 2025",
  },
  {
    degree: "All India Senior School Certificate Examination",
    institution: "Delhi Public School, Prayagraj",
    year: "2021",
  },
];

const experienceData = [
  {
    role: "Research Fellow, CVIT @ IIIT Hyderabad",
    duration: "February 2025 - Current",
    supervisor: "Mentored by Prof. C.V. Jawahar",
    logoUrl: "assets/CVIT-logo.png",
    alt: "IIIT Hyderabad Logo",
  },
  {
    role: "Research Intern, CI Lab @ IIT Madras",
    duration: "June 2024 - August 2024",
    supervisor: "Mentored by Dr. Kaushik Mitra",
    logoUrl: "assets/iitm.png",
    alt: "IIT Madras Logo",
  },
];



const achievementsData = [
  {
    title: "3rd Position, NTIRE 2024 Blind Compressed Image Enhancement Challenge",
    authors: "Team: Titans (Yash Arora, Aditya Arora)",
    description:
      "Our team proposed UnifyFormer, a novel model architecture to enhance JPEG decompression, achieving 3rd place in the NTIRE 2024 blind image decompression challenge.",
    imageUrl: "assets/featured-2.png",
    alt: "NTIRE 2024 Challenge",
    links: [
      { name: "Paper", icon: "file-text", url: "papers/Yang_NTIRE_2024_Challenge_on_Blind_Enhancement_of_Compressed_Image_Methods_CVPRW_2024_paper.pdf" },
      { name: "Code", icon: "code", url: "https://github.com/yasharora102/UnifyFormer" },
      { name: "OpenCVF", icon: "link", url: "https://openaccess.thecvf.com/content/CVPR2024W/NTIRE/html/Yang_NTIRE_2024_Challenge_on_Blind_Enhancement_of_Compressed_Image_Methods_CVPRW_2024_paper.html" },
    ],
  },
];

const publicationsData = [
  {
    title: "What is there in an Indian Thali?",
    authors: "Y Arora, A Arun, CV Jawahar",
    description:
      "ICVGIP 2025. A project on Zero-Shot Recognition and Segmentation of Indian food items for automated nutrition estimation in culturally diverse meals.",
    imageUrl: "assets/food-scanner-logo.png",
    alt: "Indian Thali Publication",
    links: [{ name: "Project Page", icon: "link", url: "https://cvit.iiit.ac.in/research/projects/cvit-projects/indian_thali#" }],
  },
  {
    title: "HealthGuard Al: Predictive Diagnosis and Smart Care Solutions",
    authors: "Y Arora, H Rohra, D Das, S Uppaluru, M Rashmi",
    description: "ICCCNT 2025 (Feb 2025).",
    imageUrl: "assets/healthguard_logo.png",
    alt: "HealthGuard AI Publication",
    links: [{ name: "To be Updated", icon: "file-text", url: "#" }],
  },
];

const projectsData = [
  {
    title: "Indian Thali Food Scanner",
    description:
      "Project page for 'What is there in an Indian Thali?' ICVGIP 2025 publication.",
    githubUrl: "https://github.com/yasharora102/Indian_Thali",
  },
  {
    title: "UnifyFormer",
    description:
      "NTIRE Compressed Image Enhancement Challenge. [3rd Place] Unifying Group Dynamics with Channel Attention for Blind Compressed Image Enhancement.",
    githubUrl: "https://github.com/yasharora102/UnifyFormer",
  },
  {
    title: "Image Colorization API",
    description:
      "RESTful API to colorize black & white images using a pre-trained model.",
    githubUrl: "https://github.com/yasharora102/image-colorization-api",
  },
  {
    title: "CV-models",
    description:
      "A collection of Computer Vision models implemented from scratch using PyTorch.",
    githubUrl: "https://github.com/yasharora102/CV_models",
  },
  {
    title: "CineBot",
    description:
      "Python-based Telegram bot to fetch movie data and posters.",
    githubUrl: "https://github.com/yasharora102/CineBot",
  },
  {
    title: "Inventory Management System",
    description:
      "Tool to track inventory of different infrastructures in an organisation.",
    githubUrl: "https://github.com/yasharora102/IMS",
  },
];
