import React, { useEffect, useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  className?: string;
  showLabel?: boolean;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ 
  className = '', 
  showLabel = true 
}) => {
  const { language, setLanguage } = useLanguage();
  const [isChanging, setIsChanging] = useState(false);

  // Toggle between languages
  const toggleLanguage = () => {
    setIsChanging(true);
    const newLanguage = language === 'en' ? 'ja' : 'en';
    
    // Small delay for animation
    setTimeout(() => {
      setLanguage(newLanguage);
      setIsChanging(false);
    }, 300);
  };

  // Get language display text
  const getLanguageText = () => {
    return language === 'en' ? 'English' : '日本語';
  };

  // Get flag emoji
  const getFlag = () => {
    return language === 'en' ? '🇬🇧' : '🇯🇵';
  };

  return (
    <button
      onClick={toggleLanguage}
      className={`flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 ${className}`}
      aria-label={`Switch to ${language === 'en' ? 'Japanese' : 'English'}`}
    >
      <Globe className="w-4 h-4" />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={language}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 10, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="flex items-center"
        >
          <span className="mr-1">{getFlag()}</span>
          {showLabel && (
            <span className="text-sm font-medium">{getLanguageText()}</span>
          )}
        </motion.div>
      </AnimatePresence>
    </button>
  );
};

export default LanguageSwitcher;
