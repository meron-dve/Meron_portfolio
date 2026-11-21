import Skills from "./Skill";
import Education from "./Education";

function About() {
  return (
    <section id="about" className="section">
      <span className="shape shape-about-ring" aria-hidden="true" />
      <span className="shape shape-about-diamond" aria-hidden="true" />
      <div className="container stack-xl">
        <div className="about-intro reveal">
          <p className="eyebrow">About me</p>
          <h2 className="section-title">I build clean, friendly websites</h2>
          <p className="lead">
            I'm Meron Tsegaye, a web developer. I was drawn to technology from an early age and found my place in
            web development. I enjoy designing user interfaces that people love to interact with.
          </p>
          <p className="lead">I'm currently looking for freelance and collaboration opportunities to grow my experience.</p>
        </div>
        <Skills />
        <Education />
      </div>
    </section>
  );
}

export default About;
