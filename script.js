// =====================
// CONFIG (edit easily)
// =====================
const PROFILE = {
  name: "Ramendra Bharadwaj",
  email: "bharadwaj.ramendra1@gmail.com",
  phone: "+91-9928449589",
  location: "India",

  // Put real links here
  resumeUrl: "https://drive.google.com/uc?export=download&id=16hfPS0B-Hu0ytHgDqnMk1NgbWMo1EYaV",
  linkedin: "https://www.linkedin.com/in/bh-ramendra/",
  github: "https://github.com/bh-ramendra",
  scholar: "https://scholar.google.com/citations?user=-qd3n2wAAAAJ&hl=en",

  // Images (local path or hosted URL)
  profileImg: "assets/profile.jpg",
  heroBannerImg: "", // BIG image above "Ramendra Bharadwaj / Profile Summary" area

  // Optional: Nav/Footer logo (set empty string to hide image and show "RB" fallback)
  navLogo: "",       // NAV LOGO image path (customize anytime)
  footerLogo: "",    // FOOTER LOGO image path
  heroBannerImg2: "", // Right-side hero highlight image

  // Contact extras
  mapEmbedUrl: "",  // CONTACT MAP: paste iframe src URL (NOT the whole iframe)
  contactQrImg: "",      // CONTACT SECTION QR image
  footerQrImg: "",        // FOOTER QR image
};

// Hero text
const HERO = {
  bullets: [
    "Software Engineer Intern at Intel Corporation, working on Google Chromebook firmware.",
    "Pursuing M.Tech in Artificial Intelligence at IIT Patna.",
    "3.5+ years of prior experience in BFSI (Banking, Financial Services, Insurance) analytics."
  ],
  badges: ["Firmware (coreboot)", "AI / ML", "Systems Software", "FinTech Analytics", "C/C++ & Python"],
  float1: "AI SWE Intern @ Intel",
  float2: "M.Tech AI @ IIT Patna",
};

// About
const ABOUT = {
  text: "I thrive at the intersection of low-level systems programming and scalable artificial intelligence. My career began in financial data analytics, where I designed modeling pipelines and data platforms at Trellance and PwC. Today, I translate that experience into low-level engineering, developing Google Chromebook firmware using coreboot at Intel, and advancing deep learning research at IIT Patna. I specialize in optimizing systems software to run complex, intelligent workloads efficiently on bare metal.",
};

// 5 demo counters (0 -> big number)
const STATS = [
  { label: "Yrs Experience", value: 3, suffix: ".5+" },
  { label: "Corporate Awards", value: 7, suffix: "+" },
  { label: "Publications", value: 5, suffix: "+" },
  { label: "Patents Filed", value: 3, suffix: "+" },
  { label: "Certifications", value: 29, suffix: "+" }
];

// Skills (devicon)
const SKILLS = {
  languages: [
    { icon: "devicon-python-plain colored", name: "Python" },
    { icon: "devicon-mysql-plain colored", name: "SQL" },
    { icon: "devicon-r-original colored", name: "R" },
    { icon: "devicon-cplusplus-plain colored", name: "C/C++" },
  ],
  stack: [
    { icon: "devicon-tableau-plain colored", name: "Tableau" },
    { icon: "devicon-powerbi-original colored", name: "Power BI" },
    { icon: "devicon-snowflake-plain colored", name: "Snowflake" },
    { icon: "devicon-mongodb-plain colored", name: "MongoDB" },
  ],
  tools: [
    { icon: "devicon-git-plain colored", name: "Git" },
    { icon: "devicon-github-original colored", name: "GitHub" },
    { icon: "devicon-docker-plain colored", name: "Docker" },
    { icon: "devicon-kubernetes-plain colored", name: "Kubernetes" },
  ]
  ,
  // NEW (extra 3 cards) — add minimum 12 items each for better visibility
  ai: [
    { icon: "devicon-tensorflow-original colored", name: "TensorFlow" },
    { icon: "devicon-pytorch-original colored", name: "PyTorch" },
    { icon: "devicon-opencv-plain colored", name: "OpenCV" },
    { icon: "devicon-numpy-plain colored", name: "NumPy" },
    { icon: "devicon-pandas-original colored", name: "Pandas" },
    { icon: "devicon-scikitlearn-plain colored", name: "Scikit-learn" },
    { icon: "devicon-jupyter-plain colored", name: "Jupyter" },
    { icon: "devicon-google-plain colored", name: "Google Colab" },
    { icon: "devicon-googlecloud-plain colored", name: "GCP (AI)" },
    { icon: "devicon-amazonwebservices-original colored", name: "AWS (AI)" },
    { icon: "devicon-azure-plain colored", name: "Azure (AI)" },
    { icon: "devicon-kaggle-original colored", name: "Kaggle" }
  ],
  cloud: [
    { icon: "devicon-docker-plain colored", name: "Docker" },
    { icon: "devicon-kubernetes-plain colored", name: "Kubernetes" },
    { icon: "devicon-jenkins-line colored", name: "Jenkins" },
    { icon: "devicon-gitlab-plain colored", name: "GitLab CI" },
    { icon: "devicon-amazonwebservices-original colored", name: "AWS" },
    { icon: "devicon-googlecloud-plain colored", name: "GCP" },
    { icon: "devicon-azure-plain colored", name: "Azure" },
    { icon: "devicon-nginx-original colored", name: "NGINX" },
    { icon: "devicon-linux-plain colored", name: "Linux" },
    { icon: "devicon-bash-plain colored", name: "Bash" },
    { icon: "devicon-grafana-original colored", name: "Grafana" },
    { icon: "devicon-prometheus-original colored", name: "Prometheus" }
  ],
  research: [
    { icon: "devicon-python-plain colored", name: "Python (Tools)" },
    { icon: "devicon-latex-original colored", name: "LaTeX" },
    { icon: "devicon-markdown-original colored", name: "Markdown" },
    { icon: "devicon-git-plain colored", name: "Versioning" },
    { icon: "devicon-github-original colored", name: "GitHub" },
    { icon: "devicon-notion-plain colored", name: "Notion" },
    { icon: "devicon-slack-plain colored", name: "Slack" },
    { icon: "devicon-google-plain colored", name: "Google Scholar" },
    { icon: "devicon-figma-plain colored", name: "Figma" },
    { icon: "devicon-vscode-original colored", name: "VS Code" },
    { icon: "devicon-ubuntu-plain colored", name: "Ubuntu" },
    { icon: "devicon-matlab-plain colored", name: "MATLAB" }
  ]

};

// Experience cards (bigger + 2 images + pdf)
const EXPERIENCES = [
  {
    key: "intel",
    role: "Software Engineer Intern",
    org: "Intel Corporation, Bengaluru, India",
    date: "July 2025 – Present",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/85/Intel_logo_2023.svg",
    points: [
      "Developing and optimizing firmware solutions for Google Chromebook platforms using coreboot.",
      "Working on firmware designs and low-level systems, with initiatives to integrate AI capabilities at the firmware level.",
      "Contributing to firmware initialization, systems optimization, and hardware-level performance tuning."
    ],
    tags: ["Firmware", "coreboot", "Chromebook Systems", "C/C++", "Systems Optimization"],
    media: [],
    links: [
      { label: "Intel Corporation", url: "https://www.intel.com/" }
    ]
  },
  {
    key: "pwc",
    role: "Data Scientist L2",
    org: "PwC Acceleration Centers, Bengaluru, India",
    date: "Sept 2024 – July 2025",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/PwC_Company_Logo.svg",
    points: [
      "Partnered with global teams to deliver strategic banking and insurance solutions focused on AML, fraud detection, and regulatory compliance.",
      "Developed a 'Feature Selection Accelerator' using Python and SQL, significantly reducing computation time and improving modeling accuracy for PwC Global.",
      "Implemented a robust rule-based fraud detection system for Customer Bank, improving detection accuracy by 30% and streamlining AML compliance via detailed ATL/BTL analysis."
    ],
    tags: ["SQL", "Python", "Machine Learning", "Snowflake", "Excel", "Tableau", "Gen AI"],
    media: [],
    links: [
      { label: "Organization Website", url: "https://www.pwc.in/" }
    ]
  },
  {
    key: "trellance",
    role: "Data Analyst",
    org: "Trellance, Bengaluru, India",
    date: "Feb 2022 – Sept 2024",
    logo: "assets/trellance.png",
    points: [
      "Contributed to the Talent Services Team by constructing a data platform and leveraging SQL, Tableau, and Data Modeling for real-time insights at Credit Union.",
      "Designed and executed a data and reporting infrastructure utilizing Tableau and SQL, delivering immediate insights for around 800+ banks at Credit Registry Bureau Africa.",
      "Utilized existing in-house customer and census data to recommend a new branch location, benefiting 80% of current customers and potentially increasing new customer acquisition by 20%.",
      "Designed and developed over 10 Tableau reports covering critical data areas such as Customer, Product, Transaction, and Operations data, utilizing SSIS ETL Pipelines and SQL aggregate tables for efficient data processing.",
      "Led the implementation of an end-to-end Credit Card Attrition Model, followed by offers given to target members, leading to a reduction in attrition from 3.5% to 1.8%."
    ],
    tags: ["SQL", "SSIS", "Python", "Tableau", "Machine Learning", "Snowflake", "Excel", "Azure"],
    media: [],
    links: [
      { label: "Organization Website", url: "https://www.trellance.com/" }
    ]
  }
];

