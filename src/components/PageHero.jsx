import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import './PageHero.css';

export default function PageHero({ title, subtitle }) {
  return (
    <div className="page-hero">
      <div className="page-hero-bg"></div>
      <div className="container page-hero-inner">
        <nav className="breadcrumb">
          <Link to="/">Home</Link>
          <ChevronRight size={14} />
          <span>{title}</span>
        </nav>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </div>
  );
}
