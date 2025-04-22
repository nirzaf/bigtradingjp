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
          <div className="flex flex-wrap items-center justify-center mb-6 gap-4 md:gap-8">
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
