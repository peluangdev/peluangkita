import MainLayout from '@/components/layout/MainLayout';
import ProductDetailOverview from '@/components/ProductDetailOverview';
import RecommendedProducts from '@/components/RecommendedProducts';

export default function Products() {
  return (
    <MainLayout>
      <ProductDetailOverview />
      <RecommendedProducts />
    </MainLayout>
  );
}
