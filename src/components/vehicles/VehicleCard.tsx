import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Circle, CalendarClock, Gauge, MessageCircle } from 'lucide-react';
import { Vehicle } from '../../types/vehicle';

interface VehicleCardProps {
  vehicle: Vehicle;
  index: number;
}

const VehicleCard = ({ vehicle, index }: VehicleCardProps) => {
  // Price removed as requested

  // Format mileage with commas
  const formattedMileage = new Intl.NumberFormat('en-US').format(vehicle.mileage);

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
              Sold
            </div>
          )}
        </div>
        <div className="p-4 flex-grow flex flex-col">
          <h3 className="text-lg font-display font-semibold text-primary-900 mb-1">
            {vehicle.make} {vehicle.model}
          </h3>
          <p className="text-sm text-secondary-600 mb-4 line-clamp-2">
            {vehicle.description.substring(0, 100)}...
          </p>

          <div className="mt-auto">
            <div className="grid grid-cols-3 gap-2 mb-4">
              <div className="flex items-center text-sm text-secondary-700">
                <CalendarClock className="w-4 h-4 mr-1 text-accent-500" />
                {vehicle.year}
              </div>
              <div className="flex items-center text-sm text-secondary-700">
                <Gauge className="w-4 h-4 mr-1 text-accent-500" />
                {formattedMileage} km
              </div>
              <div className="flex items-center text-sm text-secondary-700">
                <Circle className="w-4 h-4 mr-1 text-accent-500" />
                {vehicle.fuelType}
              </div>
            </div>

            <div className="text-center">
              <span className="inline-flex items-center gap-1.5 bg-green-500 text-white hover:bg-green-600 rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-200">
                <MessageCircle className="w-4 h-4" />
                View Details
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default VehicleCard;