import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, Clock } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="contact">
      <div className="container contact-container">
        <div className="contact-grid">
          <div className="info-card">
            <div className="contact-card-header">
              <span>Get In Touch</span>
              <h2>Contact S K ENGINEERING</h2>
              <p>Reach out for quotes, inquiries, or project details and our team will respond promptly.</p>
            </div>

            <div className="contact-details">
              <div className="info-item">
                <div className="info-icon"><MapPin size={22} /></div>
                <div>
                  <strong>Location</strong>
                  <p>Landge Nagar, Indrayani Nagar,<br />Bhosari, Pune 411039</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><Phone size={22} /></div>
                <div>
                  <strong>Phone / WhatsApp</strong>
                  <p><a href="tel:+917499165461">+91 74991 65461</a></p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><Mail size={22} /></div>
                <div>
                  <strong>Email</strong>
                  <p><a href="mailto:skengg.129@gmail.com">skengg.129@gmail.com</a></p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><Clock size={22} /></div>
                <div>
                  <strong>Hours</strong>
                  <p>Wed–Tue: 9:00 AM – 7:00 PM<br />Thursday: Appointment Only</p>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/917499165461?text=Hello,+I+need+a+quote+from+SK+Engineering"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >
              <MessageCircle size={20} /> Chat on WhatsApp
            </a>

            <div className="map-container">
              <iframe
                title="S K Engineering Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.0!2d73.8567!3d18.6298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9e760000001%3A0x1!2sBhosari%2C+Pune%2C+Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="240"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="contact-form-card">
            <h3>Send an Inquiry</h3>
            <form
              className="contact-form"
              action="https://api.web3forms.com/submit"
              method="POST"
            >
              <input
                type="hidden"
                name="access_key"
                value="f7945211-36b3-4080-afeb-06021c461704"
              />
              <input
                type="hidden"
                name="redirect"
                value="https://web3forms.com/success"
              />
              <input
                type="hidden"
                name="subject"
                value="S K ENGINEERING Contact Request"
              />

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 99999 99999"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="service">Service Required</label>
                <select
                  id="service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                >
                  <option value="">Select a Service</option>
                  <option value="CNC Machining">CNC Machining</option>
                  <option value="VMC Machining">VMC Machining</option>
                  <option value="Shaft Manufacturing">Shaft Manufacturing</option>
                  <option value="Grinding Services">Grinding Services</option>
                  <option value="Drilling Operations">Drilling Operations</option>
                  <option value="Milling Operations">Milling Operations</option>
                  <option value="Custom Engineering Components">Custom Engineering Components</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message / Requirements *</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Describe your project or requirements"
                  rows={5}
                  required
                />
              </div>

              <button type="submit" className="btn-primary submit-btn">
                <Send size={18} /> Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

