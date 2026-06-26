import Process from '../components/Process';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';

const processSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How SK ENGINEERING Manufactures Precision Components — 8-Step Process',
  description: 'A systematic 8-step manufacturing process at SK ENGINEERING ensuring every CNC and VMC machined component meets the highest quality standards.',
  url: 'https://www.skengineering.in/process',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Requirement Analysis', text: 'Understanding client needs and project specifications in complete detail.' },
    { '@type': 'HowToStep', position: 2, name: 'Design & Planning', text: 'Engineering blueprints and manufacturing plans for optimal precision results.' },
    { '@type': 'HowToStep', position: 3, name: 'Material Selection', text: 'Choosing the right grade materials to meet performance and durability requirements.' },
    { '@type': 'HowToStep', position: 4, name: 'CNC / VMC Machining', text: 'Precision CNC turning, VMC milling, and advanced machining using state-of-the-art equipment.' },
    { '@type': 'HowToStep', position: 5, name: 'Grinding & Finishing', text: 'Surface and cylindrical grinding to achieve tight tolerances and superior surface finish.' },
    { '@type': 'HowToStep', position: 6, name: 'Quality Inspection', text: 'CMM-based dimensional and visual inspection at every production stage.' },
    { '@type': 'HowToStep', position: 7, name: 'Final Testing', text: 'Comprehensive functional and dimensional testing to verify performance accuracy.' },
    { '@type': 'HowToStep', position: 8, name: 'Delivery', text: 'Timely, secure delivery ensuring components arrive in perfect condition worldwide.' },
  ],
};

export default function ProcessPage() {
  return (
    <>
      <SEO
        title="Precision Manufacturing Process — 8-Step CNC & VMC Machining Workflow | Pune"
        description="Explore SK ENGINEERING's systematic 8-step manufacturing process — from requirement analysis and design through CNC/VMC machining, grinding, CMM quality inspection, and on-time delivery. Serving Bhosari MIDC, Pimpri Chinchwad, and clients worldwide."
        canonical="/process"
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Manufacturing Process', path: '/process' }]}
        schema={processSchema}
      />
      <PageHero
        title="Manufacturing Process"
        subtitle="A systematic 8-step quality-focused process from requirement analysis to timely delivery."
      />
      <Process />
    </>
  );
}
