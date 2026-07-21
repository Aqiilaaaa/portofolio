function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>

      <p>
        Terima kasih telah mengunjungi portfolio saya.
      </p>

      <div className="contact-container">

        <a
          href="mailto:aqiilaviani20@gmail.com"
          className="contact-card"
        >
          <h3>Email</h3>
          <span>aqiilaviani20@gmail.com</span>
        </a>

        <a
          href="https://www.linkedin.com/in/aqiila-aviani-599086287/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <h3>LinkedIn</h3>
          <span>Aqiila Aviani</span>
        </a>

      </div>
    </section>
  );
}

export default Contact;