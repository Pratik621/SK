import { Link } from 'react-router-dom';
import { Cog, Phone, Mail, MapPin, MessageCircle, ArrowRight } from 'lucide-react';
import './Footer.css';
import logo from "../../public/vite.png"


const services = ['CNC Turning', 'CNC Profiling', 'VMC Machining', 'TROB Machining', 'Broaching', 'CMM', 'Grinding', 'Hardening'];
const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Products', to: '/products' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Industries', to: '/industries' },
  { label: 'Process', to: '/process' },
  { label: 'Quality', to: '/quality' },
  { label: 'Contact', to: '/contact' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container footer-grid">

          <div className="footer-brand">
            <div className="footer-logo">
              <div className="brand-icon">
                         <img src={logo} alt="" />
                         </div>
              <div>
                <span className="footer-name">SK ENGINEERING</span>
                <span className="footer-tagline">Precision Manufacturing — Est. 2016</span>
              </div>
            </div>
            <p className="footer-about">
              A leading precision engineering and manufacturing company in Bhosari, Pune.
              Delivering high-quality CNC machined components with precision and excellence
              to clients worldwide since 2016.
            </p>
            <div className="footer-contact-list">
              <a href="tel:+919999999999"><Phone size={15} /> +91 74991 65461</a>
              <a href="mailto:skengg.129@gmail.com"><Mail size={15} /> skengg.129@gmail.com</a>
              <span><MapPin size={15} /> Bhosari, Pune, Maharashtra</span>
            </div>
            <a
              href="https://wa.me/917499165461?text=Hello, I need a quote from S K Engineering"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-wa"
            >
              <MessageCircle size={18} /> WhatsApp Us
            </a>
          </div>

          <div className="footer-col">
            <h4>Our Services</h4>
            <ul>
              {services.map(s => (
                <li key={s}>
                  <Link to="/services"><ArrowRight size={14} /> {s}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map(l => (
                <li key={l.to}>
                  <Link to={l.to}><ArrowRight size={14} /> {l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Get a Quote</h4>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', marginBottom: '16px', lineHeight: 1.6 }}>
              Need precision engineering components? Contact us today for a competitive quote.
            </p>
            <Link to="/contact" className="footer-quote-btn">
              Request a Quote <ArrowRight size={16} />
            </Link>
            <div className="footer-hours">
              <h5>Working Hours</h5>
              <p>Wed - Tue 24*7</p>
              <p>Thursday: By Appointment</p>
            </div>
          </div>

        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {new Date().getFullYear()} S K ENGINEERING. All Rights Reserved. | Bhosari, Pune, Maharashtra, India</p>
          <p>Precision Engineering &amp; CNC Manufacturing — Est. 2016</p>
        </div>
      </div>
    </footer>
  );
}
