import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, DollarSign, Gauge, Car, Info, SprayCan, Settings, Check } from 'lucide-react';

import { getVehicleById } from '../data/vehicles';
import { Vehicle } from '../types/vehicle';
import ImageGallery from '../components/vehicles/ImageGallery';
import LoadingSpinner from '../components/ui/LoadingSpinner';

const VehicleDetailPage = () => {
  const { vehicleId } = useParams<{ vehicleId: string }>();
  const navigate = useNavigate();
  const [vehicle, setVehicle] = useState<Vehicle | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (vehicleId) {
      // Simulate API fetch with a small delay
      setTimeout(() => {
        const foundVehicle = getVehicleById(vehicleId);
        if (foundVehicle) {
          setVehicle(foundVehicle);
        }
        setLoading(false);
      }, 500);
    }
  }, [vehicleId]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!vehicle) {
    return (
      <div className="container-custom py-16 text-center">
        <h2 className="text-2xl font-display font-bold mb-4">Vehicle Not Found</h2>
        <p className="mb-6">Sorry, we couldn't find the vehicle you're looking for.</p>
        <button 
          onClick={() => navigate('/')}
          className="btn btn-primary"
        >
          Return to Home
        </button>
      </div>
    );
  }

  // Format price with commas
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(vehicle.price);

  // Format mileage with commas
  const formattedMileage = new Intl.NumberFormat('en-US').format(vehicle.mileage);

  const allImages = [vehicle.images.main, ...vehicle.images.gallery];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Vehicle Header */}
      <section className="bg-primary-900 text-white py-12">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-display font-bold mb-2 text-white">
                {vehicle.year} {vehicle.make} {vehicle.model}
              </h1>
              <p className="text-accent-400 text-lg md:text-xl font-semibold">
                {formattedPrice}
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <button className="btn btn-accent px-6 py-3">
                Contact About This Vehicle
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Details */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Image Gallery - Takes up 2/3 on large screens */}
            <div className="lg:col-span-2">
              <ImageGallery 
                images={allImages}
                alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
              />
              
              {/* Description Section */}
              <div className="mt-8">
                <h2 className="text-2xl font-display font-semibold mb-4">
                  About This {vehicle.make} {vehicle.model}
                </h2>
                <p className="text-secondary-700 mb-6">
                  {vehicle.description}
                </p>
                
                {/* Features List */}
                <h3 className="text-xl font-display font-semibold mb-3">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-8">
                  {vehicle.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <Check className="w-5 h-5 text-success-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Specifications and Details - Takes up 1/3 on large screens */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-display font-semibold mb-4 flex items-center">
                    <Info className="w-5 h-5 mr-2 text-primary-800" />
                    Vehicle Information
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <div className="flex items-center text-secondary-700">
                        <Calendar className="w-5 h-5 mr-2 text-primary-700" />
                        Year
                      </div>
                      <div className="font-medium">{vehicle.year}</div>
                    </div>
                    
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <div className="flex items-center text-secondary-700">
                        <DollarSign className="w-5 h-5 mr-2 text-primary-700" />
                        Price
                      </div>
                      <div className="font-medium">{formattedPrice}</div>
                    </div>
                    
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <div className="flex items-center text-secondary-700">
                        <Gauge className="w-5 h-5 mr-2 text-primary-700" />
                        Mileage
                      </div>
                      <div className="font-medium">{formattedMileage} mi</div>
                    </div>
                    
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <div className="flex items-center text-secondary-700">
                        <Settings className="w-5 h-5 mr-2 text-primary-700" />
                        Transmission
                      </div>
                      <div className="font-medium">{vehicle.transmission}</div>
                    </div>
                    
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <div className="flex items-center text-secondary-700">
                        <Car className="w-5 h-5 mr-2 text-primary-700" />
                        Body Type
                      </div>
                      <div className="font-medium">{vehicle.bodyType}</div>
                    </div>
                    
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <div className="flex items-center text-secondary-700">
                        <SprayCan className="w-5 h-5 mr-2 text-primary-700" />
                        Color
                      </div>
                      <div className="font-medium">{vehicle.color}</div>
                    </div>
                  </div>
                </div>
                
                {/* Performance Specs */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-display font-semibold mb-4 flex items-center">
                    <Settings className="w-5 h-5 mr-2 text-primary-800" />
                    Performance Specs
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <div className="text-secondary-700">Engine</div>
                      <div className="font-medium text-right">{vehicle.specs.engine}</div>
                    </div>
                    
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <div className="text-secondary-700">Power</div>
                      <div className="font-medium">{vehicle.specs.power}</div>
                    </div>
                    
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <div className="text-secondary-700">Acceleration</div>
                      <div className="font-medium">{vehicle.specs.acceleration}</div>
                    </div>
                    
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <div className="text-secondary-700">Top Speed</div>
                      <div className="font-medium">{vehicle.specs.topSpeed}</div>
                    </div>
                  </div>
                </div>
                
                {/* Contact CTA */}
                <div className="mt-6">
                  <button className="w-full btn btn-primary py-3">
                    Schedule a Test Drive
                  </button>
                  <button className="w-full btn btn-secondary mt-3 py-3">
                    Ask a Question
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Vehicles Section (could be implemented in the future) */}
    </motion.div>
  );
};

export default VehicleDetailPage;