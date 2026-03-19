import Hero from '../components/Hero';
import TrustSignals from '../components/TrustSignals';
import FeaturedProducts from '../components/FeaturedProducts';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <TrustSignals />
      <FeaturedProducts />
      <WhyChooseUs />
      <Testimonials />
    </motion.div>
  );
}
