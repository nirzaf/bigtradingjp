import { useState } from 'react';
import { motion } from 'framer-motion';
import VehicleCard from '../vehicles/VehicleCard';
import { vehicles } from '../../data/vehicles';
import { Vehicle } from '../../types/vehicle';

const VehicleGallery = () => {
  const [filteredVehicles, setFilteredVehicles] = useState<Vehicle[]>(vehicles);
  const [activeFilter, setActiveFilter] = useState<string>('all');

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

  const filterButtons = [
    { type: 'all', label: 'All Vehicles' },
    { type: 'Sedan', label: 'Sedans' },
    { type: 'Construction', label: 'Construction' },
    { type: 'Excavator', label: 'Excavators' },
    { type: 'Bulldozer', label: 'Bulldozers' },
    { type: 'Diesel', label: 'Diesel' }
  ];

  return (
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
          {filterButtons.map((button) => (
            <button
              key={button.type}
              onClick={() => filterVehicles(button.type)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === button.type
                  ? 'bg-primary-800 text-white'
                  : 'bg-white text-secondary-700 hover:bg-gray-100'
              }`}
            >
              {button.label}
            </button>
          ))}
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
  );
};

export default VehicleGallery;
