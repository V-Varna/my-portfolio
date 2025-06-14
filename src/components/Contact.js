import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setError('');
    emailjs.send('service_xxx', 'template_xxx', form, 'user_xxx')
      .then(() => setSent(true))
      .catch(() => setError('Failed to send message. Please try again.'));
  };

  return (
    <section className="contact-section">
      <h2>Let's Connect</h2>
      {sent ? (
        <p>Thank you for reaching out! I'll get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
          <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} required />
          <button type="submit">Send Message</button>
          {error && <p className="error">{error}</p>}
        </form>
      )}
    </section>
  );
};

export default Contact;
