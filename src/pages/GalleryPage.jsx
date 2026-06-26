import Gallery from '../components/Gallery';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';

const gallerySchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Machinery Gallery — SK ENGINEERING, Bhosari Pune',
  description: 'State-of-the-art VMC machines, broaching machines, heat treatment ovens, electroplating units, CMM and TROB machining centers at SK ENGINEERING.',
  url: 'https://www.skengineering.in/gallery',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'VMC Machine — Vertical Machining Center' },
    { '@type': 'ListItem', position: 2, name: 'Broaching Machine' },
    { '@type': 'ListItem', position: 3, name: 'Heat Treatment Oven' },
    { '@type': 'ListItem', position: 4, name: 'Electroplating Unit' },
    { '@type': 'ListItem', position: 5, name: 'CMM — Coordinate Measuring Machine' },
    { '@type': 'ListItem', position: 6, name: 'TROB Machining Center' },
  ],
};

export default function GalleryPage() {
  return (
    <>
      <SEO
        title="Machinery Gallery — VMC, CMM, Broaching, Heat Treatment, Electroplating | Pune"
        description="Explore SK ENGINEERING's state-of-the-art manufacturing facility in Bhosari, Pune — VMC machines with 4th & 5th axis, broaching machines, CMM inspection, heat treatment ovens, electroplating units, and TROB machining centers."
        canonical="/gallery"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Machinery Gallery', path: '/gallery' }]}
        schema={gallerySchema}
      />
      <PageHero
        title="Machinery Gallery"
        subtitle="State-of-the-art CNC, VMC, CMM, broaching, heat treatment, and electroplating machines at SK ENGINEERING."
      />
      <Gallery />
    </>
  );
}
