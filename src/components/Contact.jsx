import { useState } from "react";
import { MailIcon, PinIcon } from "./Icons";
import { SOCIALS } from "./socials";
import { WEB3FORMS_ACCESS_KEY } from "../config";

function Contact() {
  // idle | sending | sent | error
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    if (data.botcheck) return; // spam bot filled the hidden field

    if (!WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY.startsWith("PASTE_")) {
      setStatus("error");
      setError("The contact form isn't set up yet. Please email me directly at merontty1@gmail.com.");
      return;
    }

    setStatus("sending");
    setError("");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New message from ${data.name} via Meron.dev`,
          from_name: "Meron.dev portfolio",
          name: data.name,
          email: data.email,
          replyto: data.email,
          message: data.message,
        }),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("sent");
        form.reset();
      } else {
        throw new Error(json.message || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setError("Sorry, your message couldn't be sent. Please try again or email me at merontty1@gmail.com.");
    }
  };

  return (
    <footer id="contact" className="footer">
      <div className="container footer-inner reveal">
        <div className="footer-info">
          <div className="badge badge-dark">
            <span className="badge-dot" aria-hidden="true" />
            Available for work
          </div>
          <h2 className="section-title">Let's work together</h2>
          <p className="lead">Have a project in mind or just want to say hi? Send me a message and I'll get back to you.</p>
          <div className="contact-lines">
            <a href="mailto:merontty1@gmail.com" className="contact-line">
              <span className="contact-ic" aria-hidden="true">
                <MailIcon />
              </span>
              merontty1@gmail.com
            </a>
            <div className="contact-line">
              <span className="contact-ic" aria-hidden="true">
                <PinIcon />
              </span>
              Addis Ababa, Ethiopia
            </div>
          </div>
          <div className="socials">
            {SOCIALS.map(({ label, href, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="social">
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate={false}>
          {/* Hidden field that catches spam bots. */}
          <input type="checkbox" name="botcheck" className="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" />
          <div className="field">
            <label htmlFor="c-name">Name</label>
            <input id="c-name" name="name" type="text" placeholder="Your name" autoComplete="name" required />
          </div>
          <div className="field">
            <label htmlFor="c-email">Email</label>
            <input id="c-email" name="email" type="email" placeholder="you@example.com" autoComplete="email" required />
          </div>
          <div className="field">
            <label htmlFor="c-msg">Message</label>
            <textarea id="c-msg" name="message" rows="6" placeholder="Tell me about your project" required />
          </div>
          <button type="submit" className="btn btn-light btn-lg" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Send message"}
          </button>
          <p className={`form-status ${status}`} role="status" aria-live="polite">
            {status === "sent" && "Thanks! Your message was sent. I'll get back to you soon."}
            {status === "error" && error}
          </p>
        </form>
      </div>

      <div className="wordmark-wrap" aria-hidden="true">
        <p className="wordmark">Meron.dev</p>
      </div>

      <div className="footer-bar">
        <div className="container footer-bar-inner">
          <p>© {new Date().getFullYear()} Meron. All rights reserved. Designed &amp; built by Meron.</p>
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About me</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#home" className="to-top">
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
