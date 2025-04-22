import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, CircleDollarSign, ThumbsUp, Award } from 'lucide-react';

import VehicleCard from '../components/vehicles/VehicleCard';
import CategoryGallery from '../components/ui/CategoryGallery';
import { vehicles } from '../data/vehicles';
import { Vehicle } from '../types/vehicle';

const HomePage = () => {
  const [filteredVehicles, setFilteredVehicles] = useState<Vehicle[]>(vehicles);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  // Category data for the gallery
  const categories = [
    {
      id: '1',
      name: 'Excavators',
      image: '/categories/Komatsu Yellow Excavator PC210.png',
      link: '#vehicle-gallery'
    },
    {
      id: '2',
      name: 'Vehicles',
      image: '/categories/Various Vehicles Truck Cars Motorcycle.png',
      link: '#vehicle-gallery'
    },
    {
      id: '3',
      name: 'Dump Trucks',
      image: '/categories/Yellow Dump Truck Isolated.webp',
      link: '#vehicle-gallery'
    },
    {
      id: '4',
      name: 'Road Rollers',
      image: '/categories/Yellow Lonking CDM516B Road Roller.png',
      link: '#vehicle-gallery'
    },
    {
      id: '5',
      name: 'Motor Graders',
      image: '/categories/Yellow Motor Grader 4180D.png',
      link: '#vehicle-gallery'
    },
    {
      id: '6',
      name: 'Mobile Cranes',
      image: '/categories/Yellow Zoomlion Mobile Crane on Black Background.png',
      link: '#vehicle-gallery'
    }
  ];

  const filterVehicles = (filterType: string) => {
    setActiveFilter(filterType);

    if (filterType === 'all') {
      setFilteredVehicles(vehicles);
      return;
    }

    // Filter by body type
    if (['Sedan', 'SUV', 'Coupe', 'Convertible', 'Construction', 'Excavator', 'Bulldozer'].includes(filterType)) {
      setFilteredVehicles(vehicles.filter(v => v.bodyType === filterType));
      return;
    }

    // Filter by fuel type
    if (['Electric', 'Petrol', 'Diesel', 'Hybrid'].includes(filterType)) {
      setFilteredVehicles(vehicles.filter(v => v.fuelType === filterType));
      return;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/Tuned Blue Mitsubishi Lancer Evolution.jpeg"
            alt="Luxury car"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-900/70" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl text-white"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 uppercase tracking-wide">
              <span className="text-white">BIG TRADING</span> <span className="text-accent-500"></span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-4 uppercase tracking-wider font-semibold">
              EXPORTER OF MOTOR VEHICLES, SPARE PARTS AND MACHINERIES
            </p>
            <p className="text-lg text-gray-200 mb-8">
              Established in 2015, we deliver high-quality vehicles and equipment worldwide from our base in Kuwana, Japan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#vehicle-gallery" className="btn btn-accent px-6 py-3 text-base">
                View Inventory
              </a>
              <a href="tel:+81804213-9008" className="btn bg-white/10 hover:bg-white/20 text-white border-white/30 px-6 py-3 text-base">
                Call Us: +81 80-4213-9008
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-4 uppercase">Why Choose BIG TRADING </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              We offer an unmatched selection of performance vehicles and construction equipment with transparent pricing and exceptional service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <motion.div
              className="text-center p-6 bg-gray-50 rounded-lg"
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 mb-4">
                <Search className="w-8 h-8 text-primary-800" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-2">Curated Selection</h3>
              <p className="text-secondary-600">
                Each vehicle in our inventory is hand-selected for its exceptional quality and condition.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              className="text-center p-6 bg-gray-50 rounded-lg"
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 mb-4">
                <CircleDollarSign className="w-8 h-8 text-primary-800" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-2">Transparent Pricing</h3>
              <p className="text-secondary-600">
                Our no-haggle pricing ensures you always get a fair deal with no hidden fees.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              className="text-center p-6 bg-gray-50 rounded-lg"
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 mb-4">
                <ThumbsUp className="w-8 h-8 text-primary-800" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-2">Premium Service</h3>
              <p className="text-secondary-600">
                Enjoy concierge-level service from your first inquiry to long after your purchase.
              </p>
            </motion.div>

            {/* Feature 4 */}
            <motion.div
              className="text-center p-6 bg-gray-50 rounded-lg"
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 mb-4">
                <Award className="w-8 h-8 text-primary-800" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-secondary-600">
                All vehicles undergo rigorous inspection and come with a comprehensive warranty.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Gallery */}
      <CategoryGallery categories={categories} />

      {/* Vehicle Gallery */}
      <section id="vehicle-gallery" className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-4 uppercase">Featured Inventory</h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Browse our handpicked selection of performance vehicles and construction equipment, each one representing the pinnacle of engineering excellence.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button
              onClick={() => filterVehicles('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === 'all'
                  ? 'bg-primary-800 text-white'
                  : 'bg-white text-secondary-700 hover:bg-gray-100'
              }`}
            >
              All Vehicles
            </button>
            <button
              onClick={() => filterVehicles('Sedan')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === 'Sedan'
                  ? 'bg-primary-800 text-white'
                  : 'bg-white text-secondary-700 hover:bg-gray-100'
              }`}
            >
              Sedans
            </button>
            <button
              onClick={() => filterVehicles('Construction')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === 'Construction'
                  ? 'bg-primary-800 text-white'
                  : 'bg-white text-secondary-700 hover:bg-gray-100'
              }`}
            >
              Construction
            </button>
            <button
              onClick={() => filterVehicles('Excavator')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === 'Excavator'
                  ? 'bg-primary-800 text-white'
                  : 'bg-white text-secondary-700 hover:bg-gray-100'
              }`}
            >
              Excavators
            </button>
            <button
              onClick={() => filterVehicles('Bulldozer')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === 'Bulldozer'
                  ? 'bg-primary-800 text-white'
                  : 'bg-white text-secondary-700 hover:bg-gray-100'
              }`}
            >
              Bulldozers
            </button>
            <button
              onClick={() => filterVehicles('Diesel')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === 'Diesel'
                  ? 'bg-primary-800 text-white'
                  : 'bg-white text-secondary-700 hover:bg-gray-100'
              }`}
            >
              Diesel
            </button>
          </div>

          {/* Vehicle Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {filteredVehicles.map((vehicle, index) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-display font-bold mb-4 uppercase">Ready to Find Your Perfect Vehicle?</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Our team of experts is ready to help you find the perfect vehicle or equipment that matches your needs and requirements.<br />
            Call us directly at <a href="tel:+81804213-9008" className="text-accent-500 hover:text-accent-400 transition-colors">+81 80-4213-9008</a>
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#vehicle-gallery" className="btn btn-accent px-6 py-3 text-base">
              Browse Inventory
            </a>
            <a href="/contact" className="btn bg-white text-primary-900 hover:bg-gray-200 px-6 py-3 text-base">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default HomePage;