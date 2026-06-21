import { ArrowRight, MessageCircle, Zap, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Hero.css';
import vmc from '../assets/vmc.mp4';
import shaft from "../assets/shaft.png";

const stats = [
  { value: '500+', label: 'Projects Delivered' },
  { value: '15+', label: 'Years Experience' },
  { value: '100%', label: 'Quality Assured' },
  { value: '50+', label: 'Industry Clients' },
];

export default function Hero() {
  return (
    <>
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="hero-grid"></div>
        <div className="hero-orb orb1"></div>
        <div className="hero-orb orb2"></div>
        <div className="floating-badge badge1"><Zap size={14} /> CNC Machining</div>
        <div className="floating-badge badge2"><Shield size={14} /> ISO Quality</div>
        <div className="floating-badge badge3"><Clock size={14} /> On-Time Delivery</div>
      </div>

      <div className="container hero-content">
        <div className="hero-text">
          <div className="hero-tag">
            <span className="tag-dot"></span>
            Pune's Premier Precision Engineering Company
          </div>
          <h1 className="hero-title">
            Precision Engineering<br />
            <span className="gradient-text">Solutions for Modern</span><br />
            Industries
          </h1>
          <p className="hero-desc">
            SK ENGINEERING is a trusted manufacturing and precision engineering company
            specializing in CNC machining, VMC machining, shaft manufacturing, grinding,
            drilling, and custom engineering solutions. We deliver superior quality
            components with precision, reliability, and commitment to excellence.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn-primary hero-btn">
              Get a Quote <ArrowRight size={18} />
            </Link>
            <a
              href="https://wa.me/919999999999?text=Hello, I need a quote from SK Engineering"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <MessageCircle size={18} /> WhatsApp Us
            </a>
          </div>
          <div className="hero-stats">
            {stats.map(s => (
              <div key={s.label} className="stat-item">
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          {/* <div className="machine-card main-card"> */}
            {/* <div className="machine-header"> */}
              {/* <div className="machine-dots">
                <span></span><span></span><span></span>
              </div> */}
              {/* <span>CNC Control Panel</span>
            </div> */}
            {/* <div className="machine-body">
              <div className="cnc-display">
                <div className="cnc-screen">
                  <div className="cnc-line"></div>
                  <div className="cnc-line short"></div>
                  <div className="cnc-line medium"></div>
                  <div className="cnc-circle"></div>
                </div> */}
                {/* <div className="cnc-info">
                  <div className="cnc-stat"><span>RPM</span><strong>3500</strong></div>
                  <div className="cnc-stat"><span>Feed</span><strong>0.25mm</strong></div>
                  <div className="cnc-stat"><span>Depth</span><strong>1.5mm</strong></div>
                  <div className="cnc-stat active"><span>Status</span><strong>ACTIVE</strong></div>
                </div>
              </div> */}
            {/* </div> */}
          {/* </div> */}
          <div className="machine-card side-card top-side">
            <div className="side-icon">⚙️</div>
            <div>
              <strong>VMC Machining</strong>
              <span>High Precision</span>
            </div>
          </div>
          <div className="machine-card side-card bottom-side">
            <div className="side-icon">🔩</div>
            <div>
              <strong>Shaft Manufacturing</strong>
              <span>±0.005mm Tolerance</span>
            </div>
          </div>
        </div>
       
      </div>
      

    </section>
    <section className="vmc-section">
  <div className="vmc-container">

    <div className="vmc-video">
      <video src={vmc} autoPlay loop muted playsInline />
    </div>

    <div className="vmc-content">
      <span className="vmc-tag">Our Expertise</span>

      <h2>VMC Machining Services</h2>

      <p>
        At <strong>SK ENGINEERING</strong>, we provide high-precision VMC
        machining services for industrial components, machine parts, shafts,
        dies, fixtures, and customized engineering products.
      </p>

      <p>
        VMC, also known as Vertical Machining Center, is used for accurate
        milling, drilling, tapping, boring, and surface finishing operations.
        With advanced machining capability, we manufacture components with
        excellent dimensional accuracy, smooth surface finish, and consistent
        quality.
      </p>

      <ul>
        <li>High precision milling and drilling</li>
        <li>Custom component manufacturing</li>
        <li>Excellent surface finishing</li>
        <li>Suitable for industrial and automotive parts</li>
        <li>Accurate machining with tight tolerances</li>
      </ul>

      {/* <button className="vmc-btn">Contact for VMC Work</button> */}
    </div>

  </div>
</section>
<section className="cnc-section">
  <div className="cnc-container">

    {/* Left Side - Content */}
    <div className="cnc-content">
      <span className="cnc-tag">Precision Manufacturing</span>

      <h2>CNC Machining Services</h2>

      <p>
        At <strong>SK ENGINEERING</strong>, we specialize in high-precision CNC
        machining for shafts, industrial components, machine parts, and custom
        engineering solutions.
      </p>

      <p>
        Our advanced CNC machines deliver exceptional accuracy, consistency,
        and quality, making us a trusted partner for manufacturing industries,
        automotive sectors, and heavy engineering projects.
      </p>

      <ul>
        <li>Precision Shaft Manufacturing</li>
        <li>CNC Turning & Milling</li>
        <li>Custom Component Production</li>
        <li>Industrial Machine Parts</li>
        <li>Excellent Surface Finish</li>
        <li>Quality Inspection & Testing</li>
      </ul>

      <button className="cnc-btn">Get a Quote</button>
    </div>

    {/* Right Side - Image */}
    <div className="cnc-image">
      <img src={shaft} alt="CNC Machining" />
    </div>

  </div>
</section>
</>
  );
}
