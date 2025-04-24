import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Circle, CalendarClock, Gauge, MessageCircle } from 'lucide-react';
import { Vehicle } from '../../types/vehicle';
import { useLanguage } from '../../contexts/LanguageContext';

interface VehicleCardProps {
  vehicle: Vehicle;
  index: number;
}

const VehicleCard = ({ vehicle, index }: VehicleCardProps) => {
  const { t } = useLanguage();
  // Price removed as requested

  // Format mileage with commas
  const formattedMileage = new Intl.NumberFormat('en-US').format(vehicle.mileage);
  
  // Get the appropriate description based on vehicle type
  const getVehicleDescription = (vehicle: Vehicle) => {
    const make = vehicle.make.toLowerCase();
    const model = vehicle.model.toLowerCase();
    
    if (make === 'mitsubishi' && model.includes('lancer')) {
      return t('vehicles.lancer.description');
    } else if (make === 'toyota' && model.includes('allion')) {
      return t('vehicles.allion.description');
    } else if (make === 'komatsu' && model.includes('wa70')) {
      return t('vehicles.komatsu.wa70.description');
    } else if (make === 'caterpillar' && model.includes('320gc')) {
      return t('vehicles.caterpillar.320gc.description');
    } else if (make === 'komatsu' && model.includes('d51px')) {
      return t('vehicles.komatsu.d51px.description');
    } else if (make === 'caterpillar' && model.includes('140m')) {
      return t('vehicles.caterpillar.140m.description');
    } else {
      // Fallback to original description if no translation is available
      return vehicle.description.substring(0, 100) + '...';
    }
  };

  return (
    <motion.div
      className="card h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <Link to={`/vehicles/${vehicle.id}`} className="block h-full">
        <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
          <img
            src={vehicle.images.main}
            alt={`${vehicle.make} ${vehicle.model}`}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          />
          {vehicle.sold && (
            <div className="absolute top-5 -right-10 w-32 bg-error-600 text-white py-1 text-xs font-bold uppercase tracking-wider shadow-md z-10 transform rotate-45 text-center border-t border-b border-white/30">
              {t('vehicles.sold')}
            </div>
          )}
        </div>
        <div className="p-4 flex-grow flex flex-col">
          <h3 className="text-lg font-display font-semibold text-primary-900 mb-1">
            {vehicle.make} {vehicle.model}
          </h3>
          <p className="text-sm text-secondary-600 mb-4 line-clamp-2">
            {getVehicleDescription(vehicle)}
          </p>

          <div className="mt-auto">
            <div className="grid grid-cols-3 gap-2 mb-4">
              <div className="flex items-center text-sm text-secondary-700">
                <CalendarClock className="w-4 h-4 mr-1 text-accent-500" />
                {t('vehicles.year')}: {vehicle.year}
              </div>
              <div className="flex items-center text-sm text-secondary-700">
                <Gauge className="w-4 h-4 mr-1 text-accent-500" />
                {t('vehicles.mileage')}: {formattedMileage} {t('vehicles.km')}
              </div>
              <div className="flex items-center text-sm text-secondary-700">
                <Circle className="w-4 h-4 mr-1 text-accent-500" />
                {t('vehicles.fuelType')}: {vehicle.fuelType}
              </div>
            </div>

            <div className="text-center">
              <span className="inline-flex items-center gap-1.5 bg-green-500 text-white hover:bg-green-600 rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-200">
                <MessageCircle className="w-4 h-4" />
                {t('vehicles.viewDetails')}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default VehicleCard;