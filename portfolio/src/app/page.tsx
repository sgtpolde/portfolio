
import type { NextPage } from 'next';
import Head from 'next/head';
//import ServicesSection from './_components/(pages)/Services';
//import ContactSection from './_components/(pages)/Contact/Contact';
//import Hero from './_components/(pages)/Hero';
import UnderConstruction from './_components/(utils)/UnderConstruction';


const Home: NextPage = () => {
  return (
    <div className='min-h-screen bg-base-300 text-base-content'>
      <Head>
        <title>Full-Stack Developer Portfolio</title>
        <meta
          name='description'
          content='Portfolio of Full-Stack Developer Žak Bršek'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
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
