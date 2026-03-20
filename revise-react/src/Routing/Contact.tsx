const Contact = () => {
  return (
    <div className="page">
      <h2>Contact Page</h2>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button className="btn" type="submit">
          Send
        </button>
      </form>
      <p>Email: info@example.com | Phone: +123 456 789</p>
    </div>
  );
};

export default Contact;
