import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import tailwind from "../assets/skills/tw.png";
import js from "../assets/skills/js.png";
import ts from "../assets/skills/ts.png";
import react from "../assets/skills/react.png";
import python from "../assets/skills/py.png";
import node from "../assets/skills/node.png";
import figma from "../assets/skills/figma.png";

const SKILLS = [
  { name: "HTML", logo: html },
  { name: "CSS", logo: css },
  { name: "Tailwind CSS", logo: tailwind, wide: true },
  { name: "JavaScript", logo: js },
  { name: "TypeScript", logo: ts },
  { name: "React", logo: react },
  { name: "Python", logo: python },
  { name: "Node.js", logo: node },
  { name: "Figma", logo: figma, tall: true },
];

function Skills() {
  return (
    <div className="reveal" aria-labelledby="skills-h">
      <h3 id="skills-h" className="sub-title">Skills</h3>
      <ul className="skill-grid">
        {SKILLS.map((s) => (
          <li key={s.name} className="skill">
            <span className={`skill-tile ${s.wide ? "is-wide" : ""} ${s.tall ? "is-tall" : ""}`} aria-hidden="true">
              <img src={s.logo} alt="" />
            </span>
            <span className="skill-name">{s.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
