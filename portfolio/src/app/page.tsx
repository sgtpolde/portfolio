'use client'
import type { NextPage } from 'next';
//import ServicesSection from './_components/(pages)/Services';
//import ContactSection from './_components/(pages)/Contact/Contact';
//import Hero from './_components/(pages)/Hero';
import UnderConstruction from './_components/(utils)/UnderConstruction';
import useSEO from './_hooks/useSEO';

const Home: NextPage = () => {
  useSEO({
    title: 'Full-Stack Developer Portfolio',
    description: 'Portfolio of Full-Stack Developer Žak Bršek',
    canonical: 'https://www.skurjen.si',
    ogTitle: 'Full-Stack Developer Portfolio',
    ogDescription: 'Portfolio of Full-Stack Developer Žak Bršek',
    //ogImage: 'https://example.com/og-image.jpg',
    ogUrl: 'https://www.skurjen.si',
  });
  return (
    <div className='min-h-screen bg-base-300 text-base-content'>
      {/*
      <Hero />
      <ServicesSection />
      <ContactSection />
      */}
      <UnderConstruction />
    </div>
  );
};

export default Home;
