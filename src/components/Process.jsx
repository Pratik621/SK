import { ClipboardList, Pencil, Package, Cpu, Layers, Search, TestTube, Truck } from 'lucide-react';
import './Process.css';

const steps = [
  { icon: <ClipboardList size={24} />, title: 'Requirement Analysis', desc: 'Understanding client needs and project specifications in detail.' },
  { icon: <Pencil size={24} />, title: 'Design & Planning', desc: 'Engineering blueprints and manufacturing plans for optimal results.' },
  { icon: <Package size={24} />, title: 'Material Selection', desc: 'Choosing the right grade materials to meet performance requirements.' },
  { icon: <Cpu size={24} />, title: 'CNC / VMC Machining', desc: 'Precision machining using advanced CNC and VMC equipment.' },
  { icon: <Layers size={24} />, title: 'Grinding & Finishing', desc: 'Surface finishing to achieve tight tolerances and superior surface quality.' },
  { icon: <Search size={24} />, title: 'Quality Inspection', desc: 'Rigorous dimensional and visual inspection at every production stage.' },
  { icon: <TestTube size={24} />, title: 'Final Testing', desc: 'Comprehensive testing to verify performance and functional accuracy.' },
  { icon: <Truck size={24} />, title: 'Delivery', desc: 'Timely, secure delivery ensuring components arrive in perfect condition.' },
];

export default function Process() {
  return (
    <section id="process" className="process">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">How We Work</span>
          <h2 className="section-title">Our Manufacturing <span style={{ color: '#1a56db' }}>Process</span></h2>
          <p className="section-subtitle">
            A systematic, quality-focused process from requirement to delivery ensuring
            every component meets the highest standards.
          </p>
        </div>

        <div className="process-timeline">
          {steps.map((step, i) => (
            <div key={step.title} className={`process-step ${i % 2 === 0 ? 'left' : 'right'}`}>
              <div className="step-content card">
                <div className="step-icon">{step.icon}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
              <div className="step-node">
                <span className="step-number">{i + 1}</span>
              </div>
            </div>
          ))}
          <div className="timeline-line"></div>
        </div>
      </div>
    </section>
  );
}
