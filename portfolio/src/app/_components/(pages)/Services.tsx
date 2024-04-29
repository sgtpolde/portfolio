'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';

const servicesVariants = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

// Define services data or import from a constants file
const services = [
  {
    icon: '',
    title: 'Web Development',
    description: 'High-quality websites and web applications.',
  },
  {
    icon: '',
    title: 'API Integration',
    description: 'Seamless integration with third-party services.',
  },
  {
    icon: '',
    title: 'UI/UX Design',
    description: 'Engaging and user-friendly design interfaces.',
  },
];

const ServicesSection = () => (
  <section className='text-center my-20'>
    <h2 className='text-4xl font-bold mb-10'>Services</h2>
    <div className='flex justify-center items-center gap-10'>
      {services.map((service, index) => (
        <motion.div
          key={index}
          variants={servicesVariants}
          initial='offscreen'
          whileInView='onscreen'
          viewport={{ once: true, amount: 0.8 }}
          className='max-w-sm p-5 shadow-lg rounded-lg bg-base-200'
        >
          <Image
            src={service.icon}
            alt={service.title}
            width={50}
            height={50}
          />
          <h3 className='text-2xl mt-5 mb-2'>{service.title}</h3>
          <p>{service.description}</p>
        </motion.div>
      ))}
    </div>
  </section>
);
export default ServicesSection;
