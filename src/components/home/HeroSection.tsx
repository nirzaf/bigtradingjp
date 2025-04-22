import { motion } from 'framer-motion';
import { Truck, Car, Settings, Wrench, Construction, Sparkles, Tractor } from 'lucide-react';
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
    <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/Tuned Blue Mitsubishi Lancer Evolution.jpeg"
          alt="Luxury car"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-800/90 to-primary-900/85" />
        <div className="absolute inset-0 bg-black/30 mix-blend-overlay" />
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
          className="max-w-4xl mx-auto text-white backdrop-blur-sm bg-primary-900/10 p-8 rounded-lg border border-white/10 shadow-2xl"
        >
          <div className="flex flex-wrap items-center justify-center mb-8 gap-6 md:gap-10 bg-primary-800/20 py-4 px-2 rounded-lg border-t border-b border-white/5">
            {/* Mitsubishi Lancer Evolution (Sedan, Petrol) */}
            <motion.div
              className="icon-container relative group"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.7, delay: 0.2, type: "spring", stiffness: 200 }}
              title="Mitsubishi Lancer Evolution"
              whileHover={{ scale: 1.1 }}
            >
              <div className="icon-3d-wrapper">
                <Car className="w-10 h-10 md:w-14 md:h-14 text-[#1844C6] sedan-icon" />
                <div className="icon-shadow"></div>
              </div>
              <div className="opacity-0 group-hover:opacity-100 absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-[#3E5AC1]/90 text-[#F7F7EA] text-xs px-2 py-1 rounded-md whitespace-nowrap transition-opacity duration-200 backdrop-blur-sm border border-[#F7F7EA]/20">
                Lancer Evolution
              </div>
              <div className="icon-glow" style={{ backgroundColor: "rgba(24, 68, 198, 0.2)" }}></div>
            </motion.div>

            {/* Toyota Allion (Sedan, Petrol) */}
            <motion.div
              className="icon-container relative group"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.7, delay: 0.3, type: "spring", stiffness: 200 }}
              title="Toyota Allion"
              whileHover={{ scale: 1.1 }}
            >
              <div className="icon-3d-wrapper">
                <Car className="w-10 h-10 md:w-14 md:h-14 text-[#F7F7EA] sedan-icon-alt" />
                <div className="icon-shadow"></div>
              </div>
              <div className="opacity-0 group-hover:opacity-100 absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-[#3E5AC1]/90 text-[#F7F7EA] text-xs px-2 py-1 rounded-md whitespace-nowrap transition-opacity duration-200 backdrop-blur-sm border border-[#F7F7EA]/20">
                Toyota Allion
              </div>
              <div className="icon-glow" style={{ backgroundColor: "rgba(247, 247, 234, 0.2)" }}></div>
            </motion.div>

            {/* Komatsu WA70 Wheel Loader (Construction, Diesel) */}
            <motion.div
              className="icon-container relative group"
              initial={{ scale: 0, rotate: 180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.7, delay: 0.4, type: "spring", stiffness: 200 }}
              title="Komatsu WA70 Wheel Loader"
              whileHover={{ scale: 1.1 }}
            >
              <div className="icon-3d-wrapper">
                <Truck className="w-10 h-10 md:w-14 md:h-14 text-[#F76C09] loader-icon" />
                <div className="icon-shadow"></div>
              </div>
              <div className="opacity-0 group-hover:opacity-100 absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-[#3E5AC1]/90 text-[#F7F7EA] text-xs px-2 py-1 rounded-md whitespace-nowrap transition-opacity duration-200 backdrop-blur-sm border border-[#F7F7EA]/20">
                Wheel Loader
              </div>
              <div className="icon-glow" style={{ backgroundColor: "rgba(247, 108, 9, 0.2)" }}></div>
            </motion.div>

            {/* Caterpillar 320GC Excavator (Excavator, Diesel) */}
            <motion.div
              className="icon-container relative group"
              initial={{ scale: 0, rotate: 180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.7, delay: 0.5, type: "spring", stiffness: 200 }}
              title="Caterpillar 320GC Excavator"
              whileHover={{ scale: 1.1 }}
            >
              <div className="icon-3d-wrapper">
                <Construction className="w-10 h-10 md:w-14 md:h-14 text-[#E77D2E] excavator-icon" />
                <div className="icon-shadow"></div>
              </div>
              <div className="opacity-0 group-hover:opacity-100 absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-[#3E5AC1]/90 text-[#F7F7EA] text-xs px-2 py-1 rounded-md whitespace-nowrap transition-opacity duration-200 backdrop-blur-sm border border-[#F7F7EA]/20">
                Excavator
              </div>
              <div className="icon-glow" style={{ backgroundColor: "rgba(231, 125, 46, 0.2)" }}></div>
            </motion.div>

            {/* Komatsu D51PX Bulldozer (Bulldozer, Diesel) */}
            <motion.div
              className="icon-container relative group"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.7, delay: 0.6, type: "spring", stiffness: 200 }}
              title="Komatsu D51PX Bulldozer"
              whileHover={{ scale: 1.1 }}
            >
              <div className="icon-3d-wrapper">
                <Tractor className="w-10 h-10 md:w-14 md:h-14 text-[#3E5AC1] bulldozer-icon" />
                <div className="icon-shadow"></div>
              </div>
              <div className="opacity-0 group-hover:opacity-100 absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-[#3E5AC1]/90 text-[#F7F7EA] text-xs px-2 py-1 rounded-md whitespace-nowrap transition-opacity duration-200 backdrop-blur-sm border border-[#F7F7EA]/20">
                Bulldozer
              </div>
              <div className="icon-glow" style={{ backgroundColor: "rgba(62, 90, 193, 0.2)" }}></div>
            </motion.div>
          </div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 uppercase tracking-wide text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="relative inline-block">
              <span className="bg-gradient-to-r from-white to-gray-200 text-transparent bg-clip-text drop-shadow-sm">BIG </span>
            </div>
            <span className="text-accent-500 relative ml-2"> TRADING
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

          <motion.div
            className="flex justify-center mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p className="text-sm md:text-base text-gray-300 uppercase tracking-wider font-medium text-center px-4 py-2 bg-primary-800/30 rounded-md inline-block">
              <span className="text-accent-400">EXPORTER OF</span> MOTOR VEHICLES, SPARE PARTS AND MACHINERIES
            </p>
          </motion.div>

          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="relative bg-gradient-to-r from-primary-800/40 to-primary-900/40 p-4 rounded-lg border border-white/10 max-w-2xl">
              <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 bg-primary-800 p-2 rounded-full border border-white/10 shadow-lg">
                <Settings className="w-5 h-5 text-accent-500 gear-icon" />
              </div>
              <p className="text-base text-gray-200 text-center px-4">
                <span className="font-semibold"></span>We deliver high-quality vehicles and equipment worldwide from our base in Kuwana, Japan. Our commitment to excellence and customer satisfaction drives everything we do.
              </p>
              <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 bg-primary-800 p-2 rounded-full border border-white/10 shadow-lg">
                <Wrench className="w-5 h-5 text-accent-500 gear-icon-reverse" />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <a
              href="tel:+81804213-9008"
              className="relative overflow-hidden group bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-medium rounded-lg px-6 py-3 text-base shadow-lg hover:shadow-xl transition-all duration-300 border border-accent-400/20"
            >
              <span className="relative z-10 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Contact Us
              </span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-white/10 via-white/5 to-transparent transition-transform duration-700 ease-in-out"></div>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
