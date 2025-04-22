import { motion } from 'framer-motion';
import HeroSection from '../components/home/HeroSection';
import InstagramFeed from '../components/home/InstagramFeed';
import FeatureSection from '../components/home/FeatureSection';
import VehicleGallery from '../components/home/VehicleGallery';
import CallToAction from '../components/home/CallToAction';
import CategoryGallery from '../components/ui/CategoryGallery';
import { categories } from '../data/categories';
import '../styles/instagram-embed.css';

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <HeroSection />
      <InstagramFeed />
      <FeatureSection />
      <CategoryGallery categories={categories} />
      <VehicleGallery />
      <CallToAction />
    </motion.div>
  );
};

export default HomePage;