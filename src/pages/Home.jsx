import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Products from '../components/Products';
import Gallery from '../components/Gallery';
import WhyUs from '../components/WhyUs';
import Process from '../components/Process';
import Quality from '../components/Quality';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Products />
      <Gallery />
      <WhyUs />
      <Process />
      <Quality />
      <Contact />
    </>
  );
}
