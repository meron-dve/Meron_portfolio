import { ArrowRight, CodeIcon, DevicesIcon, HomeIcon, PenIcon } from "./Icons";

const SERVICES = [
  {
    Icon: () => <CodeIcon size={26} />,
    title: "Frontend Development",
    text: "Responsive, component-based web apps built with React and JavaScript.",
    points: ["React.js", "JavaScript (ES6+)", "REST API integration"],
  },
  {
    Icon: DevicesIcon,
    title: "Responsive Websites",
    text: "Websites that look and work well on phones, tablets and desktops.",
    points: ["Mobile-first layouts", "Clean navigation", "Form handling"],
  },
  {
    Icon: PenIcon,
    title: "UI Design",
    text: "Wireframes and clean, user-friendly interfaces designed in Figma.",
    points: ["Wireframing", "Interface design", "Figma prototypes"],
  },
  {
    Icon: HomeIcon,
    title: "WordPress Websites",
    text: "Easy-to-manage websites for schools, small businesses and organizations.",
    points: ["Custom pages", "Content setup", "Launch support"],
  },
];

function Services() {
  return (
    <section id="services" className="section">
      <span className="shape shape-services-diamond" aria-hidden="true" />
      <div className="container stack-lg">
        <div className="section-head reveal">
          <div className="stack-sm">
            <p className="eyebrow">Services</p>
            <h2 className="section-title">What I can do for you</h2>
            <p className="lead">Available for freelance projects and collaborations.</p>
          </div>
          <a href="#contact" className="btn btn-primary btn-lg">
            Start a project <ArrowRight />
          </a>
        </div>

        <div className="service-grid reveal">
          {SERVICES.map(({ Icon, title, text, points }, i) => (
            <article key={title} className="svc-card">
              <span className="svc-num" aria-hidden="true">
                0{i + 1}
              </span>
              <span className="svc-ic" aria-hidden="true">
                <Icon />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
              <ul>
                {points.map((p) => (
                  <li key={p}>
                    <span className="svc-dot" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="svc-go">
                Let's talk <ArrowRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
