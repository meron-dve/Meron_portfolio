import { AwardIcon, BriefcaseIcon, CapIcon } from "./Icons";

const ITEMS = [
  {
    Icon: BriefcaseIcon,
    title: "Web Development Intern",
    detail: "Visionary IT Solutions · Built a school website in WordPress and a mobile app",
    tag: "3-month internship",
  },
  {
    Icon: CapIcon,
    title: "BSc in Computer Science",
    detail: "New Generation University College",
    tag: "Expected 2027",
  },
  { Icon: AwardIcon, title: "Front End Development Certificate", detail: "ALX Ethiopia", tag: "Certificate" },
  { Icon: AwardIcon, title: "Python Foundations Bootcamp", detail: "Pitron Tech", tag: "Bootcamp" },
  { Icon: AwardIcon, title: "Programming Fundamentals Certificate", detail: "Udacity", tag: "Certificate" },
];

function Education() {
  return (
    <div className="reveal">
      <h3 className="sub-title">Experience &amp; education</h3>
      <ul className="timeline">
        {ITEMS.map(({ Icon, title, detail, tag }) => (
          <li key={title} className="timeline-row">
            <div className="timeline-main">
              <span className="timeline-icon" aria-hidden="true">
                <Icon />
              </span>
              <div>
                <h4>{title}</h4>
                <p>{detail}</p>
              </div>
            </div>
            <span className="chip">{tag}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Education;
