import { useState } from 'react';
import { useCursorInteractive } from '../hooks/useCursor';
import { useSectionReveal } from '../hooks/useSectionReveal';

export default function Contact() {
  const sectionRef = useSectionReveal();
  const cursor = useCursorInteractive();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      setNameError(!name);
      setEmailError(!email);
      return;
    }
    setNameError(false);
    setEmailError(false);
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
    }, 1200);
  };

  return (
    <section id="contact" ref={sectionRef} aria-labelledby="contact-heading">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-num">04 —</span>
          <h2 id="contact-heading" className="section-title">
            Get In <em>Touch</em>
          </h2>
          <div className="section-line" />
        </div>
        <div className="contact-grid">
          <div className="contact-info reveal">
            <h3>Let&apos;s Build Something Great Together</h3>
            <p>Have a project in mind, a question, or just want to say hi? My inbox is always open. I&apos;ll get back to you as soon as possible.</p>
            <div className="social-links">
              <a href="https://linkedin.com" className="social-link" {...cursor} aria-label="LinkedIn">
                <div className="social-icon">in</div>
                <div className="social-info">
                  <span className="social-name">LinkedIn</span>
                  <span className="social-handle">https://www.linkedin.com/in/shobhit-yadav-736d/</span>
                </div>
                <span className="social-arrow" aria-hidden="true">
                  →
                </span>
              </a>
              <a href="https://github.com" className="social-link" {...cursor} aria-label="GitHub">
                <div className="social-icon">gh</div>
                <div className="social-info">
                  <span className="social-name">GitHub</span>
                  <span className="social-handle">https://github.com/shobhit-736d</span>
                </div>
                <span className="social-arrow" aria-hidden="true">
                  →
                </span>
              </a>
              <a href="https://twitter.com" className="social-link" {...cursor} aria-label="Twitter">
                <div className="social-icon">tw</div>
                <div className="social-info">
                  <span className="social-name">Twitter / X</span>
                  <span className="social-handle">@shobhityadav_dev</span>
                </div>
                <span className="social-arrow" aria-hidden="true">
                  →
                </span>
              </a>
              <a href="mailto:shobhit@example.com" className="social-link" {...cursor} aria-label="Email shobhit@example.com">
                <div className="social-icon">@</div>
                <div className="social-info">
                  <span className="social-name">Email</span>
                  <span className="social-handle">shobhit736d@gmail.com</span>
                </div>
                <span className="social-arrow" aria-hidden="true">
                  →
                </span>
              </a>
            </div>
          </div>
          <div className="reveal reveal-delay-2">
            <form className="contact-form" id="contactForm" onSubmit={onSubmit} noValidate aria-label="Contact form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fname">Your Name</label>
                  <input
                    id="fname"
                    type="text"
                    placeholder="Shobhit Yadav"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (e.target.value) setNameError(false);
                    }}
                    aria-invalid={nameError}
                    style={{ borderColor: nameError ? '#e24b4a' : undefined }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="femail">Email Address</label>
                  <input
                    id="femail"
                    type="email"
                    placeholder="shobhit@example.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (e.target.value) setEmailError(false);
                    }}
                    aria-invalid={emailError}
                    style={{ borderColor: emailError ? '#e24b4a' : undefined }}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="fsubject">Subject</label>
                <input id="fsubject" type="text" placeholder="Project Inquiry" value={subject} onChange={(e) => setSubject(e.target.value)} />
              </div>
              <div className="form-group">
                <label htmlFor="fmessage">Message</label>
                <textarea id="fmessage" rows={5} placeholder="Tell me about your project..." value={message} onChange={(e) => setMessage(e.target.value)} />
              </div>
              {!success && (
                <button type="submit" className="submit-btn" id="submitBtn" disabled={submitting} {...cursor} aria-busy={submitting}>
                  {submitting ? 'Sending...' : 'Send Message →'}
                </button>
              )}
              <div className={`form-success${success ? ' is-visible' : ''}`} id="formSuccess" role="status">
                ✓ Message sent! I&apos;ll get back to you soon.
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