// Education cards (logo + media)
const EDUCATION = [
  {
    key: "iitp",
    degree: "M.Tech in Computer Science (Artificial Intelligence)",
    inst: "Indian Institute of Technology, Patna",
    date: "2025 – Present • CGPA: 8.0",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b9/IIT-Patna.png",
    media: []
  },
  {
    key: "rit",
    degree: "B.Tech in Electronics",
    inst: "Ramaiah Institute of Technology, Bangalore (VTU)",
    date: "2018 – 2022 • CGPA: 7.5",
    logo: "https://upload.wikimedia.org/wikipedia/en/5/5a/Ramaiah_Institutions_Logo.png",
    media: []
  }
];

// Projects (4 projects with tech stacks and detailed 3D descriptions)
const PROJECTS = [
  {
    title: "Credit Card Attrition Model",
    subtitle: "Predictive modeling for banks",
    desc: "Designed and implemented a credit card attrition prediction model using Random Forest. Configured targeted retention campaigns on at-risk members, resulting in a 55% reduction in customer attrition rates.",
    stack: ["Python", "Random Forest", "Tableau", "SQL"],
    theme: "blue",
    icon: "📊",
    techBadge: "ML Prediction"
  },
  {
    title: "Pre Delinquency Triggers",
    subtitle: "Delinquency forecasting system",
    desc: "Created predictive model utilizing Decision Tree classifier to identify risky credit union members and forecast delinquency across financial products (Credit Cards, Auto Loans, Personal Loans) in the subsequent 6 months.",
    stack: ["Python", "Decision Trees", "SQL", "Tableau"],
    theme: "indigo",
    icon: "📉",
    techBadge: "Forecasting"
  },
  {
    title: "Fraud Detection Rule Engine",
    subtitle: "AML & transaction filtering",
    desc: "Implemented a robust rule-based fraud detection system for Customer Bank, improving detection accuracy by 30% and streamlining AML compliance via detailed ATL/BTL analysis.",
    stack: ["SQL", "Python", "Snowflake", "AML"],
    theme: "violet",
    icon: "🛡️",
    techBadge: "Security Engine"
  },
  {
    title: "Feature Selection Accelerator",
    subtitle: "Data dimensionality reduction tool",
    desc: "Developed a robust pipeline incorporating missing value drop, constant value drop, IV-WOE transformation, correlation analysis, variable clustering, and PCA for efficient feature reduction. Built a user-friendly Flask console to upload CSV files and configure custom thresholds.",
    stack: ["Flask", "Scikit-Learn", "PCA", "HTML/CSS"],
    theme: "purple",
    icon: "⚙️",
    techBadge: "Data Pipeline"
  }
];

// =====================
// NEW: Certificates (6 cards) + slider rail
// =====================
const LINKEDIN_CERTS_URL = "https://www.linkedin.com/in/bh-ramendra/details/certifications/";

