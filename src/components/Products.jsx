import './Products.css';

const productCategories = [
  {
    category: 'Precision Components',
    color: '#1a56db',
    emoji: '🔩',
    items: [
      { name: 'Spot Welding Electrodes', desc: 'High conductivity electrodes for resistance spot welding applications.' },
      { name: 'LB and GM Flanges', desc: 'Precision machined LB and GM flanges to standard and custom specifications.' },
      { name: 'Shafts', desc: 'High-precision shafts for industrial machinery, automotive, and heavy engineering.' },
      { name: 'Non-Standard Pins and Bolts', desc: 'Custom pins and bolts manufactured to client drawings and specifications.' },
    ],
  },
  {
    category: 'Pneumatic & Hydraulic',
    color: '#7c3aed',
    emoji: '💨',
    items: [
      { name: 'Pneumatic Cylinders', desc: 'Precision bored and machined pneumatic cylinder bodies and assemblies.' },
      { name: 'Hydraulic Machining Fixtures', desc: 'Hydraulic clamping fixtures for repeatable, high-force workholding.' },
      { name: 'Pneumatic Clamping Fixtures', desc: 'Welding and pneumatic clamping fixtures for production line applications.' },
      { name: 'Gunmetal Manifolds', desc: 'Precision machined gunmetal manifolds for fluid and pneumatic systems.' },
    ],
  },
  {
    category: 'Fixtures & Tooling',
    color: '#059669',
    emoji: '🔧',
    items: [
      { name: 'Mechanical Machining Fixtures', desc: 'Robust mechanical fixtures for accurate and consistent machining setups.' },
      { name: 'CNC Turning Fixtures', desc: 'Custom CNC turning fixtures for complex component clamping requirements.' },
      { name: 'Panel Checking Fixtures', desc: 'Go/no-go panel and profile checking fixtures for quality inspection.' },
      { name: 'Leakage Test Fixtures', desc: 'Fixtures for pressure and leakage testing of machined components.' },
    ],
  },
  {
    category: 'Special Purpose & Dies',
    color: '#dc2626',
    emoji: '⚙️',
    items: [
      { name: 'Assembly Work Stations', desc: 'Ergonomic assembly stations designed for efficient production workflows.' },
      { name: 'Relation Gauge', desc: 'Precision relation gauges for dimensional verification and quality control.' },
      { name: 'Special Purpose Machines', desc: 'Custom-built special purpose machines for dedicated manufacturing tasks.' },
      { name: 'GDC and PDC Dies', desc: 'Gravity die casting and pressure die casting dies with high surface finish.' },
    ],
  },
];

export default function Products() {
  return (
    <section id="products" className="products">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Our Products</span>
          <h2 className="section-title">Products We <span style={{ color: '#1a56db' }}>Manufacture</span></h2>
          <p className="section-subtitle">
            A wide range of precision engineered products — from spot welding electrodes and shafts
            to hydraulic fixtures, dies, and special purpose machines.
          </p>
        </div>

        <div className="products-grid">
          {productCategories.map(cat => (
            <div key={cat.category} className="product-category card">
              <div className="category-header" style={{ borderColor: cat.color }}>
                <span className="category-emoji">{cat.emoji}</span>
                <h3 style={{ color: cat.color }}>{cat.category}</h3>
              </div>
              <ul className="product-list">
                {cat.items.map(item => (
                  <li key={item.name} className="product-item">
                    <div className="product-dot" style={{ background: cat.color }}></div>
                    <div>
                      <strong>{item.name}</strong>
                      <p>{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
