import { Shield, CheckCircle, Target, BarChart2, Microscope, Award } from 'lucide-react';
import './Quality.css';

const pillars = [
  { icon: <Target size={28} />, title: 'Dimensional Accuracy', desc: 'Every component is measured to micron-level precision using calibrated instruments.' },
  { icon: <Microscope size={28} />, title: 'Surface Inspection', desc: 'Visual and tactile surface checks ensuring finish meets client specification.' },
  { icon: <BarChart2 size={28} />, title: 'Process Control', desc: 'Continuous monitoring at every production stage to prevent defects early.' },
  { icon: <CheckCircle size={28} />, title: 'Final Validation', desc: 'Full dimensional and functional validation before any component ships.' },
  { icon: <Award size={28} />, title: 'Standard Compliance', desc: 'Products manufactured in compliance with industry and client standards.' },
  { icon: <Shield size={28} />, title: 'Zero Defect Policy', desc: 'Our zero-defect commitment drives rigorous quality culture across the shop floor.' },
];

export default function Quality() {
  return (
    <section id="quality" className="quality">
      <div className="quality-hero">
        <div className="container">
          <div className="quality-hero-inner">
            <div className="quality-badge"><Shield size={20} /> Quality Assurance</div>
            <h2>Quality Is Our <span>Highest Priority</span></h2>
            <p>
              At SK ENGINEERING, every component undergoes rigorous inspection and quality checks
              throughout the manufacturing process. We maintain strict standards to ensure
              dimensional accuracy, performance reliability, and customer satisfaction.
            </p>
            <p>
              Our quality-focused approach helps us deliver engineering components that consistently
              meet client expectations and industrial requirements.
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="quality-pillars">
          {pillars.map(p => (
            <div key={p.title} className="pillar-card card">
              <div className="pillar-icon">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
