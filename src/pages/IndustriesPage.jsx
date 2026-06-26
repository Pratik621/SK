import WhyUs from '../components/WhyUs';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';

const industriesSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Industries Served by SK ENGINEERING — Bhosari, Pune',
  url: 'https://www.skengineering.in/industries',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Automotive Industry' },
    { '@type': 'ListItem', position: 2, name: 'Industrial Machinery' },
    { '@type': 'ListItem', position: 3, name: 'Heavy Engineering' },
    { '@type': 'ListItem', position: 4, name: 'Automation Industry' },
    { '@type': 'ListItem', position: 5, name: 'Construction Equipment' },
    { '@type': 'ListItem', position: 6, name: 'Textile Machinery' },
    { '@type': 'ListItem', position: 7, name: 'Agricultural Equipment' },
    { '@type': 'ListItem', position: 8, name: 'Machine Tool Industry' },
  ],
};

export default function IndustriesPage() {
  return (
    <>
      <SEO
        title="Industries We Serve — Automotive, Heavy Engineering, Automation & More | Pune"
        description="SK ENGINEERING provides precision CNC machining and VMC machining services to automotive, industrial machinery, heavy engineering, automation, construction equipment, textile, agricultural, and machine tool industries across Pune, Pimpri Chinchwad, MIDC Bhosari, and India."
        canonical="/industries"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Industries', path: '/industries' }]}
        schema={industriesSchema}
      />
      <PageHero
        title="Industries We Serve"
        subtitle="Precision engineering solutions powering diverse industrial sectors across India."
      />
      <WhyUs />
    </>
  );
}
