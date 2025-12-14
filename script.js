// Content configuration — edit here to update your site
const profile = {
  photoUrl: "https://media.licdn.com/dms/image/v2/D4E03AQGyiy_xp9PidQ/profile-displayphoto-scale_200_200/B4EZgYGibqGUAg-/0/1752751024557?e=1767225600&v=beta&t=thIalBf9iGq2oSeg6fTReGyjqBiOlG5i_urwpi9wv6k",
  name: "Abhinav Kayastha",
  tagline: "Maintenance Engineer at Nokia developing Software Solutions for BTS.",
  links: {
    linkedin: "https://www.linkedin.com/in/abhinav-kayastha/",
    github: "https://github.com/abhinav-kayastha",
    email: "mailto:abhinav.kayastha@nokia.com",
  },
};

const skills = {
  languages: ["Python", "JavaScript", "Bash", "C/C++", "Robot Framework"],
  technologies: ["Docker", "Flask", "Jenkins", "Yocto"],
  tools: ["Git", "Linux", "CI/CD Pipelines", "GitHub Copilot", "MQTT"],
};

const experience = [
  {
    company: "Nokia",
    city: "Oulu",
    country: "Finland",
    title: "Maintenance Engineer",
    start: "Sep 2025",
    end: "Present",
    points: [
      "Creating scripts to monitor health of base transciever stations (BTS).",
      "Developing tailormade applications for telecom operators worldwide.",
    ],
  },
{
    company: "Nokia",
    city: "Oulu",
    country: "Finland",
    title: "Thesis Worker",
    start: "May 2025",
    end: "Aug 2025",
    points: [
        "Developed a full-stack web application for data visualization of network interference in 4G & 5G for Passive Intermodulation (PIM) detection using Python, Flask & Plotly.",
        "Implemented CI/CD pipelines using GitLab CI, Docker & Nginx.",
        "Enabled engineers to identify PIM related issues 99.95% faster.",
    ],
},
{
    company: "Nokia",
    city: "Remote",
    country: "Finland",
    title: "Trainee",
    start: "Oct 2024",
    end: "Apr 2025",
    points: [
        "Extension of the Base Station Configuration Visualizer tool by adding TX & RX antenna port data enabling engineers to analyze network configurations with greater precision.",
        "Initiated the development of the PIM detection software as part of the thesis work, leveraging Received Interference Power data.",
    ],
},
{
    company: "Nokia",
    city: "Oulu",
    country: "Finland",
    title: "Summer Trainee",
    start: "May 2024",
    end: "Aug 2024",
    points: [
        "Built a Power Supply Voltage sequencing application to control voltage levels in radio testing, enabling the analysis of signal strength across varying voltage levels and providing engineers with secure remote control of the test equipment.",
        "Created a 2G/3G/4G Call Generator with modems and AT commands to simulate network traffic and monitor performance metrics (RSSI, RXQUAL, BER) and logging results for troubleshooting.",
        "Developed a Base Station Configuration Visualizer tool to visualize 3G, 4G & 5G network parameters in a table and graph (frequency, bandwidth and power) to improve data interpretation for engineers.",
    ],
},
{
    company: "University of Turku",
    city: "Remote",
    country: "Finland",
    title: "Computer Vision Intern",
    start: "May 2023",
    end: "Oct 2023",
    points: [
        "Developing and refining machine learning models for human and vehicle detection, achieving an accuracy of 96%.",
        "Co-authored and presented a research paper on computer vision applications, gaining academic and technical communication.",
    ],
}
];

const education = [
    {
        school: "Metropolia University of Applied Sciences",
        degree: "Bachelor of Engineering, Information Technology (IoT – Embedded Devices)",
        year: "2025",
        details: "Graduated a year early. Degree was 4 years but finished in 3."
    },
    {
        school: "Kuopion Lyseon lukio",
        degree: "Highschool Diploma, IB: International Baccalaureate",
        year: "2022"
    }
];

const publications = [
    { title: "YOLO for Urban Traffic: Insights from Helsinki Port Surveillance", venue: "SoCTA2024", year: "2025", link: "https://link.springer.com/chapter/10.1007/978-981-96-5958-6_2" },
    { title: "Analysis and Visualization of Uplink Interference in LTE and 5G Networks Using RIP Counters", venue: "Theseus", year: "2025", link: "https://www.theseus.fi/handle/10024/886867" }
];  

const projects = [
    { name: "Smart Bird Feeder", description: "IoT Smart Bird Feeder using Node.js, Express.js, MQTT & WebSockets with real-time monitoring dashboard and SQLite database.", link: "https://github.com/abhinav-kayastha/smart-bird-feeder" },
    { name: "Ventilation Controller", description: "Ventilation control system with Modbus communication, real-time control using interrupts and MQTT for remote monitoring.", link: "https://github.com/Nadim-2022/Ventilation-Device" },
    { name: "Flight Simulator", description: "Python-based terminal game simulating passenger transport between Finnish airports with MySQL database integration.", link: "https://github.com/abhinav-kayastha/Flight-Simulator/blob/main/main.py" },
    { name: "Personal Cloud Infrastructure", description: "Self-hosted private cloud on Raspberry Pi using Nextcloud AIO, Docker, Portainer and Cloudflare Tunnel for secure file access.", link: "https://github.com/abhinav-kayastha/nextcloud-aio-with-docker-and-cloudflare-tunnels" },
    { name: "Embedded Linux Development with Yocto", description: "Embedded Linux workflow optimization using Yocto Project for ARM-based systems with CMake and ARM GCC toolchain."},
];

