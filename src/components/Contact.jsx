import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, Clock } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Contact <span style={{ color: '#1a56db' }}>SK ENGINEERING</span></h2>
          <p className="section-subtitle">
            Ready to start your project? Reach out for a quote or to discuss your engineering requirements.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-card card">
              <div className="info-item">
                <div className="info-icon"><MapPin size={22} /></div>
                <div>
                  <strong>Our Location</strong>
                  <p>Landge Nagar, Indrayani Nagar,<br />Bhosari, Pune - 411039<br />Maharashtra, India</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><Phone size={22} /></div>
                <div>
                  <strong>Phone / WhatsApp</strong>
                  <p><a href="tel:+919999999999">+91 99999 99999</a></p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><Mail size={22} /></div>
                <div>
                  <strong>Email</strong>
                  <p><a href="mailto:info@skengineering.in">info@skengineering.in</a></p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><Clock size={22} /></div>
                <div>
                  <strong>Working Hours</strong>
                  <p>Mon – Sat: 9:00 AM – 7:00 PM<br />Sunday: By Appointment</p>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/919999999999?text=Hello, I need a quote from SK Engineering"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >
              <MessageCircle size={22} />
              Chat on WhatsApp
            </a>

            <div className="map-container">
              <iframe
                title="SK Engineering Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.0!2d73.8567!3d18.6298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9e760000001%3A0x1!2sBhosari%2C+Pune%2C+Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="220"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="contact-form-wrap">
            <div className="contact-form-card card">
              <h3>Send an Inquiry</h3>
              {sent && (
                <div className="success-msg">
                  ✅ Thank you! We'll get back to you within 24 hours.
                </div>
              )}
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your Name" required />
                  </div>
                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" required />
                  </div>
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" />
                </div>
                <div className="form-group">
                  <label>Service Required</label>
                  <select name="service" value={form.service} onChange={handleChange}>
                    <option value="">Select a Service</option>
                    <option>CNC Machining</option>
                    <option>VMC Machining</option>
                    <option>Precision Shaft Manufacturing</option>
                    <option>Grinding Services</option>
                    <option>Drilling Operations</option>
                    <option>Milling Operations</option>
                    <option>Turning Operations</option>
                    <option>Custom Engineering Components</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Message / Requirements</label>
                  <textarea name="message" value={form.message} onChange={handleChange} placeholder="Describe your requirements..." rows={5}></textarea>
                </div>
                <button type="submit" className="btn-primary submit-btn">
                  <Send size={18} /> Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/919999999999?text=Hello, I need a quote from SK Engineering"
        target="_blank"
        rel="noopener noreferrer"
        className="wa-float"
        aria-label="WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </section>
  );
}
