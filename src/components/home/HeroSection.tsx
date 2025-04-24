import { motion } from 'framer-motion';
import { Truck, Car, Settings, Wrench, Construction, Sparkles, Tractor } from 'lucide-react';
import '../../components/ui/AnimatedIcons.css';

const HeroSection = () => {
  // Function to create animated particles
  const createParticles = () => {
    const particles = [];
    const particleClasses = ['particle-1', 'particle-2', 'particle-3', 'particle-4', 'particle-5'];
    
    for (let i = 0; i < 15; i++) {
      const delay = Math.random() * 20;
      const particleClass = particleClasses[Math.floor(Math.random() * particleClasses.length)];
      const startLeft = Math.random() * 100;
      const startTop = Math.random() * 20;

      particles.push(
        <div
          key={i}
          className={`particle ${particleClass}`}
          style={{
            left: `${startLeft}%`,
            top: `${startTop}%`,
            animationDelay: `${delay}s`
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
                <Car className="icon-base sedan-icon w-10 h-10 md:w-14 md:h-14 text-[#1844C6]" />
                <div className="icon-glow sedan"></div>
                <div className="icon-shadow"></div>
                <div className="sparkle-container">
                  <div className="sparkle" style={{top: "15%", left: "20%", animationDelay: "0.2s"}}></div>
                  <div className="sparkle" style={{top: "70%", left: "80%", animationDelay: "0.8s"}}></div>
                </div>
              </div>
              <div className="opacity-0 group-hover:opacity-100 absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-[#3E5AC1]/90 text-[#F7F7EA] text-xs px-2 py-1 rounded-md whitespace-nowrap transition-opacity duration-200 backdrop-blur-sm border border-[#F7F7EA]/20">
                Lancer Evolution
              </div>
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
                <Car className="icon-base sedan-icon-alt w-10 h-10 md:w-14 md:h-14 text-[#F7F7EA]" />
                <div className="icon-glow sedan-alt"></div>
                <div className="icon-shadow"></div>
                <div className="sparkle-container">
                  <div className="sparkle" style={{top: "25%", left: "75%", animationDelay: "0.4s"}}></div>
                  <div className="sparkle" style={{top: "65%", left: "25%", animationDelay: "1.2s"}}></div>
                </div>
              </div>
              <div className="opacity-0 group-hover:opacity-100 absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-[#3E5AC1]/90 text-[#F7F7EA] text-xs px-2 py-1 rounded-md whitespace-nowrap transition-opacity duration-200 backdrop-blur-sm border border-[#F7F7EA]/20">
                Toyota Allion
              </div>
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
                <Truck className="icon-base loader-icon w-10 h-10 md:w-14 md:h-14 text-[#F76C09]" />
                <div className="icon-glow loader"></div>
                <div className="icon-shadow"></div>
                <div className="sparkle-container">
                  <div className="sparkle" style={{top: "30%", left: "30%", animationDelay: "0.6s"}}></div>
                  <div className="sparkle" style={{top: "60%", left: "70%", animationDelay: "1.4s"}}></div>
                </div>
              </div>
              <div className="opacity-0 group-hover:opacity-100 absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-[#3E5AC1]/90 text-[#F7F7EA] text-xs px-2 py-1 rounded-md whitespace-nowrap transition-opacity duration-200 backdrop-blur-sm border border-[#F7F7EA]/20">
                Wheel Loader
              </div>
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
                <Construction className="icon-base excavator-icon w-10 h-10 md:w-14 md:h-14 text-[#E77D2E]" />
                <div className="icon-glow excavator"></div>
                <div className="icon-shadow"></div>
                <div className="sparkle-container">
                  <div className="sparkle" style={{top: "20%", left: "60%", animationDelay: "0.3s"}}></div>
                  <div className="sparkle" style={{top: "70%", left: "40%", animationDelay: "1.0s"}}></div>
                </div>
              </div>
              <div className="opacity-0 group-hover:opacity-100 absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-[#3E5AC1]/90 text-[#F7F7EA] text-xs px-2 py-1 rounded-md whitespace-nowrap transition-opacity duration-200 backdrop-blur-sm border border-[#F7F7EA]/20">
                Excavator
              </div>
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
                <Tractor className="icon-base bulldozer-icon w-10 h-10 md:w-14 md:h-14 text-[#3E5AC1]" />
                <div className="icon-glow bulldozer"></div>
                <div className="icon-shadow"></div>
                <div className="sparkle-container">
                  <div className="sparkle" style={{top: "25%", left: "25%", animationDelay: "0.5s"}}></div>
                  <div className="sparkle" style={{top: "65%", left: "65%", animationDelay: "1.3s"}}></div>
                </div>
              </div>
              <div className="opacity-0 group-hover:opacity-100 absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-[#3E5AC1]/90 text-[#F7F7EA] text-xs px-2 py-1 rounded-md whitespace-nowrap transition-opacity duration-200 backdrop-blur-sm border border-[#F7F7EA]/20">
                Bulldozer
              </div>
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
            <div className="flex flex-col items-center">
              <p className="text-sm md:text-base text-gray-300 uppercase tracking-wider font-medium text-center px-5 py-2 bg-primary-800/30 rounded-md inline-block border-l-2 border-r-2 border-accent-500/30">
                <span className="text-accent-400 font-semibold">EXPORTER OF</span> <span className="tracking-widest">MOTOR VEHICLES</span> <span className="inline-block mx-1 text-accent-400">•</span> <span className="tracking-widest">SPARE PARTS</span> <span className="inline-block mx-1 text-accent-400">•</span> <span className="tracking-widest">MACHINERIES</span>
              </p>
              <div className="w-24 h-1 mt-1 bg-gradient-to-r from-transparent via-accent-500/50 to-transparent rounded-full"></div>
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="relative bg-gradient-to-r from-primary-800/40 to-primary-900/40 p-4 rounded-lg border border-white/10 max-w-2xl">
              <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 bg-primary-800 p-2 rounded-full border border-white/10 shadow-lg z-10">
                <div className="icon-3d-wrapper" style={{margin: 0}}>
                  <Settings className="icon-base gear-icon w-5 h-5 text-accent-500" />
                  <div className="icon-glow gear" style={{opacity: 0.4}}></div>
                  <div className="sparkle-container">
                    <div className="sparkle" style={{top: "20%", left: "20%", animationDelay: "0.2s", width: "2px", height: "2px"}}></div>
                    <div className="sparkle" style={{top: "70%", left: "70%", animationDelay: "0.8s", width: "2px", height: "2px"}}></div>
                  </div>
                </div>
              </div>
              <p className="text-base text-gray-200 text-center px-4 leading-relaxed relative z-20">
                <span className="font-semibold text-white">Global Exporters Since 2015</span>
                <span className="block mt-1 mb-2 h-px w-16 mx-auto bg-gradient-to-r from-transparent via-accent-500 to-transparent"></span>
                <span className="text-base md:text-lg font-medium text-white bg-gradient-to-r from-accent-500/20 to-accent-400/20 px-3 py-1 rounded-md shadow-inner border-l-2 border-r-2 border-accent-500/30 block my-2 relative z-20">Premium vehicles & machinery from Japan to the world.</span>
                <span className="block mt-2"><span className="text-accent-400">Excellence</span> • <span className="text-white">Quality</span> • <span className="text-accent-400">Reliability</span></span>
              </p>
              <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 bg-primary-800 p-2 rounded-full border border-white/10 shadow-lg z-10">
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
            <div className="flex flex-col items-center">
              <a href="#contact" className="mt-6 animated-call-btn">
                Contact Us Now
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
