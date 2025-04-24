import React from 'react';
import { motion } from 'framer-motion';
import LanguageSwitcher from './LanguageSwitcher';

const FloatingLanguageSwitcher: React.FC = () => {
  return (
    <motion.div
      className="fixed bottom-24 right-4 z-50 shadow-lg rounded-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <LanguageSwitcher 
        className="bg-primary-800 text-white hover:bg-primary-700" 
        showLabel={false}
      />
    </motion.div>
  );
};

export default FloatingLanguageSwitcher;
