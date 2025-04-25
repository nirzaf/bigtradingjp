import { motion } from 'framer-motion';
import { Truck, Construction, Sparkles, Tractor, DollarSign } from 'lucide-react';
import '../../components/ui/AnimatedIcons.css';
import { useLanguage } from '../../contexts/LanguageContext';

const HeroSection = () => {
  const { t, language } = useLanguage();

  // Equipment icons with translations
  const equipmentIcons = [
    {
      icon: <Construction className="w-10 h-10 md:w-12 md:h-12 text-[#E77D2E]" />,
      name: language === 'en' ? 'Excavator' : '油圧ショベル',
      delay: 0.2
    },
    {
      icon: <Tractor className="w-10 h-10 md:w-12 md:h-12 text-[#3E5AC1]" />,
      name: language === 'en' ? 'Bulldozer' : 'ブルドーザー',
      delay: 0.3
    },
    {
      icon: <Truck className="w-10 h-10 md:w-12 md:h-12 text-[#F76C09]" />,
      name: language === 'en' ? 'Heavy Machinery' : '重機',
      delay: 0.4
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
    <section className="relative h-[70vh] min-h-[500px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/Tuned Blue Mitsubishi Lancer Evolution.jpeg"
          alt="Heavy machinery"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 to-primary-800/90" />
        <div className="particles-container">
          {createParticles()}
        </div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-white backdrop-blur-sm bg-primary-900/20 p-6 rounded-lg border border-white/10 shadow-xl"
        >
          {/* Company Name */}
          <motion.h1
            className="text-4xl md:text-5xl font-display font-bold mb-4 uppercase tracking-wide text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-white to-gray-200 text-transparent bg-clip-text drop-shadow-sm">BIG </span>
            <span className="text-accent-500 relative ml-1">TRADING
              <motion.span
                className="absolute -top-1 -right-1"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.6 }}
              >
                <Sparkles className="w-5 h-5 text-accent-400" />
              </motion.span>
            </span>
          </motion.h1>

          {/* Equipment Icons */}
          <div className="flex justify-center gap-8 mb-5">
            {equipmentIcons.map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: item.delay, duration: 0.4 }}
              >
                <div className="icon-3d-wrapper mb-2">
                  {item.icon}
                  <div className="icon-glow" style={{ opacity: 0.4 }}></div>
                </div>
                <span className="text-xs text-gray-300">{item.name}</span>
              </motion.div>
            ))}
          </div>

          {/* Business Focus */}
          <motion.div
            className="mb-5 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-white to-accent-400 text-transparent bg-clip-text">
              {t('business.heroTagline')}
            </h2>
            <p className="text-sm md:text-base text-gray-200 max-w-xl mx-auto">
              {t('business.heroSubtitle')}
            </p>
            <div className="flex justify-center gap-2 mt-3 bg-primary-800/30 py-2 px-4 rounded-full inline-block mx-auto">
              <span className="text-accent-400 text-sm font-medium">{t('about.value1Title')}</span>
              <span className="text-white text-sm">•</span>
              <span className="text-accent-400 text-sm font-medium">{t('about.value2Title')}</span>
              <span className="text-white text-sm">•</span>
              <span className="text-accent-400 text-sm font-medium">{t('about.value3Title')}</span>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.7 }}
          >
            <a href="/contact" className="btn btn-accent px-5 py-2 rounded-full flex items-center gap-2 text-sm font-medium">
              <DollarSign className="w-4 h-4" />
              {t('business.contactForAppraisal')}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
