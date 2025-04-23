import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Gauge, Car, Info, SprayCan, Settings, Check } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

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

  // Price display removed as requested

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
                {vehicle.make} {vehicle.model}
              </h1>
              <p className="text-accent-400 text-lg md:text-xl font-semibold">
                Contact for pricing
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <a
                href={getWhatsAppUrl(`I'm interested in this ${vehicle.make} ${vehicle.model}. Can you provide more information?`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent px-6 py-3 inline-flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-white fill-current"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Contact About This Vehicle
              </a>
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
                alt={`${vehicle.make} ${vehicle.model}`}
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
                  <a
                    href={getWhatsAppUrl(`I'd like to schedule a test drive for this ${vehicle.make} ${vehicle.model}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full btn btn-primary py-3 inline-flex items-center justify-center gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-5 h-5 text-white fill-current"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Schedule a Test Drive
                  </a>
                  <a
                    href={getWhatsAppUrl(`I have a question about this ${vehicle.make} ${vehicle.model}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full btn btn-secondary mt-3 py-3 inline-flex items-center justify-center gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-5 h-5 fill-current"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Ask a Question
                  </a>
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