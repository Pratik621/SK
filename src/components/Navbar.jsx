import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Cog, Phone } from 'lucide-react';
import './Navbar.css';
import logo from "../../public/vite.png"

const links = [
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

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // close drawer on route change
  useEffect(() => { setOpen(false); }, [location]);

  // lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const transparent = isHome && !scrolled;

  return (
    <>
      <nav className={`navbar ${!transparent ? 'scrolled' : ''}`}>
        <div className="container navbar-inner">
          <NavLink to="/" className="navbar-brand">
            <div className="brand-icon">
            <img src={logo} alt="" />
            </div>
            <div>
              <span className="brand-name nav-name" >S K ENGINEERING</span>
              <span className="brand-sub">Precision Manufacturing</span>
            </div>
          </NavLink>

          <ul className="nav-links-desktop">
            {links.map(l => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === '/'}
                  className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
            <li>
              <a href="tel:+917499165461" className="btn-primary nav-call">
                <Phone size={15} /> Call Now
              </a>
            </li>
          </ul>

          <button className="hamburger" onClick={() => setOpen(true)} aria-label="Open menu">
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div className={`drawer-overlay ${open ? 'visible' : ''}`} onClick={() => setOpen(false)} />

      {/* Mobile Drawer — slides in from LEFT */}
      <div className={`drawer ${open ? 'open' : ''}`}>
        <div className="drawer-header">
          <div className="drawer-brand">
            <div className="brand-icon">
            <img src={logo} alt="" />
            </div>
            <div>
             <span
  className="brand-name nav-name"
  style={{ color: "#fff" }}
>
  S K ENGINEERING
</span>
              <span className="brand-sub" style={{ color: "#fff" }}>Precision Manufacturing</span>
            </div>
          </div>
          <button className="drawer-close" onClick={() => setOpen(false)} aria-label="Close menu">
            <X size={22} />
          </button>
        </div>

        <nav className="drawer-nav">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) => `drawer-link ${isActive ? 'active' : ''}`}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="drawer-footer">
          <a href="tel:+917499165461" className="btn-primary drawer-call">
            <Phone size={16} /> Call Now
          </a>
          <a
            href="https://wa.me/917499165461?text=Hello, I need a quote from S K Engineering"
            target="_blank"
            rel="noopener noreferrer"
            className="drawer-wa"
          >
            💬 WhatsApp Us
          </a>
        </div>
      </div>
    </>
  );
}
