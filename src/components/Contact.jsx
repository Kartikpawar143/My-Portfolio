import { useState } from "react";

function Contact({ active }) {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  const isFormValid =
    formData.fullname.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.message.trim() !== "";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <article className={active ? "contact active" : "contact"}>
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      {/* Google Map */}
      <section className="mapbox">
        <figure>
          <iframe
            title="Pune Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.0471115259!2d73.78056554565079!3d18.52459859955184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1740822430809!5m2!1sen!2sin"
            width="400"
            height="300"
            loading="lazy"
          ></iframe>
        </figure>
      </section>

      {/* Contact Form */}
      <section className="contact-form">
        <h3 className="h3 form-title">Get in Touch</h3>
        <p className="contact-lead">
          Tell me about your project or role. I typically respond within 24-48 hours.
        </p>

        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="form"
        >
          <input
            type="hidden"
            name="access_key"
            value="c85c1b78-62ca-4178-b1bd-88d05b4afdc6"
          />

          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder="Full name"
              required
              value={formData.fullname}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email address"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button
            className="form-btn"
            type="submit"
            disabled={!isFormValid}
          >
            <span className="btn-text">Send Message</span>
          </button>
        </form>
      </section>
    </article>
  );
}

export default Contact;
