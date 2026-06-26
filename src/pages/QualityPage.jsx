import Quality from '../components/Quality';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';

const qualitySchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Quality Assurance — SK ENGINEERING, Bhosari Pune',
  url: 'https://www.skengineering.in/quality',
  description: 'SK ENGINEERING maintains strict quality standards with CMM inspection, dimensional accuracy checks, surface quality verification, and zero-defect policy for all CNC and VMC machined components.',
  about: {
    '@type': 'Thing',
    name: 'Quality Assurance in CNC Precision Machining',
    description: 'Rigorous quality inspection including CMM measurement, surface inspection, process control, final validation, and industry standard compliance.',
  },
};

export default function QualityPage() {
  return (
    <>
      <SEO
        title="Quality Assurance — CMM Inspection, Zero Defect Policy | SK ENGINEERING Pune"
        description="SK ENGINEERING's quality assurance system ensures dimensional accuracy, superior surface finish, and consistent product quality through CMM inspection, rigorous process control, and a zero-defect policy. Trusted CNC machining quality in Bhosari MIDC, Pune."
        canonical="/quality"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Quality Assurance', path: '/quality' }]}
        schema={qualitySchema}
      />
      <PageHero
        title="Quality Assurance"
        subtitle="Zero-defect manufacturing philosophy — CMM inspection, dimensional accuracy, and strict process control at every stage."
      />
      <Quality />
    </>
  );
}
