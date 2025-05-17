import React, { useEffect } from 'react';
import { Hero } from '../components/home/Hero';
import { FeaturedCategories } from '../components/home/FeaturedCategories';
import { FeaturedProducts } from '../components/home/FeaturedProducts';

const Home = () => {
  // Update document title
  useEffect(() => {
    document.title = 'LUXE | Contemporary Clothing';
  }, []);

  return (
    <main>
      <Hero />
      <FeaturedCategories />
      <FeaturedProducts />
    </main>
  );
};

export default Home;
