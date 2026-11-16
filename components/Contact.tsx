"use client";
import { useForm, ValidationError } from "@formspree/react";
export function Contact() {
  const [state, handleSubmit] = useForm("xreapvkv");
  return (
    <section
      id="contact"
      className="section contact-section"
      aria-labelledby="contact-title"
    >
      <div className="wrap contact-grid">
        <div>
          <p className="eyebrow">05 / Get in touch</p>
          <h2 id="contact-title">
            What are you
            <br />
            <em>working on?</em>
          </h2>
          <p>
            I’m open to freelance projects, engineering opportunities, and
            thoughtful collaborations. Tell me a little about what you need.
          </p>
          <a className="contact-email" href="mailto:motialemu9@gmail.com">
            motialemu9@gmail.com <span aria-hidden="true">↗</span>
          </a>
          <p className="contact-location">Adama, Ethiopia · UTC+3</p>
          <a className="text-link" href="https://github.com/tote10">
            Find me on GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div>
          {state.succeeded ? (
            <div className="form-success" role="status">
              <h3>Thanks for getting in touch.</h3>
              <p>Your message has been sent. I’ll get back to you by email.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Your name</label>
              <input id="name" name="name" autoComplete="name" required />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <label htmlFor="message">A little about your project</label>
              <textarea id="message" name="message" rows={4} required />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <div aria-live="polite">
                <ValidationError errors={state.errors} />
              </div>
              <button
                className="button"
                type="submit"
                disabled={state.submitting}
              >
                {state.submitting ? "Sending…" : "Send message"}
                <span aria-hidden="true">↗</span>
              </button>
              <p className="form-note">
                Messages are sent via Formspree. You can also email me directly.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
