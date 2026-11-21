import abem from "../assets/projects/abem.jpg";
import travel from "../assets/projects/travel.jpg";
import onboarding from "../assets/projects/onboarding.jpg";
import { BoxIcon } from "./Icons";

const PROJECTS = [
  {
    name: "Abem Academy",
    text: "A school website built in WordPress.",
    image: abem,
    alt: "Abem Academy website homepage",
    tags: ["WordPress"],
    links: [{ label: "Live site", href: "https://abemacademy.com/" }],
  },
  {
    name: "Travel Planner",
    text: "Lets travelers search for destinations and explore travel details.",
    image: travel,
    alt: "Travel Planner app showing destinations and flights",
    tags: ["React (Vite)", "Tailwind CSS", "Axios", "React Router"],
    links: [{ label: "Live site", href: "https://travel-planner-bice-theta.vercel.app/" }],
  },
  {
    name: "Accessible Onboarding",
    text: "A drop-in sign-up and profile component for learners who are blind, have a physical disability, have difficulty reading, or have no standard ID.",
    image: onboarding,
    alt: "Digital Bridge accessible sign-up screen",
    tags: ["Accessibility"],
    links: [{ label: "Live site", href: "https://digital-bridge-onboarding.onrender.com/" }],
  },
  {
    name: "Inventory Management System",
    text: "A Python-based system for managing product details, stock quantities, prices and inventory records, stored as JSON data.",
    image: null,
    tags: ["Python", "Tkinter", "JSON"],
    links: [{ label: "Code on GitHub", href: "https://github.com/meron-dve/inventory-management-system" }],
  },
];

function InventoryArt() {
  const rows = [
    [70, 34],
    [52, 26],
    [84, 40],
    [44, 22],
  ];
  return (
    <div className="proj-art" aria-hidden="true">
      <span className="proj-art-icon">
        <BoxIcon />
      </span>
      <div className="proj-art-rows">
        {rows.map(([w, q], i) => (
          <div key={i} className="proj-art-row">
            <span className="sq" />
            <span className="bar" style={{ width: `${w}%` }} />
            <span className="qty" style={{ width: q }} />
          </div>
        ))}
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="section">
      <span className="shape shape-proj-ring" aria-hidden="true" />
      <span className="shape shape-proj-square" aria-hidden="true" />
      <div className="container stack-lg">
        <div className="stack-sm reveal">
          <p className="eyebrow">Projects</p>
          <h2 className="section-title">Things I've built</h2>
          <p className="lead">A selection of websites, apps and tools I've built.</p>
        </div>

        <div className="project-grid reveal">
          {PROJECTS.map((p) => (
            <article key={p.name} className="proj-card">
              {p.image ? <img className="proj-img" src={p.image} alt={p.alt} loading="lazy" /> : <InventoryArt />}
              <div className="proj-body">
                <h3>{p.name}</h3>
                <p>{p.text}</p>
              </div>
              <div className="tags">
                {p.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
              <div className="proj-links">
                {p.links.map((l) => (
                  <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">
                    {l.label} ↗
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
