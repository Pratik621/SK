import './Gallery.css';

const machines = [
  {
    name: 'VMC Machine',
    desc: 'Vertical Machining Center for multi-axis precision milling, drilling, and boring operations.',
    emoji: '🏭',
    color: '#1a56db',
    specs: ['4th & 5th Axis Capability', 'High-Speed Spindle', 'CNC Controlled'],
  },
  {
    name: 'Broaching Machine',
    desc: 'Industrial broaching machine for accurate keyways, slots, and internal profile machining.',
    emoji: '⚙️',
    color: '#7c3aed',
    specs: ['Internal Broaching', 'External Broaching', 'High Force Capacity'],
  },
  {
    name: 'Heat Treatment Oven',
    desc: 'High-temperature heat treatment oven for hardening, annealing, and stress relieving components.',
    emoji: '🔥',
    color: '#dc2626',
    specs: ['Controlled Temperature', 'Batch Processing', 'Uniform Heating'],
  },
  {
    name: 'Electroplating Unit',
    desc: 'Electroplating facility for corrosion protection, surface finishing, and wear-resistant coatings.',
    emoji: '⚡',
    color: '#d97706',
    specs: ['Multiple Plating Types', 'Corrosion Protection', 'Surface Finishing'],
  },
  {
    name: 'CMM — Coordinate Measuring Machine',
    desc: 'High-accuracy CMM for dimensional inspection, quality validation, and tolerance verification.',
    emoji: '📐',
    color: '#059669',
    specs: ['Micron Accuracy', '3D Measurement', 'Report Generation'],
  },
  {
    name: 'TROB Machining',
    desc: 'Specialized TROB machining center for precision internal and external profiling operations.',
    emoji: '🔩',
    color: '#0891b2',
    specs: ['Internal Profiling', 'External Profiling', 'High Precision'],
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <div className="gallery-hero-bar">
        <div className="container">
          <span className="section-tag" style={{ background: 'rgba(255,255,255,0.15)', color: 'white', border: '1px solid rgba(255,255,255,0.25)' }}>
            Our Infrastructure
          </span>
          <h2>Gallery of <span>Our Machinery</span></h2>
          <p>State-of-the-art machines powering precision manufacturing at S K ENGINEERING</p>
        </div>
      </div>

      <div className="container gallery-grid-wrap">
        <div className="gallery-grid">
          {machines.map((m) => (
            <div key={m.name} className="machine-tile card">
              <div className="machine-visual" style={{ background: `linear-gradient(135deg, ${m.color}22, ${m.color}08)`, borderTop: `3px solid ${m.color}` }}>
                <span className="machine-emoji">{m.emoji}</span>
                <div className="machine-overlay">
                  <ul className="machine-specs">
                    {m.specs.map(s => <li key={s}>✓ {s}</li>)}
                  </ul>
                </div>
              </div>
              <div className="machine-info">
                <h3 style={{ color: m.color }}>{m.name}</h3>
                <p>{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
