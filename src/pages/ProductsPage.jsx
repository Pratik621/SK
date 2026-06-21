import Products from '../components/Products';
import PageHero from '../components/PageHero';

export default function ProductsPage() {
  return (
    <>
      <PageHero title="Our Products" subtitle="Precision engineered products — from shafts and flanges to fixtures, dies, and special purpose machines." />
      <Products />
    </>
  );
}
