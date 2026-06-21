import { CheckCircle } from 'lucide-react';
import './WhyUs.css';

const advantages = [
  'High Precision Manufacturing',
  'Modern CNC & VMC Machinery',
  'Experienced Engineering Team',
  'Strict Quality Control',
  'Timely Project Delivery',
  'Competitive Pricing',
  'Customized Manufacturing Solutions',
  'Reliable Customer Support',
  'Consistent Product Quality',
  'Industry Standard Compliance',
];

const industries = [
  { emoji: '🚗', name: 'Automotive Industry' },
  { emoji: '⚙️', name: 'Industrial Machinery' },
  { emoji: '🏭', name: 'Manufacturing Sector' },
  { emoji: '🔩', name: 'Heavy Engineering' },
  { emoji: '🤖', name: 'Automation Industry' },
  { emoji: '🏗️', name: 'Construction Equipment' },
  { emoji: '🧵', name: 'Textile Machinery' },
  { emoji: '🌾', name: 'Agricultural Equipment' },
  { emoji: '🔧', name: 'Machine Tool Industry' },
  { emoji: '📦', name: 'Custom Industrial Applications' },
];

export default function WhyUs() {
  return (
    <section id="industries" className="whyus">
      <div className="container">
        <div className="whyus-grid">
          <div className="why-left">
            <span className="section-tag">Why Choose Us</span>
            <h2 className="section-title">Why Choose <span style={{ color: '#1a56db' }}>S K ENGINEERING?</span></h2>
            <p style={{ color: '#6b7280', marginBottom: '2rem', lineHeight: 1.7 }}>
              We combine advanced technology, skilled expertise, and unwavering commitment
              to quality to deliver engineering solutions that exceed expectations.
            </p>
            <ul className="advantages-list">
              {advantages.map(a => (
                <li key={a}>
                  <CheckCircle size={18} />
                  {a}
                </li>
              ))}
            </ul>
          </div>

          <div className="why-right">
            <span className="section-tag">Industries We Serve</span>
            <h2 className="section-title">Serving <span style={{ color: '#1a56db' }}>Diverse Industries</span></h2>
            <p style={{ color: '#6b7280', marginBottom: '2rem', lineHeight: 1.7 }}>
              Our precision engineering solutions power businesses across multiple industry verticals.
            </p>
            <div className="industries-grid">
              {industries.map(ind => (
                <div key={ind.name} className="industry-card card">
                  <span className="industry-emoji">{ind.emoji}</span>
                  <span className="industry-name">{ind.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