const CERTIFICATES = [
  { title: "Professional Machine Learning Engineer Certification", subtitle: "Google • May 2025", icon: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg", link1: { label: "Verify", url: LINKEDIN_CERTS_URL } },
  { title: "AWS Certified Cloud Practitioner", subtitle: "AWS • June 2025", icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg", link1: { label: "Verify", url: LINKEDIN_CERTS_URL } },
  { title: "Microsoft Certified: Azure Fundamentals", subtitle: "Microsoft • May 2025", icon: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg", link1: { label: "Verify", url: LINKEDIN_CERTS_URL } },
  { title: "Microsoft Certified: Azure Data Fundamentals", subtitle: "Microsoft • May 2025", icon: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg", link1: { label: "Verify", url: LINKEDIN_CERTS_URL } },
  { title: "Python (Advance)", subtitle: "HackerRank • Feb 2024", icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Hackerrank_meaningful_logo.svg", link1: { label: "Verify", url: LINKEDIN_CERTS_URL } },
  { title: "SQL (Advanced)", subtitle: "HackerRank • Feb 2024", icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Hackerrank_meaningful_logo.svg", link1: { label: "Verify", url: LINKEDIN_CERTS_URL } },
  // { title: "Machine Learning Specialization", subtitle: "Stanford University | DeepLearning.AI • Jun 2023", icon: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Stanford_wordmark_%282012%29.svg", link1: { label: "Verify", url: LINKEDIN_CERTS_URL } },
  // { title: "Crash Course on Python", subtitle: "Google • May 2023", icon: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg", link1: { label: "Verify", url: LINKEDIN_CERTS_URL } }
];
// =====================
// NEW: Recommendations (images + LinkedIn)
// =====================
const RECOMMENDATIONS = [
  { title: "Dinesh Parwani", from: "Manager • AiVantage (formerly Trellance / CU Rise Analytics)", text: "I worked with Ramendra directly on a project at Trellance (CU Rise Analytics), his enthusiasm to learn new tech despite being absolutely new at it, was amazing. That's important, given the dynamic nature of our industry. Would love to work with him again.", img: "assets/reco/r1.png", source: "LinkedIn Recommendation" },
  { title: "PwC Excellence Award", from: "Directors & Managers • PwC", text: "Honored with PwC Excellence awards for 'Reimagine the Possible' and 'Deliver Value' in recognition of client delivery, meeting tight compliance deadlines, and feature selection pipeline deployment.", img: "assets/reco/r2.jpg", source: "PwC Recognition" },
  { title: "Trellance Spotlight Award", from: "Leadership Team • Trellance", text: "Awarded for embodying the 'Trust Each Other' core value, reflecting strong collaboration, ownership, and contribution to the credit union analytics platform.", img: "assets/reco/r3.jpg", source: "Trellance Award" },
  { title: "Best Presentation Award", from: "Trellance Tech Talk • Knowledge Sharing", text: "Received the 'Best Presentation' award at the Trellance Knowledge Sharing session for delivering a high-impact technical presentation on credit card attrition modeling to an audience of over 100 colleagues.", img: "assets/reco/r4.png", source: "Trellance Recognition" }
];

// NEW: Media slider (Projects ke baad)
const MEDIA_SLIDES = [];

// NEW: Video glimpse
const VIDEO = {
  src: ""
};

// Publications / Patents / Books: (2 buttons + optional 2 images)
const PUBLICATIONS = [
  {
    title: "Namaste-enabled robot-assisted hospitality services: design and performance evaluation of an arduino-based service robot in the hospitality industry",
    subtitle: "International Conference on Computer Science and Emerging Technologies • 2023",
    meta: "CSET 2023",
    desc: "Designed and evaluated an Arduino-based service robot with custom locomotion and greeting behavior for the hospitality industry.",
    img1: "",
    img2: "",
    btn1: { label: "Google Scholar", url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=-qd3n2wAAAAJ&citation_for_view=-qd3n2wAAAAJ:d1gkVwhDpl0C" },
    btn2: { label: "Details", url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=-qd3n2wAAAAJ&citation_for_view=-qd3n2wAAAAJ:d1gkVwhDpl0C" }
  },
  {
    title: "Automated Cough Classification for COVID-19 Detection Using Machine Learning",
    subtitle: "Recent Advances in Computing Sciences • 2025",
    meta: "RACS 2025",
    desc: "Implemented automated cough audio signal classification algorithms for early COVID-19 detection using machine learning classifiers.",
    img1: "",
    img2: "",
    btn1: { label: "Google Scholar", url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=-qd3n2wAAAAJ&citation_for_view=-qd3n2wAAAAJ:2osOgNQ5qMEC" },
    btn2: { label: "Details", url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=-qd3n2wAAAAJ&citation_for_view=-qd3n2wAAAAJ:2osOgNQ5qMEC" }
  },
  {
    title: "Design and development of a virtual doctor robot for remote patient care",
    subtitle: "AIP Conference Proceedings • 2024",
    meta: "AIP 2024",
    desc: "Developed a virtual doctor robot system utilizing Raspberry Pi, camera integrations, and telemetry for remote patient health monitoring.",
    img1: "",
    img2: "",
    btn1: { label: "Google Scholar", url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=-qd3n2wAAAAJ&citation_for_view=-qd3n2wAAAAJ:u-x6o8ySG0sC" },
    btn2: { label: "Details", url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=-qd3n2wAAAAJ&citation_for_view=-qd3n2wAAAAJ:u-x6o8ySG0sC" }
  },
  {
    title: "Machine learning harmonies: Cough signal classification for early disease detection",
    subtitle: "AIP Conference Proceedings • 2024",
    meta: "AIP 2024",
    desc: "Investigated acoustic cough signal classification models for non-invasive early stage respiratory disease detection.",
    img1: "",
    img2: "",
    btn1: { label: "Google Scholar", url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=-qd3n2wAAAAJ&citation_for_view=-qd3n2wAAAAJ:u5HHmVD_uO8C" },
    btn2: { label: "Details", url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=-qd3n2wAAAAJ&citation_for_view=-qd3n2wAAAAJ:u5HHmVD_uO8C" }
  },
  {
    title: "A Review on Wireless Stethoscope",
    subtitle: "SJC Institute of Technology • 2021",
    meta: "SJCIT 2021",
    desc: "A review paper evaluating wireless stethoscope technologies, signal noise reduction filters, and diagnostic transmission protocols.",
    img1: "",
    img2: "",
    btn1: { label: "Google Scholar", url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=-qd3n2wAAAAJ&citation_for_view=-qd3n2wAAAAJ:9yKSN-GCB0IC" },
    btn2: { label: "Details", url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=-qd3n2wAAAAJ&citation_for_view=-qd3n2wAAAAJ:9yKSN-GCB0IC" }
  }
];

const PATENTS = [
  {
    title: "System and Method for Real-Time Human-Robot Interaction (Namaste Greeting)",
    subtitle: "Filed/Published • 2023",
    meta: "Patent",
    desc: "Patent describing an Arduino/microcontroller system for localized humanoid locomotion and automatic hospitality greetings.",
    img1: "",
    img2: "",
    btn1: { label: "Scholar Citation", url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=-qd3n2wAAAAJ&citation_for_view=-qd3n2wAAAAJ:d1gkVwhDpl0C" },
    btn2: { label: "Portal", url: "#" }
  },
  {
    title: "Intelligent Remote Patient Monitoring Virtual Doctor Robot System",
    subtitle: "Filed/Published • 2024",
    meta: "Patent",
    desc: "Patent detailing camera controls, diagnostic sensor interfaces, and live streaming capabilities for virtual clinical visits.",
    img1: "",
    img2: "",
    btn1: { label: "Scholar Citation", url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=-qd3n2wAAAAJ&citation_for_view=-qd3n2wAAAAJ:u-x6o8ySG0sC" },
    btn2: { label: "Portal", url: "#" }
  },
  {
    title: "Acoustic Machine Learning Diagnostic System for Wireless Stethoscope Signals",
    subtitle: "Filed/Published • 2022",
    meta: "Patent",
    desc: "Patent describing signal amplification, transmission protocols, and classification models for automated cardiac diagnostic indicators.",
    img1: "",
    img2: "",
    btn1: { label: "Scholar Citation", url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=-qd3n2wAAAAJ&citation_for_view=-qd3n2wAAAAJ:9yKSN-GCB0IC" },
    btn2: { label: "Portal", url: "#" }
  }
];

const BOOK_CHAPTERS = [];

const EDITED_BOOKS = [];

// Achievements array (merged into RECOMMENDATIONS)
const ACHIEVEMENTS = [];

// BLOGS (local + optional external RSS)
const BLOG_POSTS = [];

// OPTIONAL: external RSS feeds (CORS depends). Use a proxy like rss2json.
const BLOG_FEEDS = [];

// LinkedIn Posts (manual reliable)
const LINKEDIN_POSTS = [];

// =====================
// Utilities
// =====================
function escapeHtml(s){
  return String(s ?? "")
    .replaceAll("&","&amp;").replaceAll("<","&lt;")
    .replaceAll(">","&gt;").replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}
function safeUrl(url){
  if (!url || String(url).startsWith("ADD_")) return "#";
  try { return new URL(url, window.location.href).href; }
  catch { return "#"; }
}
function safeText(s, fallback=""){
  const t = String(s ?? "").trim();
  return t || fallback;
}
function isPdf(url){
  return String(url || "").toLowerCase().endsWith(".pdf");
}

// =====================
// Navbar mobile toggle
// =====================
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
navToggle?.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks?.addEventListener("click", (e) => {
  if (e.target.tagName === "A") navLinks.classList.remove("open");
});

// =====================
// Scroll progress, Scrollspy & Scroll-to-Top Button
// =====================
const progress = document.getElementById("progress");
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
const mainNav = document.querySelector(".nav");

// Select all target links and their sections for Scrollspy
const navLinksContainer = document.getElementById("navLinks");
const navLinksList = navLinksContainer ? navLinksContainer.querySelectorAll("a[href^='#']") : [];
const scrollSections = [];

navLinksList.forEach(link => {
  const targetId = link.getAttribute("href").substring(1);
  const sectionEl = document.getElementById(targetId);
  if (sectionEl) {
    scrollSections.push({ link, element: sectionEl });
  }
});

function activeScrollspy(scrollPosition) {
  const navHeight = 110; // offset for nav header height
  let currentActive = null;

  for (let i = 0; i < scrollSections.length; i++) {
    const section = scrollSections[i];
    const top = section.element.offsetTop - navHeight;
    const height = section.element.offsetHeight;

    if (scrollPosition >= top && scrollPosition < top + height) {
      currentActive = section;
    }
  }

  // Handle boundaries
  if (!currentActive && scrollSections.length > 0) {
    if (scrollPosition < scrollSections[0].element.offsetTop - navHeight) {
      currentActive = null;
    } else {
      currentActive = scrollSections[scrollSections.length - 1];
    }
  }

  scrollSections.forEach(sec => {
    if (currentActive && sec.link === currentActive.link) {
      sec.link.classList.add("active");
    } else {
      sec.link.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", () => {
  const h = document.documentElement;
  const scrollTop = h.scrollTop || document.body.scrollTop;
  
  // 1. Scroll progress bar
  const scrolled = (scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
  if (progress) progress.style.width = `${scrolled}%`;

  // 2. Scroll-to-Top Button visibility
  if (scrollToTopBtn) {
    if (scrollTop > 400) {
      scrollToTopBtn.classList.add("visible");
    } else {
      scrollToTopBtn.classList.remove("visible");
    }
  }

  // 3. Scrollspy active link
  activeScrollspy(scrollTop);

  // 4. Scroll navbar state (hides search bar on scroll)
  if (mainNav) {
    if (scrollTop > 50) {
      mainNav.classList.add("scrolled");
    } else {
      mainNav.classList.remove("scrolled");
    }
  }
});

// Click event for Scroll-to-Top button
scrollToTopBtn?.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Run initially to set active state
activeScrollspy(window.scrollY || document.documentElement.scrollTop);

// =====================
// Theme toggle
// =====================
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
function setTheme(mode){
  if (mode === "light") document.body.classList.add("light");
  else document.body.classList.remove("light");
  localStorage.setItem("theme", mode);
  if (themeIcon) themeIcon.innerHTML = mode === "light" ? `<svg class="themeSvg" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M21 12.6A8.5 8.5 0 0 1 11.4 3a6.8 6.8 0 1 0 9.6 9.6Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>` : `<svg class="themeSvg" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" stroke="currentColor" stroke-width="2"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`;
}
setTheme(localStorage.getItem("theme") || "light");
themeToggle?.addEventListener("click", () => {
  const current = document.body.classList.contains("light") ? "light" : "dark";
  setTheme(current === "light" ? "dark" : "light");
});



// =====================
// Resume + year
// =====================
document.getElementById("resumeBtn")?.setAttribute("href", safeUrl(PROFILE.resumeUrl));
document.getElementById("year").innerText = new Date().getFullYear();

// =====================
// Hero images + text
// =====================
const profileImg = document.getElementById("profileImg");
if (profileImg) profileImg.src = safeText(PROFILE.profileImg, "assets/profile.jpg");

const heroBannerImg = document.getElementById("heroBannerImg");
if (heroBannerImg){
  const src = safeText(PROFILE.heroBannerImg, "");
  if (src){
    heroBannerImg.src = src;
    heroBannerImg.addEventListener("load", () => heroBannerImg.classList.add("ready"));
  } else {
    const container = heroBannerImg.closest(".heroBanner");
    if (container) container.style.display = "none";
  }
}

const heroBannerImg2 = document.getElementById("heroBannerImg2");
if (heroBannerImg2){
  const src = safeText(PROFILE.heroBannerImg2, "");
  if (src){
    heroBannerImg2.src = src;
    heroBannerImg2.addEventListener("load", () => heroBannerImg2.classList.add("ready"));
  } else {
    const container = heroBannerImg2.closest(".heroBanner");
    if (container) container.style.display = "none";
  }
}

const bulletsEl = document.getElementById("profileBullets");
if (bulletsEl){
  bulletsEl.innerHTML = HERO.bullets.map(b => `<li>${escapeHtml(b)}</li>`).join("");
}
const badgesEl = document.getElementById("heroBadges");
if (badgesEl){
  badgesEl.innerHTML = HERO.badges.map(x => `<span class="badge">${escapeHtml(x)}</span>`).join("");
}
const float1El = document.getElementById("heroFloat1");
if (float1El) {
  float1El.textContent = HERO.float1;
}
const float2El = document.getElementById("heroFloat2");
if (float2El) {
  float2El.textContent = HERO.float2;
}

// =====================
// About
// =====================
const aboutTextEl = document.getElementById("aboutText");
if (aboutTextEl) aboutTextEl.textContent = ABOUT.text;

// =====================
// About quick links
// =====================
const linkGrid = document.getElementById("linkGrid");
if (linkGrid){
  const items = [
    { title:"LinkedIn", hint:"Open profile", url: PROFILE.linkedin },
    { title:"GitHub", hint:"Open repositories", url: PROFILE.github },
    { title:"Google Scholar", hint:"Open publications", url: PROFILE.scholar }
  ];
  linkGrid.innerHTML = items.map(i => `
    <a class="linkCard" href="${safeUrl(i.url)}" target="_blank" rel="noopener">
      <div class="lcTitle">${escapeHtml(i.title)}</div>
      <div class="lcHint">${escapeHtml(i.hint)}</div>
    </a>
  `).join("");
}

// =====================
// Skills render (Marquee single line)
// =====================
function renderSkillsMarquee() {
  const trackEl = document.getElementById("skillsMarqueeTrack");
  if (!trackEl) return;

  const allSkills = [
    ...(SKILLS.languages || []),
    ...(SKILLS.stack || []),
    ...(SKILLS.tools || []),
    ...(SKILLS.ai || []),
    ...(SKILLS.cloud || []),
    ...(SKILLS.research || [])
  ];

  const uniqueSkills = [];
  const seen = new Set();
  for (const s of allSkills) {
    if (!seen.has(s.name)) {
      seen.add(s.name);
      uniqueSkills.push(s);
    }
  }

  // Duplicate items for seamless loop
  const marqueeItems = [...uniqueSkills, ...uniqueSkills, ...uniqueSkills];

  trackEl.innerHTML = marqueeItems.map(s => `
    <div class="marqueeItem">
      <i class="${escapeHtml(s.icon)}"></i>
      <span>${escapeHtml(s.name)}</span>
    </div>
  `).join("");
}
renderSkillsMarquee();

// =====================
// Count-up stats (fixed bug)
// =====================
const statsGrid = document.getElementById("statsGrid");
if (statsGrid){
  statsGrid.innerHTML = STATS.map((s, idx) => `
    <div class="statCard">
      <div class="statIn">
        <div class="statValue" data-target="${s.value}" data-suffix="${escapeHtml(s.suffix || "")}" id="stat-${idx}">0</div>
        <div class="statLabel">${escapeHtml(s.label)}</div>
      </div>
    </div>
  `).join("");
}

function formatNum(n){
  return n.toLocaleString("en-IN");
}
function animateCount(el, target, suffix){
  const duration = 1200;
  const start = performance.now();
  const from = 0;

  function tick(now){
    const t = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - t, 3);
    const val = Math.floor(from + (target - from) * eased);
    el.textContent = formatNum(val) + (suffix || "");
    if (t < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

function startCountersOnce(){
  const els = [...document.querySelectorAll(".statValue")];
  els.forEach(el => {
    const target = Number(el.getAttribute("data-target") || "0");
    const suffix = el.getAttribute("data-suffix") || "";
    animateCount(el, target, suffix);
  });
}

let countersStarted = false;
const hero = document.getElementById("home");
if (hero){
  const io = new IntersectionObserver((entries) => {
    if (!countersStarted && entries.some(e => e.isIntersecting)){
      countersStarted = true;
      startCountersOnce();
      io.disconnect();
    }
  }, { threshold: 0.35 });
  io.observe(hero);
}

// =====================
// Media renderer (image/pdf) for cards
// =====================
function renderMediaGrid(items){
  if (!items || !items.length) return `<div class="muted">Add media in script.js</div>`;
  return items.map(m => {
    const url = safeText(m.url, "#");
    const name = safeText(m.name, "Media");
    const type = safeText(m.type, isPdf(url) ? "pdf" : "image").toLowerCase();
    const thumb = safeText(m.thumb, url);

    const thumbHtml = type === "pdf" || isPdf(url)
      ? `<div class="pdfBadge">PDF</div>`
      : `<img src="${escapeHtml(thumb)}" alt="${escapeHtml(name)}" loading="lazy" onerror="this.closest('.mediaCard').style.display='none'">`;

    return `
      <a class="mediaCard" href="${safeUrl(url)}" target="_blank" rel="noopener">
        <div class="mediaThumb">${thumbHtml}</div>
        <div class="mediaMeta">
          <div class="mediaName">${escapeHtml(name)}</div>
          <div class="mediaType">${escapeHtml(type.toUpperCase())}</div>
        </div>
      </a>
    `;
  }).join("");
}

function renderBtnRow(btns){
  if (!btns || !btns.length) return "";
  return btns.map(b => `
    <a class="linkBtn ${b.primary ? "primary" : ""}" href="${safeUrl(b.url)}" target="_blank" rel="noopener">
      ${escapeHtml(b.label)}
    </a>
  `).join("");
}

// =====================
// Experience render
// =====================
const expTimeline = document.getElementById("expTimeline");
if (expTimeline){
  expTimeline.innerHTML = EXPERIENCES.map(exp => {
    const hasMedia = exp.media && exp.media.length > 0;
    const showBtn1 = exp.links?.[0]?.url && !exp.links[0].url.startsWith("ADD_") && exp.links[0].url !== "";
    const showBtn2 = exp.links?.[1]?.url && !exp.links[1].url.startsWith("ADD_") && exp.links[1].url !== "";
    const hasActions = showBtn1 || showBtn2;

    return `
    <div class="tItem card glass tilt">
      <div class="tIn">
        <div class="tTop">
          <div class="org">
            <img class="orgLogo" alt="${escapeHtml(exp.org)} logo" src="${escapeHtml(exp.logo)}" loading="lazy" onerror="this.style.display='none'">
            <div>
              <div class="tRole">${escapeHtml(exp.role)}</div>
              <div class="tOrg">${escapeHtml(exp.org)}</div>
            </div>
          </div>
          <div class="tDate">${escapeHtml(exp.date)}</div>
        </div>

        <div class="tBody">
          <ul class="bullets">
            ${exp.points.map(p => `<li>${escapeHtml(p)}</li>`).join("")}
          </ul>

          <div class="tagRow">
            ${exp.tags.map(t => `<span class="tag">${escapeHtml(t)}</span>`).join("")}
          </div>

          ${hasMedia ? `
          <div class="mediaBlock">
            <div class="mediaHead">
              <div class="mediaTitle">Certificates / Proofs</div>
              <div class="mediaSub">2 images + PDF supported</div>
            </div>
            <div class="mediaGrid">${renderMediaGrid(exp.media)}</div>
          </div>` : ""}

          ${hasActions ? `
          <div class="btnRow">
            ${showBtn1 ? `<a class="linkBtn primary" href="${safeUrl(exp.links[0].url)}" target="_blank" rel="noopener">${escapeHtml(exp.links[0].label || "Link 1")}</a>` : ""}
            ${showBtn2 ? `<a class="linkBtn" href="${safeUrl(exp.links[1].url)}" target="_blank" rel="noopener">${escapeHtml(exp.links[1].label || "Link 2")}</a>` : ""}
          </div>` : ""}
        </div>
      </div>
    </div>
    `;
  }).join("");
}

// =====================
// Education render
// =====================
const eduGrid = document.getElementById("eduGrid");
if (eduGrid){
  eduGrid.innerHTML = EDUCATION.map(ed => {
    const hasMedia = ed.media && ed.media.length > 0;
    return `
    <div class="card glass tilt cardXL">
      <div class="eduTop">
        <img class="eduLogo" alt="${escapeHtml(ed.inst)} logo" src="${escapeHtml(ed.logo)}" loading="lazy" onerror="this.style.display='none'">
        <div>
          <div class="eduDegree">${escapeHtml(ed.degree)}</div>
          <div class="eduInst">${escapeHtml(ed.inst)}</div>
          <div class="eduDate">${escapeHtml(ed.date)}</div>
        </div>
      </div>

      ${hasMedia ? `
      <div class="mediaBlock">
        <div class="mediaHead">
          <div class="mediaTitle">Certificates / Recommendations</div>
          <div class="mediaSub">2 images + PDF supported</div>
        </div>
        <div class="mediaGrid">${renderMediaGrid(ed.media)}</div>
      </div>` : ""}
    </div>
    `;
  }).join("");
}

// =====================
// Projects Grid Rendering
// =====================
function renderProjects(){
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;

  const themes = {
    blue: {
      bg: "linear-gradient(135deg, rgba(0, 122, 255, 0.08) 0%, rgba(0, 122, 255, 0.02) 100%)",
      border: "rgba(0, 122, 255, 0.25)",
      text: "#007AFF"
    },
    indigo: {
      bg: "linear-gradient(135deg, rgba(88, 86, 214, 0.08) 0%, rgba(88, 86, 214, 0.02) 100%)",
      border: "rgba(88, 86, 214, 0.25)",
      text: "#5856D6"
    },
    violet: {
      bg: "linear-gradient(135deg, rgba(175, 82, 222, 0.08) 0%, rgba(175, 82, 222, 0.02) 100%)",
      border: "rgba(175, 82, 222, 0.25)",
      text: "#AF52DE"
    },
    purple: {
      bg: "linear-gradient(135deg, rgba(142, 68, 173, 0.08) 0%, rgba(142, 68, 173, 0.02) 100%)",
      border: "rgba(142, 68, 173, 0.25)",
      text: "#8E44AD"
    }
  };

  grid.innerHTML = PROJECTS.map((p) => {
    const themeCfg = themes[p.theme || 'blue'];
    return `
      <div class="projGridCard tilt-sm" style="background: ${themeCfg.bg}; border-color: ${themeCfg.border};">
        <div class="projCardTop">
          <div class="pTitle">${escapeHtml(p.title)}</div>
          <div class="muted" style="margin-top:4px; font-size: 13px;">${escapeHtml(p.subtitle || "")}</div>

          <div class="projStackRow">
            ${(p.stack || []).map(s => `<span class="stackPill">${escapeHtml(s)}</span>`).join("")}
          </div>
        </div>

        <div class="projCardBottom">
          <div class="proj3DDesc">
            <div class="projDescInner">
              <p>${escapeHtml(p.desc || "")}</p>
            </div>
          </div>

          ${p.link1?.url ? `
          <div class="certActions" style="margin-top:14px; margin-bottom: 2px;">
            <a class="btn primary" href="${safeUrl(p.link1.url)}" target="_blank" rel="noopener">${escapeHtml(p.link1.label || "Verify")}</a>
          </div>` : ""}
        </div>
      </div>
    `;
  }).join("");
}
renderProjects();

// Removed duplicate projects slider logic to clean UI

// =====================
// Certificates section (6 cards)
// =====================
function renderCertificates(){
  const grid = document.getElementById("certGrid");
  if (grid){
    grid.innerHTML = CERTIFICATES.map(c => `
      <div class="certCard tilt-sm">
        <div class="certHeader">
          ${c.icon ? `
            <span class="certIconWrap">
              <img class="certIcon" src="${safeText(c.icon,"")}" alt="Brand icon" loading="lazy"/>
            </span>
          ` : ""}
          <div class="certMeta">
            <div class="certTitle">${escapeHtml(c.title)}</div>
            <div class="certSub">${escapeHtml(c.subtitle || "")}</div>
          </div>
        </div>
        <div class="certActions">
          ${c.link1?.url ? `<a class="btn" href="${safeUrl(c.link1.url)}" target="_blank" rel="noopener">${escapeHtml(c.link1.label || "Verify")}</a>` : ""}
        </div>
      </div>
    `).join("");
  }
}

renderCertificates();


// =====================
// Recommendations section
// =====================
const recTrack = document.getElementById("recTrack");
const recDots = document.getElementById("recDots");
let recIndex = 0;
let recTimer = null;

function renderRecommendations(){
  if (!recTrack) return;
  recTrack.innerHTML = RECOMMENDATIONS.map(r => `
    <div class="recCard tilt-sm">
      ${r.img ? `<div class="recImg"><img src="${safeText(r.img,"")}" alt="${escapeHtml(r.title)}" loading="lazy"/></div>` : ""}
      <div class="recBody">
        <div class="recTitle">${escapeHtml(r.title)}</div>
        <div class="recText">${escapeHtml(r.text || "")}</div>
        <div class="recFrom">— ${escapeHtml(r.from || "")} • ${escapeHtml(r.source || "")}</div>
      </div>
    </div>
  `).join("");

  if (recDots){
    recDots.innerHTML = RECOMMENDATIONS.map((_, i) => `
      <button class="dot ${i===0 ? "active":""}" aria-label="Go to recommendation ${i+1}" data-i="${i}"></button>
    `).join("");

    recDots.querySelectorAll(".dot").forEach(d => {
      d.addEventListener("click", () => {
        recIndex = Number(d.getAttribute("data-i"));
        goToRec(recIndex);
        restartRecAuto();
      });
    });
  }

  goToRec(0);
}

function goToRec(i){
  if (!recTrack) return;
  const slide = recTrack.querySelector(".recCard");
  if (!slide) return;

  const slideWidth = slide.getBoundingClientRect().width;
  const gap = 16;

  const maxIndex = Math.max(0, RECOMMENDATIONS.length - 1);
  recIndex = Math.max(0, Math.min(i, maxIndex));

  const x = -(recIndex * (slideWidth + gap));
  recTrack.style.transform = `translateX(${x}px)`;

  if (recDots){
    const all = [...recDots.querySelectorAll(".dot")];
    all.forEach((d, idx) => d.classList.toggle("active", idx === recIndex));
  }
}
function nextRec(){
  const maxIndex = Math.max(0, RECOMMENDATIONS.length - 1);
  recIndex = (recIndex >= maxIndex) ? 0 : recIndex + 1;
  goToRec(recIndex);
}
function prevRec(){
  const maxIndex = Math.max(0, RECOMMENDATIONS.length - 1);
  recIndex = (recIndex <= 0) ? maxIndex : recIndex - 1;
  goToRec(recIndex);
}
function restartRecAuto(){
  if (recTimer) clearInterval(recTimer);
  recTimer = setInterval(nextRec, 4500);
}

document.getElementById("recNext")?.addEventListener("click", () => { nextRec(); restartRecAuto(); });
document.getElementById("recPrev")?.addEventListener("click", () => { prevRec(); restartRecAuto(); });
window.addEventListener("resize", () => goToRec(recIndex));

// Mobile swipe gesture support for recommendations slider
let recTouchStartX = 0;
let recTouchEndX = 0;
recTrack?.addEventListener("touchstart", (e) => {
  recTouchStartX = e.changedTouches[0].screenX;
}, { passive: true });
recTrack?.addEventListener("touchend", (e) => {
  recTouchEndX = e.changedTouches[0].screenX;
  const diffX = recTouchStartX - recTouchEndX;
  if (Math.abs(diffX) > 50) {
    if (diffX > 0) {
      nextRec();
    } else {
      prevRec();
    }
    restartRecAuto();
  }
}, { passive: true });

renderRecommendations();
restartRecAuto();

// =====================
// Media slider (NEW)
// =====================
const mediaTrack = document.getElementById("mediaTrack");
const mediaDots = document.getElementById("mediaDots");
let mediaIndex = 0;
let mediaTimer = null;

function renderMediaSlider(){
  if (!mediaTrack) return;

  mediaTrack.innerHTML = MEDIA_SLIDES.map(s => `
    <div class="mediaSlide">
      <img class="msImg" src="${escapeHtml(s.img)}" alt="${escapeHtml(s.title)}" onerror="this.closest('.mediaSlide').style.display='none'">
      <div class="msBody">
        <div class="msTitle">${escapeHtml(s.title)}</div>
        <div class="msSub">${escapeHtml(s.subtitle)}</div>
        <div class="msDesc">${escapeHtml(s.desc)}</div>
      </div>
    </div>
  `).join("");

  if (mediaDots){
    mediaDots.innerHTML = MEDIA_SLIDES.map((_, i) => `
      <button class="dot ${i===0 ? "active":""}" aria-label="Go to media ${i+1}" data-i="${i}"></button>
    `).join("");

    mediaDots.querySelectorAll(".dot").forEach(d => {
      d.addEventListener("click", () => {
        mediaIndex = Number(d.getAttribute("data-i"));
        goToMedia(mediaIndex);
        restartMediaAuto();
      });
    });
  }

  goToMedia(0);
}

function goToMedia(i){
  if (!mediaTrack) return;
  const slide = mediaTrack.querySelector(".mediaSlide");
  if (!slide) return;

  const slideWidth = slide.getBoundingClientRect().width;
  const gap = 16;

  const maxIndex = Math.max(0, MEDIA_SLIDES.length - 1);
  mediaIndex = Math.max(0, Math.min(i, maxIndex));

  const x = -(mediaIndex * (slideWidth + gap));
  mediaTrack.style.transform = `translateX(${x}px)`;

  if (mediaDots){
    const all = [...mediaDots.querySelectorAll(".dot")];
    all.forEach((d, idx) => d.classList.toggle("active", idx === mediaIndex));
  }
}
function nextMedia(){
  const maxIndex = Math.max(0, MEDIA_SLIDES.length - 1);
  mediaIndex = (mediaIndex >= maxIndex) ? 0 : mediaIndex + 1;
  goToMedia(mediaIndex);
}
function prevMedia(){
  const maxIndex = Math.max(0, MEDIA_SLIDES.length - 1);
  mediaIndex = (mediaIndex <= 0) ? maxIndex : mediaIndex - 1;
  goToMedia(mediaIndex);
}
function restartMediaAuto(){
  if (mediaTimer) clearInterval(mediaTimer);
  mediaTimer = setInterval(nextMedia, 3600);
}
document.getElementById("mediaNext")?.addEventListener("click", () => { nextMedia(); restartMediaAuto(); });
document.getElementById("mediaPrev")?.addEventListener("click", () => { prevMedia(); restartMediaAuto(); });
window.addEventListener("resize", () => goToMedia(mediaIndex));

renderMediaSlider();
restartMediaAuto();

// =====================
// Video glimpse (NEW)
// =====================
const v = document.getElementById("glimpseVideo");
if (v){
  const src = safeText(VIDEO.src, "");
  if (src && !src.startsWith("ADD_")){
    v.innerHTML = `<source src="${escapeHtml(src)}" type="video/mp4">`;
  }
  // autoplay might be blocked if not muted (we keep muted in HTML)
  v.muted = true;
  v.autoplay = true;
  v.loop = true;
}

// =====================
// 2-button list renderer (with optional 2 images)
// =====================
function renderTwoBtnList(elId, arr){
  const el = document.getElementById(elId);
  if (!el) return;

  el.innerHTML = arr.map(item => {
    const hasMedia = (item.img1 && item.img1.trim() !== "") || (item.img2 && item.img2.trim() !== "");
    const showBtn1 = item.btn1?.url && !item.btn1.url.startsWith("ADD_") && item.btn1.url !== "#" && item.btn1.url !== "";
    const showBtn2 = item.btn2?.url && !item.btn2.url.startsWith("ADD_") && item.btn2.url !== "#" && item.btn2.url !== "";
    const hasActions = showBtn1 || showBtn2;

    return `
    <div class="itemCard tilt">
      <div class="itemTitle">${escapeHtml(item.title)}</div>
      ${item.subtitle ? `<div class="itemSub">${escapeHtml(item.subtitle)}</div>` : ""}
      <div class="itemMeta">${escapeHtml(item.meta || "")}</div>
      <div class="itemDesc">${escapeHtml(item.desc || "")}</div>

      ${hasMedia ? `
      <div class="itemMedia2">
        ${item.img1 ? `<div class="miniImg"><img src="${escapeHtml(item.img1)}" alt="image 1" loading="lazy"></div>` : ""}
        ${item.img2 ? `<div class="miniImg"><img src="${escapeHtml(item.img2)}" alt="image 2" loading="lazy"></div>` : ""}
      </div>` : ""}

      ${hasActions ? `
      <div class="actionRow">
        ${showBtn1 ? `<a class="linkBtn primary" href="${safeUrl(item.btn1.url)}" target="_blank" rel="noopener">${escapeHtml(item.btn1.label || "View")}</a>` : ""}
        ${showBtn2 ? `<a class="linkBtn" href="${safeUrl(item.btn2.url)}" target="_blank" rel="noopener">${escapeHtml(item.btn2.label || "External")}</a>` : ""}
      </div>` : ""}

      ${item.embedHtml ? `<div class="muted" style="margin-top:12px">Embedded content below:</div><div style="margin-top:10px">${item.embedHtml}</div>` : ""}
    </div>
    `;
  }).join("");
}

function renderPublications() {
  const el = document.getElementById("pubList");
  if (!el) return;

  const themes = ['blue', 'purple', 'green', 'indigo', 'orange'];

  el.innerHTML = PUBLICATIONS.map((item, idx) => {
    const theme = themes[idx % themes.length];
    const showBtn1 = item.btn1?.url && !item.btn1.url.startsWith("ADD_") && item.btn1.url !== "#" && item.btn1.url !== "";
    const showBtn2 = item.btn2?.url && !item.btn2.url.startsWith("ADD_") && item.btn2.url !== "#" && item.btn2.url !== "";
    const hasActions = showBtn1 || showBtn2;

    return `
    <div class="pubCard tilt">
      <div class="pubBookContainer">
        <div class="pubBook">
          <div class="pubBookFront ${theme}">
            <div class="pubBookTitle">${escapeHtml(item.title)}</div>
            <div class="pubBookMeta">${escapeHtml(item.meta || "Paper")}</div>
          </div>
          <div class="pubBookSpine"></div>
        </div>
      </div>

      <div class="pubDetails">
        <div class="pubHeader">
          <h3 class="pubTitle">${escapeHtml(item.title)}</h3>
          <span class="pubBadge">${escapeHtml(item.meta || "Publication")}</span>
        </div>
        <div class="pubSub">${escapeHtml(item.subtitle || "")}</div>
        <p class="pubDesc">${escapeHtml(item.desc || "")}</p>

        ${hasActions ? `
        <div class="pubActions">
          ${showBtn1 ? `<a class="linkBtn primary" href="${safeUrl(item.btn1.url)}" target="_blank" rel="noopener">${escapeHtml(item.btn1.label || "View")}</a>` : ""}
          ${showBtn2 ? `<a class="linkBtn" href="${safeUrl(item.btn2.url)}" target="_blank" rel="noopener">${escapeHtml(item.btn2.label || "Details")}</a>` : ""}
        </div>` : ""}
      </div>
    </div>
    `;
  }).join("");
}

renderPublications();
function renderPatents() {
  const el = document.getElementById("patentList");
  if (!el) return;

  const themes = ['orange', 'blue', 'teal'];

  el.innerHTML = PATENTS.map((item, idx) => {
    const theme = themes[idx % themes.length];
    const showBtn1 = item.btn1?.url && !item.btn1.url.startsWith("ADD_") && item.btn1.url !== "#" && item.btn1.url !== "";
    const showBtn2 = item.btn2?.url && !item.btn2.url.startsWith("ADD_") && item.btn2.url !== "#" && item.btn2.url !== "";
    const hasActions = showBtn1 || showBtn2;

    return `
    <div class="patCard tilt">
      <div class="patDocContainer">
        <div class="patDoc ${theme}">
          <div class="patDocGrid"></div>
          <img class="patGovLogo" src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" alt="Gov of India Emblem" loading="lazy" />
          <div class="patDocTitle">${escapeHtml(item.title)}</div>
          <div class="patDocBadge">${escapeHtml(item.meta || "Patent")}</div>
          <div class="patDocSeal"></div>
        </div>
      </div>

      <div class="patDetails">
        <div class="patHeader">
          <h3 class="patTitle">${escapeHtml(item.title)}</h3>
          <span class="patBadge">${escapeHtml(item.meta || "Patent")}</span>
        </div>
        <div class="patSub">${escapeHtml(item.subtitle || "")}</div>
        <p class="patDesc">${escapeHtml(item.desc || "")}</p>

        ${hasActions ? `
        <div class="patActions">
          ${showBtn1 ? `<a class="linkBtn primary" href="${safeUrl(item.btn1.url)}" target="_blank" rel="noopener">${escapeHtml(item.btn1.label || "View")}</a>` : ""}
          ${showBtn2 ? `<a class="linkBtn" href="${safeUrl(item.btn2.url)}" target="_blank" rel="noopener">${escapeHtml(item.btn2.label || "Details")}</a>` : ""}
        </div>` : ""}
      </div>
    </div>
    `;
  }).join("");
}

renderPatents();
renderTwoBtnList("chapterList", BOOK_CHAPTERS);
renderTwoBtnList("editedBookList", EDITED_BOOKS);
renderTwoBtnList("liGrid", LINKEDIN_POSTS);

// =====================
// Blogs render (local + optional external RSS)
// =====================
const blogGrid = document.getElementById("blogGrid");

function renderBlogs(posts){
  if (!blogGrid) return;
  blogGrid.innerHTML = posts.map(p => {
    const hasMedia = (p.img1 && p.img1.trim() !== "") || (p.img2 && p.img2.trim() !== "");
    const showBtn1 = p.btn1?.url && !p.btn1.url.startsWith("ADD_") && p.btn1.url !== "#" && p.btn1.url !== "";
    const showBtn2 = p.btn2?.url && !p.btn2.url.startsWith("ADD_") && p.btn2.url !== "#" && p.btn2.url !== "";
    const hasActions = showBtn1 || showBtn2;

    return `
    <div class="itemCard tilt">
      <div class="itemTitle">${escapeHtml(p.title)}</div>
      <div class="itemSub">${escapeHtml(p.subtitle || "")}</div>
      <div class="itemDesc">${escapeHtml(p.desc || "")}</div>

      ${hasMedia ? `
      <div class="itemMedia2">
        ${p.img1 ? `<div class="miniImg"><img src="${escapeHtml(p.img1)}" alt="blog image 1" loading="lazy"></div>` : ""}
        ${p.img2 ? `<div class="miniImg"><img src="${escapeHtml(p.img2)}" alt="blog image 2" loading="lazy"></div>` : ""}
      </div>` : ""}

      ${hasActions ? `
      <div class="actionRow">
        ${showBtn1 ? `<a class="linkBtn primary" href="${safeUrl(p.btn1.url)}" target="_blank" rel="noopener">${escapeHtml(p.btn1.label || "Read")}</a>` : ""}
        ${showBtn2 ? `<a class="linkBtn" href="${safeUrl(p.btn2.url)}" target="_blank" rel="noopener">${escapeHtml(p.btn2.label || "External")}</a>` : ""}
      </div>` : ""}
    </div>
    `;
  }).join("");
}

async function fetchExternalBlogs(){
  const external = [];
  for (const f of BLOG_FEEDS){
    try{
      const res = await fetch(f.rss2json);
      const data = await res.json();
      const items = (data.items || []).slice(0, 4);
      items.forEach(it => {
        external.push({
          title: it.title || `Blog from ${f.label}`,
          subtitle: f.label,
          desc: (it.description || "").replace(/<[^>]*>?/gm, "").slice(0, 360) + "...",
          img1: it.thumbnail || "assets/blog/placeholder.jpg",
          img2: "assets/blog/placeholder2.jpg",
          btn1: { label: "Read Blog", url: it.link || "#" },
          btn2: { label: "More", url: it.guid || it.link || "#" }
        });
      });
    }catch(e){
      // ignore feed errors
    }
  }
  return external;
}

(async function initBlogs(){
  const external = await fetchExternalBlogs();
  const all = [...BLOG_POSTS, ...external];
  renderBlogs(all);
})();

// Achievements rendering removed (merged into Recommendations & Recognition)


// =====================
// Contact card
// =====================
// =====================
// Contact (card left + form right) + MAP + QR
// =====================
const contactCard = document.getElementById("contactCard");
if (contactCard){
  const mapSrc = safeText(PROFILE.mapEmbedUrl, "");
  const hasMap = mapSrc && !mapSrc.includes("ADD_GOOGLE_MAP") && mapSrc.trim() !== "";
  const hasQr = PROFILE.contactQrImg && !PROFILE.contactQrImg.includes("ADD_") && PROFILE.contactQrImg.trim() !== "";

  let contactExtrasHtml = "";
  if (hasMap || hasQr) {
    contactExtrasHtml = `
      <div class="contactExtras">
        ${hasMap ? `
        <div class="mapFrame">
          <iframe loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="${mapSrc}" aria-label="Google map"></iframe>
        </div>` : ""}
        ${hasQr ? `
        <div class="qrFrame" id="contactQr">
          <img src="${safeText(PROFILE.contactQrImg,"")}" alt="Contact QR" loading="lazy"/>
        </div>` : ""}
      </div>
    `;
  }

  contactCard.innerHTML = `
    <h3>Quick Info</h3>
    <div class="muted" style="margin-top:8px">I reply fastest on email / LinkedIn.</div>

    <div style="margin-top:16px; display:flex; flex-direction:column; gap:14px">
      <div><b>📍 Location</b><div class="muted">${escapeHtml(PROFILE.location)}</div></div>
      <div><b>✉️ Email</b><div class="muted">${escapeHtml(PROFILE.email)}</div></div>
      <div><b>📞 Phone</b><div class="muted">${escapeHtml(PROFILE.phone)}</div></div>
    </div>

    ${contactExtrasHtml}
  `;
}

// Footer QR
const footerQr = document.getElementById("footerQr");
if (footerQr){
  const ok = PROFILE.footerQrImg && !PROFILE.footerQrImg.includes("ADD_") && PROFILE.footerQrImg.trim() !== "";
  if (ok) {
    footerQr.innerHTML = `<img src="${safeText(PROFILE.footerQrImg,"")}" alt="Footer QR" loading="lazy"/>`;
  } else {
    const footQrRow = footerQr.closest(".footQrRow");
    if (footQrRow) footQrRow.style.display = "none";
  }
}
// =====================
// Dynamic section & nav hiding helper
// =====================
function checkAndHideSection(sectionId, dataArray) {
  const hasData = dataArray && (Array.isArray(dataArray) ? dataArray.length > 0 : !!dataArray.src);
  if (!hasData) {
    const section = document.getElementById(sectionId);
    if (section) section.style.display = "none";
    const navLink = document.querySelector(`#navLinks a[href="#${sectionId}"]`);
    if (navLink) navLink.style.display = "none";
  }
}

// Hide empty content sections
checkAndHideSection("bookchapter", BOOK_CHAPTERS);
checkAndHideSection("editedbook", EDITED_BOOKS);
checkAndHideSection("media", MEDIA_SLIDES);
checkAndHideSection("glimpse", VIDEO);
checkAndHideSection("blogs", BLOG_POSTS);
checkAndHideSection("linkedin", LINKEDIN_POSTS);

// =====================
// Footer links (auto copy from navbar so both stay in sync)
// =====================
const footerLinks = document.getElementById("footerLinks");
if (footerLinks){
  const navLinks = document.querySelectorAll("#navLinks a");
  footerLinks.innerHTML = Array.from(navLinks)
    .filter(a => a.style.display !== "none") // Only copy visible links!
    .map(a => {
      const href = a.getAttribute("href");
      const label = a.textContent.trim();
      const token = a.getAttribute("data-i18n");
      return `<a href="${href}" ${token ? `data-i18n="${token}"` : ""}>${escapeHtml(label)}</a>`;
    }).join("");


}

// =====================
// Footer socials
// =====================
const socialRow = document.getElementById("socialRow");
if (socialRow){
  socialRow.innerHTML = `
    <a class="social" href="${safeUrl(PROFILE.linkedin)}" target="_blank" rel="noopener">LinkedIn</a>
    <a class="social" href="${safeUrl(PROFILE.github)}" target="_blank" rel="noopener">GitHub</a>
    <a class="social" href="${safeUrl(PROFILE.scholar)}" target="_blank" rel="noopener">Scholar</a>
    <a class="social" href="${safeUrl(PROFILE.resumeUrl)}" target="_blank" rel="noopener">Resume</a>
  `;
}

// ============================================
// Schedule Meeting Submission (AJAX via Formspree)
// ============================================
const meetForm = document.getElementById("meetForm");
if (meetForm) {
  meetForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const submitBtn = document.getElementById("meetBtn");
    const originalBtnText = submitBtn ? submitBtn.textContent : "Request";

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending...";
    }

    const formData = new FormData(meetForm);

    try {
      const response = await fetch(meetForm.action, {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        meetForm.reset();
        
        // Show success layout on form
        const originalHTML = meetForm.innerHTML;
        const meetDesc = document.getElementById("meetDescription");
        const originalDesc = meetDesc ? meetDesc.textContent : "";
        
        if (meetDesc) meetDesc.textContent = "Meeting request sent! I will review and reply shortly.";
        
        meetForm.innerHTML = `
          <div class="successMessage" style="text-align: center; padding: 15px 10px; display: flex; flex-direction: column; align-items: center; justify-content: center; animation: fadeIn 0.4s ease-out; grid-column: 1 / -1;">
            <div style="font-size: 32px; margin-bottom: 8px;">📅</div>
            <p style="font-size: 14px; font-weight: bold; color: var(--text); margin-bottom: 12px;">Request Submitted!</p>
            <button class="btn primary" id="resetMeetBtn" style="padding: 6px 14px; font-size: 11px;">Request Another Call</button>
          </div>
        `;
        
        document.getElementById("resetMeetBtn")?.addEventListener("click", () => {
          if (meetDesc) meetDesc.textContent = originalDesc;
          meetForm.innerHTML = originalHTML;
        });
      } else {
        const data = await response.json();
        if (data && data.errors) {
          alert(data.errors.map(error => error.message).join(", "));
        } else {
          alert("Oops! There was a problem submitting your request. Please try again.");
        }
      }
    } catch (error) {
      alert("Oops! There was a problem connecting to the server. Please check your network and try again.");
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;
      }
    }
  });
}

// ============================================
// Newsletter Subscription (AJAX via Formspree)
// ============================================
const newsForm = document.getElementById("newsForm");
if (newsForm) {
  newsForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const submitBtn = document.getElementById("newsBtn");
    const originalBtnText = submitBtn ? submitBtn.textContent : "Subscribe";

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "...";
    }

    const formData = new FormData(newsForm);

    try {
      const response = await fetch(newsForm.action, {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        newsForm.reset();
        
        const newsDesc = document.getElementById("newsDescription");
        if (newsDesc) newsDesc.textContent = "Thank you! You have successfully subscribed to my updates.";
        
        newsForm.innerHTML = `
          <div class="successMessage" style="text-align: center; padding: 10px 5px; display: flex; flex-direction: column; align-items: center; justify-content: center; animation: fadeIn 0.4s ease-out; width: 100%;">
            <p style="font-size: 14px; font-weight: bold; color: var(--text);">🎉 Subscribed!</p>
          </div>
        `;
      } else {
        const data = await response.json();
        if (data && data.errors) {
          alert(data.errors.map(error => error.message).join(", "));
        } else {
          alert("Oops! There was a problem subscribing. Please try again.");
        }
      }
    } catch (error) {
      alert("Oops! There was a problem connecting to the server. Please check your network and try again.");
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;
      }
    }
  });
}

// =====================
// Optional: simple tilt
// =====================
function attachTilt(el, intensity = 12) {
  let rect = null;
  const onMove = (e) => {
    rect = rect || el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotY = (x - 0.5) * intensity;
    const rotX = (0.5 - y) * intensity;
    el.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(0)`;
  };
  const onLeave = () => {
    rect = null;
    el.style.transform = `rotateX(0deg) rotateY(0deg) translateZ(0)`;
  };
  el.addEventListener("mousemove", onMove);
  el.addEventListener("mouseleave", onLeave);
}
document.querySelectorAll(".tilt").forEach((el) => attachTilt(el, 14));
document.querySelectorAll(".tilt-sm").forEach((el) => attachTilt(el, 10));
document.querySelectorAll(".card3d").forEach((el) => attachTilt(el, 16));

// =====================
// Navbar Search (NEW)
// - keyword type => suggestions
// - click => scroll to best match section
// =====================
const SEARCH_INDEX = [
  { id:"home", title:"Home", keywords:["hero","summary","profile","stats","banner"] },
  { id:"about", title:"About", keywords:["about","who i am","focus","tools"] },
  { id:"skills", title:"Skills", keywords:["skills","technical","stack","python","mern","react","node","docker"] },
  { id:"experience", title:"Experience", keywords:["experience","intern","geu","visit uttarakhand","work"] },
  { id:"education", title:"Education", keywords:["education","iit patna","geu","btech","mtech"] },
  { id:"projects", title:"Projects", keywords:["projects","github","live","deployed"] },
  { id:"media", title:"Media", keywords:["media","gallery","slider","photos"] },
  { id:"glimpse", title:"Video Glimpse", keywords:["video","glimpse","demo","showreel"] },
  { id:"blogs", title:"Blogs", keywords:["blog","articles","posts","medium","rss"] },
  { id:"linkedin", title:"LinkedIn Posts", keywords:["linkedin","posts","updates"] },
  { id:"publications", title:"Publications", keywords:["publication","paper","research","crc press"] },
  { id:"patents", title:"Patents", keywords:["patent","ipr","published"] },
  { id:"bookchapter", title:"Book Chapter", keywords:["book chapter","chapter"] },
  { id:"editedbook", title:"Edited Book", keywords:["edited book","editor"] },
  { id:"recommendations", title:"Recommendations & Recognition", keywords:["recommendation","achievement","award","recognition","speaker","reviewer","hackathon"] },
  { id:"contact", title:"Contact", keywords:["contact","email","phone","message"] },
];

const siteSearch = document.getElementById("siteSearch");
const searchDrop = document.getElementById("searchDrop");

function scoreMatch(q, item){
  const query = q.toLowerCase().trim();
  if (!query) return 0;
  let s = 0;
  if (item.title.toLowerCase().includes(query)) s += 10;
  item.keywords.forEach(k => {
    const kk = k.toLowerCase();
    if (kk.includes(query) || query.includes(kk)) s += 5;
  });
  return s;
}
function openDrop(){
  if (!searchDrop) return;
  searchDrop.style.display = "block";
  searchDrop.setAttribute("aria-hidden","false");
}
function closeDrop(){
  if (!searchDrop) return;
  searchDrop.style.display = "none";
  searchDrop.setAttribute("aria-hidden","true");
}
function scrollToSection(id){
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior:"smooth", block:"start" });
  closeDrop();
  if (siteSearch) siteSearch.blur();
}

siteSearch?.addEventListener("input", () => {
  const q = siteSearch.value || "";
  const query = q.trim();
  if (!query){
    closeDrop();
    if (searchDrop) searchDrop.innerHTML = "";
    return;
  }

  const results = SEARCH_INDEX
    .map(it => ({...it, score: scoreMatch(query, it)}))
    .filter(x => x.score > 0)
    .sort((a,b) => b.score - a.score)
    .slice(0, 6);

  if (!results.length){
    if (searchDrop){
      searchDrop.innerHTML = `<div class="searchItem"><div class="siTitle">No match</div><div class="siHint">Try: projects, patents, blogs, contact...</div></div>`;
      openDrop();
    }
    return;
  }

  if (searchDrop){
    searchDrop.innerHTML = results.map(r => `
      <div class="searchItem" data-id="${escapeHtml(r.id)}">
        <div class="siTitle">${escapeHtml(r.title)}</div>
        <div class="siHint">Jump to #${escapeHtml(r.id)}</div>
      </div>
    `).join("");
    openDrop();

    searchDrop.querySelectorAll(".searchItem").forEach(item => {
      item.addEventListener("click", () => {
        const id = item.getAttribute("data-id");
        if (id) scrollToSection(id);
      });
    });
  }
});

siteSearch?.addEventListener("keydown", (e) => {
  if (e.key === "Enter"){
    const q = (siteSearch.value || "").trim();
    if (!q) return;
    // best match
    const best = SEARCH_INDEX
      .map(it => ({...it, score: scoreMatch(q, it)}))
      .sort((a,b) => b.score - a.score)[0];
    if (best && best.score > 0) scrollToSection(best.id);
  }
  if (e.key === "Escape"){
    closeDrop();
    siteSearch.blur();
  }
});

document.addEventListener("click", (e) => {
  const t = e.target;
  if (!t) return;
  const inside = t.closest?.(".navSearch");
  if (!inside) closeDrop();
});


// =====================
// LOADER control (2.5s)
// =====================
const pageLoader = document.getElementById("pageLoader");
if (pageLoader){
  // Hide after 2.5s (as you requested). You can change this number anytime.
  const HIDE_AFTER_MS = 2500;
  setTimeout(() => pageLoader.classList.add("hide"), HIDE_AFTER_MS);

  // Also hide quickly after full load (whichever happens later is fine).
  window.addEventListener("load", () => {
    setTimeout(() => pageLoader.classList.add("hide"), 200);
  });
}

// ============================================
// CONTACT FORM SUBMISSION (AJAX via Formspree)
// ============================================
function bindContactForm() {
  const contactCard = document.querySelector(".contactFormCard");
  const form = contactCard?.querySelector(".form");
  if (!contactCard || !form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector("button[type='submit']");
    const originalBtnText = submitBtn ? submitBtn.textContent : "Send Message";

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending...";
    }

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        // Save the original form inner HTML to allow sending another message
        const originalHTML = contactCard.innerHTML;

        // Render premium success UI with a fade-in animation
        contactCard.innerHTML = `
          <div class="successMessage" style="text-align: center; padding: 40px 20px; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 300px; animation: fadeIn 0.4s ease-out;">
            <div style="font-size: 56px; margin-bottom: 24px; filter: drop-shadow(0 0 10px rgba(99, 102, 241, 0.4));">✉️</div>
            <h3 style="margin-bottom: 12px; font-size: 24px; font-weight: 700; color: var(--text);">Thank You!</h3>
            <p style="color: var(--text-muted); margin-bottom: 32px; font-size: 15px; max-width: 320px; line-height: 1.6;">Your message has been sent successfully. I will get back to you as soon as possible.</p>
            <button class="btn primary" id="sendAnotherBtn" style="padding: 10px 24px; font-size: 14px;">Send Another Message</button>
          </div>
        `;

        document.getElementById("sendAnotherBtn")?.addEventListener("click", () => {
          contactCard.innerHTML = originalHTML;
          bindContactForm(); // Re-bind form submission listener
        });
      } else {
        const data = await response.json();
        if (data && data.errors) {
          alert(data.errors.map(error => error.message).join(", "));
        } else {
          alert("Oops! There was a problem submitting your form. Please try again.");
        }
      }
    } catch (error) {
      alert("Oops! There was a problem connecting to the server. Please check your network and try again.");
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;
      }
    }
  });
}

// Bind contact form listeners on initial load
bindContactForm();