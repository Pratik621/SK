import Hero from '../components/Hero';
import SEO from '../components/SEO';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What CNC machining services does SK ENGINEERING offer in Pune?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SK ENGINEERING offers CNC turning, CNC profiling, VMC machining, TROB machining, broaching, CMM inspection, CNC cutting, bandsaw cutting, VMC 4th & 5th axis machining, conventional machining, electroplating, grinding, and hardening services in Bhosari, Pune.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is SK ENGINEERING located?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SK ENGINEERING is located at Landge Nagar, Indrayani Nagar, Bhosari, Pune - 411039, Maharashtra, India. We are conveniently situated near Bhosari MIDC and Pimpri Chinchwad industrial area.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does SK ENGINEERING deliver machined components internationally?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. SK ENGINEERING delivers standard as well as customized machined parts all over the world with quality standard raw materials, serving clients in India and globally since 2016.',
      },
    },
    {
      '@type': 'Question',
      name: 'What industries does SK ENGINEERING serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SK ENGINEERING serves automotive, industrial machinery, heavy engineering, automation, construction equipment, textile machinery, agricultural equipment, and machine tool industries.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long has SK ENGINEERING been in business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SK ENGINEERING was established in 2016 and brings over 25 years of combined machining expertise, making it a trusted precision engineering partner in Bhosari, Pune.',
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <SEO
        title="Precision CNC & VMC Machining, Shaft Manufacturing — Bhosari, Pune"
        description="SK ENGINEERING — leading precision CNC machining, VMC machining, shaft manufacturing, grinding, broaching & CMM services in Bhosari MIDC, Pune. Established 2016. 25+ years expertise. Worldwide delivery. Get a free quote today."
        canonical="/"
        ogType="website"
        schema={faqSchema}
      />
      <Hero />
    </>
  );
}
