import About from '../components/About';
import Quality from '../components/Quality';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About SK ENGINEERING — Precision CNC Machining Company, Bhosari Pune',
  url: 'https://www.skengineering.in/about',
  description:
    'SK ENGINEERING was established in 2016 in Bhosari, Pune. With 25+ years of combined machining expertise, we deliver precision CNC & VMC machined components to clients worldwide.',
  mainEntity: {
    '@type': 'Organization',
    name: 'SK ENGINEERING',
    foundingDate: '2016',
    foundingLocation: 'Bhosari, Pune, Maharashtra, India',
    numberOfEmployees: { '@type': 'QuantitativeValue', value: '20' },
    description:
      'Precision engineering and CNC manufacturing company specializing in CNC turning, VMC machining, shaft manufacturing, grinding, broaching, CMM, electroplating and hardening.',
  },
};

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About SK ENGINEERING — 25+ Years Precision CNC Machining Expertise, Bhosari Pune"
        description="Learn about SK ENGINEERING — established in 2016 in Bhosari, Pune. 25+ years of combined CNC & VMC machining expertise. Delivering precision engineered components to clients across India and worldwide."
        canonical="/about"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'About Us', path: '/about' }]}
        schema={aboutSchema}
      />
      <PageHero
        title="About Us"
        subtitle="SK ENGINEERING — established in 2016, with 25+ years of combined expertise in high precision machining and worldwide delivery."
      />
      <About />
      <Quality />
    </>
  );
}
