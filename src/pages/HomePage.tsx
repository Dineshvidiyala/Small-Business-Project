import React, { useEffect } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Examples from '../components/home/Examples';
import Pricing from '../components/home/Pricing';
import Testimonials from '../components/home/Testimonials';
import Contact from '../components/home/Contact';

const HomePage = () => {
  useEffect(() => {
    document.title = 'BizLaunch Sites - Professional Websites for Small Businesses';
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Examples />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;