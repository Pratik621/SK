import Services from '../components/Services';
import Products from '../components/Products';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'CNC & VMC Machining Services — SK ENGINEERING, Bhosari Pune',
  description: '14 comprehensive precision machining services offered by SK ENGINEERING in Bhosari, Pune.',
  url: 'https://www.skengineering.in/services',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'CNC Turning', url: 'https://www.skengineering.in/services#cnc-turning' },
    { '@type': 'ListItem', position: 2, name: 'CNC Profiling', url: 'https://www.skengineering.in/services#cnc-profiling' },
    { '@type': 'ListItem', position: 3, name: 'VMC Machining', url: 'https://www.skengineering.in/services#vmc-machining' },
    { '@type': 'ListItem', position: 4, name: 'TROB Machining', url: 'https://www.skengineering.in/services#trob-machining' },
    { '@type': 'ListItem', position: 5, name: 'Broaching', url: 'https://www.skengineering.in/services#broaching' },
    { '@type': 'ListItem', position: 6, name: 'CMM Inspection', url: 'https://www.skengineering.in/services#cmm' },
    { '@type': 'ListItem', position: 7, name: 'Designing', url: 'https://www.skengineering.in/services#designing' },
    { '@type': 'ListItem', position: 8, name: 'CNC Cutting', url: 'https://www.skengineering.in/services#cnc-cutting' },
    { '@type': 'ListItem', position: 9, name: 'Bandsaw Cutting', url: 'https://www.skengineering.in/services#bandsaw-cutting' },
    { '@type': 'ListItem', position: 10, name: 'VMC 4th & 5th Axis', url: 'https://www.skengineering.in/services#vmc-5axis' },
    { '@type': 'ListItem', position: 11, name: 'Conventional Machining', url: 'https://www.skengineering.in/services#conventional-machining' },
    { '@type': 'ListItem', position: 12, name: 'Electroplating', url: 'https://www.skengineering.in/services#electroplating' },
    { '@type': 'ListItem', position: 13, name: 'Grinding', url: 'https://www.skengineering.in/services#grinding' },
    { '@type': 'ListItem', position: 14, name: 'Hardening', url: 'https://www.skengineering.in/services#hardening' },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="CNC Turning, VMC Machining, Grinding, Broaching & 14 Services — Bhosari Pune"
        description="SK ENGINEERING offers 14 precision machining services in Bhosari, Pune — CNC turning, CNC profiling, VMC machining, TROB machining, broaching, CMM inspection, electroplating, grinding, hardening & more. Best CNC machining company in Pimpri Chinchwad MIDC."
        canonical="/services"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Our Services', path: '/services' }]}
        schema={serviceSchema}
      />
      <PageHero
        title="Our Services"
        subtitle="14 comprehensive precision machining services — CNC turning, VMC machining, broaching, CMM, electroplating, hardening and more."
      />
      <Services />
      <Products />
    </>
  );
}
