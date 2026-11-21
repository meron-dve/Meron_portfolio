import { useState } from "react";
import meronPhoto from "../assets/meron.png";
import { ArrowRight, DownloadIcon } from "./Icons";
import { SOCIALS } from "./socials";


function Hero() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // Tilt the photo toward the mouse.
  const handleMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ x: -y * 16, y: x * 16 });
  };

  return (
    <section id="home" className="hero">
      <span className="shape shape-ring" aria-hidden="true" />
      <span className="shape shape-dashed" aria-hidden="true" />
      <span className="shape shape-diamond" aria-hidden="true" />
      <span className="shape shape-square" aria-hidden="true" />
      <span className="shape shape-dot" aria-hidden="true" />

      <div className="container hero-inner">
        <div className="hero-text">
          <div className="badge">
            <span className="badge-dot" aria-hidden="true" />
            Available for work
          </div>
          <div>
            <h1 className="hero-title">Hi, I'm Meron</h1>
            <p className="hero-role">Front End Developer</p>
          </div>
          <div className="socials">
            {SOCIALS.map(({ label, href, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="social">
                <Icon />
              </a>
            ))}
          </div>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary btn-lg">
              View projects <ArrowRight />
            </a>
            <a href="/Meron-Tsegaye-CV.pdf" download="Meron-Tsegaye-CV.pdf" className="link-cta">
              <DownloadIcon /> Download CV
            </a>
          </div>
        </div>

        <div className="hero-photo-wrap" onMouseMove={handleMove} onMouseLeave={() => setTilt({ x: 0, y: 0 })}>
          <div
            className="hero-photo"
            style={{ transform: `rotateX(${tilt.x.toFixed(1)}deg) rotateY(${tilt.y.toFixed(1)}deg)` }}
          >
            <img src={meronPhoto} alt="Portrait of Meron smiling" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
