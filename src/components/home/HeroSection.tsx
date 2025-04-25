import { motion } from 'framer-motion';
import { Sparkles, DollarSign } from 'lucide-react';
import Lottie from 'react-lottie-player';
import { useLanguage } from '../../contexts/LanguageContext';
import { useState, useEffect } from 'react';

// Import Lottie animations
import carAnimation from '../../assets/animations/sports-car-animation.json';
import excavatorAnimation from '../../assets/animations/excavator-animation.json';
import bulldozerAnimation from '../../assets/animations/bulldozer-animation.json';
import dumpTruckAnimation from '../../assets/animations/dump-truck-animation.json';
import equipmentAnimation from '../../assets/animations/equipment-animation.json';
import forkliftAnimation from '../../assets/animations/forklift-animation.json';

const HeroSection = () => {
  const { t } = useLanguage();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    // Initial check
    checkMobile();

    // Add event listener
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Combined animations
  const vehicleAnimations = [
    {
      animation: carAnimation,
      delay: 0.2
    },
    {
      animation: excavatorAnimation,
      delay: 0.3
    },
    {
      animation: bulldozerAnimation,
      delay: 0.4
    },
    {
      animation: dumpTruckAnimation,
      delay: 0.5
    },
    {
      animation: equipmentAnimation,
      delay: 0.6
    },
    {
      animation: forkliftAnimation,
      delay: 0.7
    }
  ];

  // Create simplified particles
  const createParticles = () => {
    const particles = [];
    for (let i = 0; i < 8; i++) {
      particles.push(
        <div
          key={i}
          className={`particle particle-${i % 5 + 1}`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 20}%`,
            animationDelay: `${Math.random() * 10}s`
          }}
        />
      );
    }
    return particles;
  };

  return (
    <section className="relative h-[80vh] sm:h-[70vh] min-h-[600px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/Tuned Blue Mitsubishi Lancer Evolution.jpeg"
          alt="Heavy machinery"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-800/95 to-primary-700/90" />
        {/* Additional overlay for better contrast */}
        <div className="absolute inset-0 bg-black/30" />
        <div className="particles-container">
          {createParticles()}
        </div>
      </div>

      <div className="container-custom relative z-10 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-white backdrop-blur-md bg-primary-900/40 p-4 sm:p-6 rounded-xl border border-white/15 shadow-2xl"
        >
          {/* Company Name */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-3 sm:mb-4 uppercase tracking-wide text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-white to-gray-200 text-transparent bg-clip-text drop-shadow-sm">BIG </span>
            <span className="text-accent-500 relative ml-1">TRADING
              <motion.span
                className="absolute -top-1 -right-1 hidden sm:block"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.6 }}
              >
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-accent-400" />
              </motion.span>
            </span>
          </motion.h1>

          {/* Vehicle Animations - All in one row */}
          <div className="mb-6 sm:mb-8">
            {/* Animation section title */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-center mb-3 sm:mb-4"
            >
              <div className="inline-block bg-accent-500/15 backdrop-blur-md px-3 py-1 rounded-full border border-accent-500/25">
                <span className="text-xs sm:text-sm text-white font-medium">
                  {t('business.ourFleet')}
                </span>
              </div>
            </motion.div>

            {/* All Animations in a single row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-5 px-1 sm:px-2 max-w-3xl mx-auto">
              {vehicleAnimations.map((vehicle, index) => (
                <motion.div
                  key={`vehicle-${index}`}
                  className="relative group"
                  initial={{ opacity: 0, scale: 0, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    delay: vehicle.delay,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ scale: 1.12, y: -5, transition: { duration: 0.3 } }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div
                    className={`bg-white/50 dark:bg-white/40 p-2 sm:p-3 md:p-4 rounded-md border border-accent-500/30 hover:border-accent-500/70 transition-all duration-300 shadow-md hover:shadow-lg backdrop-blur-md animate-pulse-subtle ${index % 2 === 0 ? 'animate-float-slow' : 'animate-float-slower'} w-full flex justify-center`}
                  >
                    <div className="relative">
                      {/* Subtle glow effect behind animation */}
                      <div className="absolute inset-0 bg-gradient-to-b from-accent-500/15 to-transparent rounded-lg filter blur-md"></div>

                      <Lottie
                        loop
                        animationData={vehicle.animation}
                        play
                        style={{
                          width: isMobile ? 70 : 110,
                          height: isMobile ? 70 : 110,
                          position: 'relative',
                          zIndex: 2
                        }}
                        className="mx-auto"
                      />

                      {/* Subtle reflection */}
                      <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-white/30 to-transparent rounded-b-lg opacity-60 z-1"></div>

                      {/* Shadow effect */}
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-black/15 rounded-full blur-md"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Business Focus */}
          <motion.div
            className="mb-4 sm:mb-5 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <h2 className="text-xl sm:text-2xl font-bold mb-2 bg-gradient-to-r from-white to-accent-400 text-transparent bg-clip-text">
              {t('business.heroTagline')}
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-200 max-w-xl mx-auto px-1">
              {t('business.heroSubtitle')}
            </p>
            <div className="flex flex-wrap justify-center gap-1 sm:gap-2 mt-2 sm:mt-3 bg-primary-800/30 py-1 sm:py-2 px-2 sm:px-4 rounded-full inline-block mx-auto">
              <span className="text-accent-400 text-xs sm:text-sm font-medium">{t('about.value1Title')}</span>
              <span className="text-white text-xs sm:text-sm">•</span>
              <span className="text-accent-400 text-xs sm:text-sm font-medium">{t('about.value2Title')}</span>
              <span className="text-white text-xs sm:text-sm">•</span>
              <span className="text-accent-400 text-xs sm:text-sm font-medium">{t('about.value3Title')}</span>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.7 }}
          >
            <a href="/contact" className="btn btn-accent px-3 sm:px-5 py-1.5 sm:py-2 rounded-full flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium">
              <DollarSign className="w-3 h-3 sm:w-4 sm:h-4" />
              {t('business.contactForAppraisal')}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
