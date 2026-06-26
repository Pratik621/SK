import Products from '../components/Products';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Precision Engineered Products — SK ENGINEERING, Bhosari Pune',
  description: 'Precision machined products including shafts, flanges, pneumatic cylinders, hydraulic fixtures, dies, gauges and special purpose machines.',
  url: 'https://www.skengineering.in/products',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Spot Welding Electrodes' },
    { '@type': 'ListItem', position: 2, name: 'LB and GM Flanges' },
    { '@type': 'ListItem', position: 3, name: 'Shafts' },
    { '@type': 'ListItem', position: 4, name: 'Non-Standard Pins and Bolts' },
    { '@type': 'ListItem', position: 5, name: 'Pneumatic Cylinders' },
    { '@type': 'ListItem', position: 6, name: 'Gunmetal Manifolds' },
    { '@type': 'ListItem', position: 7, name: 'Hydraulic Machining Fixtures' },
    { '@type': 'ListItem', position: 8, name: 'Mechanical Machining Fixtures' },
    { '@type': 'ListItem', position: 9, name: 'CNC Turning Fixtures' },
    { '@type': 'ListItem', position: 10, name: 'Panel Checking Fixtures' },
    { '@type': 'ListItem', position: 11, name: 'Leakage Test Fixtures' },
    { '@type': 'ListItem', position: 12, name: 'Assembly Work Stations' },
    { '@type': 'ListItem', position: 13, name: 'Relation Gauge' },
    { '@type': 'ListItem', position: 14, name: 'Special Purpose Machines' },
    { '@type': 'ListItem', position: 15, name: 'GDC and PDC Dies' },
  ],
};

export default function ProductsPage() {
  return (
    <>
      <SEO
        title="Precision Machined Products — Shafts, Flanges, Fixtures, Dies & More | Pune"
        description="SK ENGINEERING manufactures precision products including shafts, LB/GM flanges, spot welding electrodes, pneumatic cylinders, gunmetal manifolds, hydraulic & mechanical fixtures, GDC/PDC dies, and special purpose machines in Bhosari, Pune."
        canonical="/products"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Our Products', path: '/products' }]}
        schema={productSchema}
      />
      <PageHero
        title="Our Products"
        subtitle="Precision engineered products — from shafts and flanges to fixtures, dies, and special purpose machines."
      />
      <Products />
    </>
  );
}
