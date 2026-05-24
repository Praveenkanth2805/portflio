"use client";

import { useState, FormEvent } from "react";

const CONTACT = {
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "praveenkanth@example.com",
  github: process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/praveenkanth",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://linkedin.com/in/praveenkanth",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ? `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}` : "#",
};

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section id="contact">
      <div className="section-label">04 — Contact</div>
      <h2 className="section-title">Let's <em>Work Together</em></h2>
      <div className="section-divider"></div>

      <div className="contact-inner reveal">
        <div>
          <p className="contact-headline">Have a project<em> in mind?</em></p>
          <p className="contact-sub">
            Whether it's a freelance build, a full-time role, or just a conversation — I'm open. Drop a message and I'll reply within 24 hours.
          </p>

          <div className="contact-links">
            <a href={`mailto:${CONTACT.email}`} className="contact-link-item glass">
              <div className="contact-link-icon">✉️</div>
              <div>
                <div className="contact-link-label">Email</div>
                <div className="contact-link-value">{CONTACT.email}</div>
              </div>
            </a>
            <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="contact-link-item glass">
              <div className="contact-link-icon">🐙</div>
              <div>
                <div className="contact-link-label">GitHub</div>
                <div className="contact-link-value">{CONTACT.github.replace("https://", "")}</div>
              </div>
            </a>
            <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link-item glass">
              <div className="contact-link-icon">💼</div>
              <div>
                <div className="contact-link-label">LinkedIn</div>
                <div className="contact-link-value">{CONTACT.linkedin.replace("https://", "")}</div>
              </div>
            </a>
            <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="contact-link-item glass">
              <div className="contact-link-icon">💬</div>
              <div>
                <div className="contact-link-label">WhatsApp</div>
                <div className="contact-link-value">+{process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/^91/, "91 ")}</div>
              </div>
            </a>
          </div>
        </div>

        <form className="contact-form-area" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Your Name</label>
            <input
              className="form-input"
              type="text"
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              className="form-input"
              type="email"
              placeholder="john@company.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea
              className="form-textarea"
              placeholder="Tell me about your project..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
            />
          </div>
          <button type="submit" className="form-submit" disabled={status === "loading"}>
            {status === "loading" ? "Sending..." : status === "success" ? "✓ Sent!" : status === "error" ? "Failed. Try again?" : (
              <>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                Send Message
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}  