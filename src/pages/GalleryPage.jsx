import Gallery from '../components/Gallery';
import PageHero from '../components/PageHero';

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Machinery Gallery"
        subtitle="State-of-the-art CNC, VMC, CMM, broaching, heat treatment, and electroplating machines at SK ENGINEERING."
      />
      <Gallery />
    </>
  );
}
