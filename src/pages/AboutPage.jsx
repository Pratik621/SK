import About from '../components/About';
import Quality from '../components/Quality';
import PageHero from '../components/PageHero';

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="S K ENGINEERING — established in 2016, with 25+ years of combined expertise in high precision machining and worldwide delivery."
      />
      <About />
      <Quality />
    </>
  );
}
