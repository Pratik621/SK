import Services from '../components/Services';
import Products from '../components/Products';
import PageHero from '../components/PageHero';

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="14 comprehensive precision machining services — CNC turning, VMC machining, broaching, CMM, electroplating, hardening and more."
      />
      <Services />
      <Products />
    </>
  );
}