const languages = ["English", "Maithili", "Nepali", "Finnish", "Swedish"];

// Render helpers
function setIdentity() {
  const photo = document.getElementById("profile-photo");
  const name = document.getElementById("name");
  const tagline = document.getElementById("tagline");
  const lLinkedIn = document.getElementById("link-linkedin");
  const lGitHub = document.getElementById("link-github");
  const lEmail = document.getElementById("link-email");

  if (profile.photoUrl) photo.src = profile.photoUrl;
  name.textContent = profile.name;
  tagline.textContent = profile.tagline;
  lLinkedIn.href = profile.links.linkedin;
  lGitHub.href = profile.links.github;
  lEmail.href = profile.links.email;
}

function renderList(containerId, items) {
  const el = document.getElementById(containerId);
  el.innerHTML = "";
  items.forEach((txt) => {
    const li = document.createElement("li");
    li.textContent = txt;
    el.appendChild(li);
  });
}

function renderSkills() {
  renderList("skills-languages", skills.languages);
  renderList("skills-technologies", skills.technologies);
  renderList("skills-tools", skills.tools);
}

function renderExperience() {
  const root = document.getElementById("experience-list");
  root.innerHTML = "";
  experience.forEach((exp) => {
    const item = document.createElement("div");
    item.className = "experience-item";

    const header = document.createElement("div");
    header.className = "experience-header";

    const title = document.createElement("div");
    title.className = "experience-title";
    title.textContent = `${exp.company} — ${exp.city}, ${exp.country} | ${exp.title}`;

    const meta = document.createElement("div");
    meta.className = "experience-meta";
    meta.textContent = `${exp.start} – ${exp.end}`;

    const ul = document.createElement("ul");
    ul.className = "experience-points";
    exp.points.forEach((p) => {
      const li = document.createElement("li");
      li.textContent = p;
      ul.appendChild(li);
    });

    header.appendChild(title);
    header.appendChild(meta);
    item.appendChild(header);
    item.appendChild(ul);
    root.appendChild(item);
  });
}

function renderEducation() {
  const root = document.getElementById("education-list");
  root.innerHTML = "";
  education.forEach((e) => {
    const li = document.createElement("li");
    li.textContent = `${e.school} — ${e.degree} (${e.year})`;
    root.appendChild(li);
  });
}

function renderPublications() {
  const root = document.getElementById("publications-list");
  root.innerHTML = "";
  publications.forEach((p) => {
    const li = document.createElement("li");
    if (p.link) {
      const a = document.createElement("a");
      a.href = p.link;
      a.target = "_blank";
      a.rel = "noopener";
      a.textContent = `${p.title} — ${p.venue} (${p.year})`;
      li.appendChild(a);
    } else {
      li.textContent = `${p.title} — ${p.venue} (${p.year})`;
    }
    root.appendChild(li);
  });
}

function renderProjects() {
  const root = document.getElementById("projects-list");
  root.innerHTML = "";
  projects.forEach((p) => {
    const card = document.createElement("div");
    card.className = "project-card";
    const title = document.createElement("div");
    title.textContent = p.name;
    const desc = document.createElement("div");
    desc.textContent = p.description;
    card.appendChild(title);
    card.appendChild(desc);
    if (p.link) {
      const a = document.createElement("a");
      a.href = p.link;
      a.textContent = "View";
      a.target = "_blank";
      a.rel = "noopener";
      card.appendChild(a);
    }
    root.appendChild(card);
  });
}

function renderLanguages() {
  const root = document.getElementById("languages-list");
  root.innerHTML = "";
  languages.forEach((lang) => {
    const span = document.createElement("span");
    span.textContent = lang;
    span.style.display = "inline-block";
    span.style.padding = "8px 12px";
    span.style.border = "1px solid rgba(255, 255, 255, 0.08)";
    span.style.borderRadius = "999px";
    span.style.background = "rgba(255, 255, 255, 0.04)";
    span.style.marginRight = "8px";
    span.style.marginBottom = "8px";
    root.appendChild(span);
  });
}

function setFooterYear() {
  const y = document.getElementById("copyright-year");
  y.textContent = new Date().getFullYear();
}

function init() {
  setIdentity();
  renderSkills();
  renderExperience();
  renderEducation();
  renderPublications();
  renderProjects();
  renderLanguages();
  setFooterYear();
}

document.addEventListener("DOMContentLoaded", init);
