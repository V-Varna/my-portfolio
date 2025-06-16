import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaUser, FaEnvelope, FaCommentDots, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

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
          <div style={{ position: 'relative' }}>
            <FaUser className="input-icon" />
            <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
          </div>
          <div style={{ position: 'relative' }}>
            <FaEnvelope className="input-icon" />
            <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
          </div>
          <div style={{ position: 'relative' }}>
            <FaCommentDots className="input-icon" />
            <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} required />
          </div>
          <button type="submit"><FaPaperPlane style={{ marginRight: '0.5rem' }} />Send Message</button>
          {error && <p className="error">{error}</p>}
        </form>
      )}
    </section>
  );
};

export default Contact;
