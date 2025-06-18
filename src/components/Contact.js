import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaCommentDots, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Instead of submitting, open Gmail compose with pre-filled details
  const handleGmailSend = e => {
    e.preventDefault();
    const subject = encodeURIComponent('Contact from Portfolio');
    const body = encodeURIComponent(`Hi Varna,%0D%0A%0D%0AName: ${form.name}%0D%0AEmail: ${form.email}%0D%0AMessage: ${form.message}`);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&to=v2005varna@gmail.com&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank');
    setSent(true);
  };

  return (
    <section className="contact-section">
      <h2>Let's Connect</h2>
      <p>If you have any questions or inquiries, feel free to reach out!</p>
      {sent ? (
        <p>Thank you for reaching out! I'll get back to you soon.</p>
      ) : (
        <form onSubmit={handleGmailSend} className="contact-form">
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
        </form>
      )}
    </section>
  );
};

export default Contact;
