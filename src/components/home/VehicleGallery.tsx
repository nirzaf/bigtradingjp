import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import VehicleCard from '../vehicles/VehicleCard';
import { vehicles } from '../../data/vehicles';

import { useLanguage } from '../../contexts/LanguageContext';

const VehicleGallery = () => {
  const { t, language } = useLanguage();
  const [params, setParams] = useSearchParams();
  const activeFilter = params.get('category') || 'all';
  const filteredVehicles = vehicles.filter(v => activeFilter === 'all' ||
    (activeFilter === 'vehicles' && ['Sedan', 'SUV', 'Coupe', 'Convertible', 'Truck', 'Van'].includes(v.bodyType)) ||
    (activeFilter === 'machinery' && ['Construction', 'Excavator', 'Bulldozer'].includes(v.bodyType)) ||
    v.bodyType === activeFilter || v.fuelType === activeFilter);
  const filterVehicles = (category: string) => setParams(category === 'all' ? {} : { category });

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
    { type: 'all', label: t('vehicles.allVehicles') },
    { type: 'Sedan', label: t('vehicles.sedans') },
    { type: 'Construction', label: t('vehicles.construction') },
    { type: 'Excavator', label: t('vehicles.excavators') },
    { type: 'Bulldozer', label: t('vehicles.bulldozers') },
    { type: 'Diesel', label: t('vehicles.diesel') }
  ];

  return (
    <section id="vehicle-gallery" className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold mb-4 uppercase">{t('vehicles.previousExports')}</h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            {t('vehicles.previousExportsDesc')}
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

        {filteredVehicles.length === 0 && <p role="status" className="text-center py-10">{language === 'ja' ? 'このカテゴリの掲載例はありません。在庫についてお問い合わせください。' : 'No examples are listed in this category. Please contact us for availability.'}</p>}
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
