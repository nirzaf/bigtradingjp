import { motion } from 'framer-motion';
import { Truck, Globe, Settings, Wrench, Construction, Sparkles } from 'lucide-react';
import '../../components/ui/AnimatedIcons.css';

const HeroSection = () => {
  // Function to create animated particles
  const createParticles = () => {
    const particles = [];
    for (let i = 0; i < 10; i++) {
      const delay = Math.random() * 25;
      const size = Math.random() * 6 + 2;
      const startLeft = Math.random() * 100;

      particles.push(
        <div
          key={i}
          className="particle"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${startLeft}%`,
            opacity: 0,
            animation: `particle-move-${Math.floor(Math.random() * 3) + 1} ${20 + Math.random() * 10}s linear infinite ${delay}s`
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
          alt="Luxury car"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-900/70" />
        <div className="animated-bg"></div>
        <div className="particles-container">
          {createParticles()}
        </div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl text-white"
        >
          <div className="flex items-center justify-center mb-6 space-x-8">
            <motion.div
              className="icon-container"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <Truck className="w-12 h-12 text-accent-500 truck-icon" />
            </motion.div>

            <motion.div
              className="icon-container"
              initial={{ scale: 0, rotate: 180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <Construction className="w-12 h-12 text-accent-500 excavator-icon" />
            </motion.div>

            <motion.div
              className="icon-container"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <Globe className="w-12 h-12 text-accent-500 globe-icon" />
            </motion.div>
          </div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 uppercase tracking-wide text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className="text-white">BIG TRADING</span> <span className="text-accent-500 relative">
              CO., LTD
              <motion.span
                className="absolute -top-1 -right-1"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 1.2 }}
              >
                <Sparkles className="w-6 h-6 text-accent-400" />
              </motion.span>
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-200 mb-4 uppercase tracking-wider font-semibold text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            EXPORTER OF MOTOR VEHICLES, SPARE PARTS AND MACHINERIES
          </motion.p>

          <motion.div
            className="flex justify-center space-x-4 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="relative">
              <Settings className="w-6 h-6 text-accent-500 gear-icon absolute -left-8" />
              <p className="text-lg text-gray-200 text-center">
                Established in 2015, we deliver high-quality vehicles and equipment worldwide from our base in Kuwana, Japan.
              </p>
              <Wrench className="w-6 h-6 text-accent-500 gear-icon-reverse absolute -right-8" />
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <a href="tel:+81804213-9008" className="btn bg-white/10 hover:bg-white/20 text-white border-white/30 px-6 py-3 text-base animated-call-btn">
              Call Us
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
