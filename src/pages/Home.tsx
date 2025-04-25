import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductSection from '../components/ProductSection';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col" dir="rtl">
      <Navbar />
      <Hero />
      <ProductSection />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default Home;
