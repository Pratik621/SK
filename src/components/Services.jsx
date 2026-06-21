import { Settings, Cpu, Box, Layers, Scissors, RotateCcw, Wrench, Zap, Drill, Ruler, FlameKindling, ChevronRight } from 'lucide-react';
import './Services.css';

const services = [
  { icon: <RotateCcw size={30} />, title: 'CNC Turning', desc: 'High-precision CNC turning for cylindrical shafts, pins, and custom-engineered components with tight tolerances.', color: '#1a56db' },
  { icon: <Cpu size={30} />, title: 'CNC Profiling', desc: 'Advanced CNC profiling for complex 2D and 3D contour machining on industrial components.', color: '#0891b2' },
  { icon: <Box size={30} />, title: 'VMC Machining', desc: 'Vertical Machining Center operations for precision milling, drilling, tapping, and boring.', color: '#7c3aed' },
  { icon: <Settings size={30} />, title: 'TROB Machining', desc: 'Specialized TROB machining for high-accuracy internal and external profiling requirements.', color: '#dc2626' },
  { icon: <ChevronRight size={30} />, title: 'Broaching', desc: 'Precision broaching operations for keyways, slots, and internal/external surface profiles.', color: '#d97706' },
  { icon: <Ruler size={30} />, title: 'CMM', desc: 'Coordinate Measuring Machine inspection ensuring dimensional accuracy and quality validation.', color: '#059669' },
  { icon: <Wrench size={30} />, title: 'Designing', desc: 'Engineering design services for custom components, fixtures, dies, and industrial tooling.', color: '#0284c7' },
  { icon: <Scissors size={30} />, title: 'CNC Cutting', desc: 'Precision CNC cutting for accurate material removal and profiling with minimal waste.', color: '#7c3aed' },
  { icon: <Layers size={30} />, title: 'Bandsaw Cutting', desc: 'Efficient bandsaw cutting for raw material preparation across a variety of metals.', color: '#be185d' },
  { icon: <Box size={30} />, title: 'VMC 4th & 5th Axis', desc: 'Advanced multi-axis VMC machining for complex geometries and multi-face operations in one setup.', color: '#1a56db' },
  { icon: <Settings size={30} />, title: 'Conventional Machining', desc: 'Traditional lathe and milling operations for repair, maintenance, and standard component manufacturing.', color: '#92400e' },
  { icon: <Zap size={30} />, title: 'Electroplating', desc: 'Surface electroplating for corrosion protection, wear resistance, and improved component finish.', color: '#0891b2' },
  { icon: <Drill size={30} />, title: 'Grinding', desc: 'Precision grinding for excellent dimensional accuracy, tight tolerances, and superior surface finish.', color: '#dc2626' },
  { icon: <FlameKindling size={30} />, title: 'Hardening', desc: 'Heat treatment and hardening services to enhance component strength, hardness, and durability.', color: '#d97706' },
];

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Our Services</span>
          <h2 className="section-title">14 Comprehensive <span style={{ color: '#1a56db' }}>Machining Services</span></h2>
          <p className="section-subtitle">
            From CNC turning and VMC machining to electroplating, hardening, and CMM inspection —
            complete precision manufacturing under one roof.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s) => (
            <div key={s.title} className="service-card card">
              <div className="service-icon" style={{ background: `${s.color}18`, color: s.color }}>
                {s.icon}
              </div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              <div className="service-line" style={{ background: s.color }}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
