import { CheckCircle, MapPin, Award, Users, Calendar, Globe } from 'lucide-react';
import './About.css';

const highlights = [
  'Established in 2016 — 25+ years of combined machining expertise',
  'High precision machining with on-time dispatch',
  'Standard & customized machined parts delivered worldwide',
  'Quality standard raw materials for every job',
  'Capability to work with high-end metals and alloys',
  'Trusted by clients across India and globally',
];

const cards = [
  { icon: <Award size={28} />, title: 'Excellence', desc: 'Industry-leading precision in every component we manufacture' },
  { icon: <Users size={28} />, title: '25+ Years', desc: 'Vast combined experience in high-end metal machining operations' },
  { icon: <Globe size={28} />, title: 'Worldwide', desc: 'Delivering standard and customized parts all over the world' },
  { icon: <Calendar size={28} />, title: 'Est. 2016', desc: 'A key market player since 2016 in high precision machining' },
];

const strengths = [
  { emoji: '🎯', title: 'Ultimate Precision', desc: 'Micron-level accuracy on every machined component' },
  { emoji: '✅', title: 'Quality Check', desc: 'Rigorous inspection at every stage of the manufacturing process' },
  { emoji: '🚚', title: 'On Time Dispatch', desc: 'Reliable delivery schedules — never compromising on deadlines' },
  { emoji: '⚡', title: 'High Accuracy Machining', desc: 'Advanced CNC & VMC capability for the tightest tolerances' },
];

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">

        {/* Spirit of Expertise Banner */}
        <div className="spirit-banner">
          <div className="spirit-left">
            <span className="spirit-label">Our Philosophy</span>
            <h2 className="spirit-title">Spirit of <span>Expertise</span></h2>
            <p className="spirit-desc">
              S K ENGINEERING, established in 2016, has been a key player in the market when it
              comes to high precision machining, on-time dispatch and unmatched quality. We have
              been delivering standard as well as customized machined parts all over the world
              with quality standard raw materials.
            </p>
            <p className="spirit-desc">
              With vast experience over <strong>25 years</strong>, we have achieved the capability
              to work with high-end metals and provide excellent products to our most valuable clients.
            </p>
          </div>
          <div className="spirit-stats">
            <div className="spirit-stat"><strong>2016</strong><span>Established</span></div>
            <div className="spirit-stat"><strong>25+</strong><span>Years Experience</span></div>
            <div className="spirit-stat"><strong>500+</strong><span>Projects Done</span></div>
            <div className="spirit-stat"><strong>Global</strong><span>Deliveries</span></div>
          </div>
        </div>

        <div className="about-grid">
          <div className="about-image">
            <div className="image-placeholder">
              <div className="image-inner">
                <div className="gear-anim">⚙️</div>
                <h3>SK ENGINEERING</h3>
                <p>Bhosari, Pune — Est. 2016</p>
                <div className="image-stats">
                  <div><strong>25+</strong><span>Years Exp.</span></div>
                  <div><strong>500+</strong><span>Projects</span></div>
                  <div><strong>🌍</strong><span>Global</span></div>
                </div>
              </div>
            </div>
            <div className="about-cards">
              {cards.map(c => (
                <div key={c.title} className="about-mini-card card">
                  <div className="mini-icon">{c.icon}</div>
                  <div>
                    <strong>{c.title}</strong>
                    <p>{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-text">
            <span className="section-tag">About Us</span>
            <h2 className="section-title">About <span style={{ color: '#1a56db' }}>SK ENGINEERING</span></h2>
            <p className="about-para">
              SK ENGINEERING is a leading precision engineering and manufacturing company located in
              Bhosari, Pune, one of Maharashtra's prominent industrial hubs. We specialize in delivering
              high-quality engineering components and machining services to industries requiring precision,
              reliability, and superior workmanship.
            </p>
            <p className="about-para">
              With extensive combined experience of over 25 years in manufacturing and machining operations,
              we provide customized solutions tailored to client requirements. Our commitment to quality,
              advanced machinery, and skilled workforce enables us to produce components that meet strict
              industry standards.
            </p>
            <p className="about-para">
              We focus on innovation, precision manufacturing, customer satisfaction, and timely delivery,
              making us a trusted partner for businesses across various industrial sectors — both in India
              and internationally.
            </p>

            <ul className="about-list">
              {highlights.map(h => (
                <li key={h}>
                  <CheckCircle size={18} className="check-icon" />
                  {h}
                </li>
              ))}
            </ul>

            <div className="about-location">
              <MapPin size={16} />
              Landge Nagar, Indrayani Nagar, Bhosari, Pune, Maharashtra, India
            </div>
          </div>
        </div>

        {/* Our Foundation / Strengths */}
        <div className="strengths-section">
          <div className="strengths-header">
            <span className="section-tag">Our Foundation</span>
            <h2 className="section-title">Our <span style={{ color: '#1a56db' }}>Strengths</span></h2>
          </div>
          <div className="strengths-grid">
            {strengths.map(s => (
              <div key={s.title} className="strength-card card">
                <div className="strength-emoji">{s.emoji}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
