import Header from '@/components/Header';
import CategoryMenu from '@/components/CategoryMenu';
import Footer from '@/components/Footer';

import MainLayout from '@/components/layout/MainLayout';
import TrendingCategoriesMain from '@/components/TrendingCategoriesMain';
import RecommendedProducts from '@/components/RecommendedProducts';
import TrendingCategories from '@/components/TrendingCategories';

export default function Home() {
  return (
    <>
      <MainLayout>
        <TrendingCategoriesMain />
        <RecommendedProducts />
        <TrendingCategories />
      </MainLayout>
    </>
  );
}
