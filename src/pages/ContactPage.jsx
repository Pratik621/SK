import Contact from '../components/Contact';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact SK ENGINEERING — CNC Machining Company, Bhosari Pune',
  url: 'https://www.skengineering.in/contact',
  description: 'Contact SK ENGINEERING for CNC machining, VMC machining, shaft manufacturing, grinding, and precision engineering services in Bhosari, Pune.',
  mainEntity: {
    '@type': 'LocalBusiness',
    name: 'SK ENGINEERING',
    telephone: '+91-74991-65461',
    email: 'skengg.129@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Landge Nagar, Indrayani Nagar, Bhosari',
      addressLocality: 'Pune',
      addressRegion: 'Maharashtra',
      postalCode: '411039',
      addressCountry: 'IN',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '19:00',
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact SK ENGINEERING — Get a CNC Machining Quote | Bhosari, Pune"
        description="Contact SK ENGINEERING for precision CNC machining, VMC machining, shaft manufacturing, grinding, and custom engineering services in Bhosari MIDC, Pune. Call, WhatsApp, or fill our inquiry form for a free quote. Located in Bhosari, Pimpri Chinchwad area."
        canonical="/contact"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Contact Us', path: '/contact' }]}
        schema={contactSchema}
      />
      <PageHero
        title="Contact Us"
        subtitle="Get in touch with SK ENGINEERING for quotes, inquiries, and project discussions."
      />
      <Contact />
    </>
  );
}
