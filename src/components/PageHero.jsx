import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import './PageHero.css';

export default function PageHero({ title, subtitle }) {
  return (
    <header className="page-hero" role="banner" aria-label={`${title} page header`}>
      <div className="page-hero-bg" aria-hidden="true"></div>
      <div className="container page-hero-inner">
        <nav className="breadcrumb" aria-label="Breadcrumb navigation">
          <ol itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link to="/" itemProp="item">
                <span itemProp="name">Home</span>
              </Link>
              <meta itemProp="position" content="1" />
            </li>
            <li aria-hidden="true"><ChevronRight size={14} /></li>
            <li
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
              aria-current="page"
            >
              <span itemProp="name">{title}</span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </nav>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </header>
  );
}
