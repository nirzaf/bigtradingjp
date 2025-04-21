export interface Vehicle {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  description: string;
  transmission: 'Automatic' | 'Manual' | 'Semi-Automatic';
  fuelType: 'Petrol' | 'Diesel' | 'Electric' | 'Hybrid';
  bodyType: 'Sedan' | 'SUV' | 'Coupe' | 'Hatchback' | 'Convertible' | 'Truck' | 'Van';
  color: string;
  features: string[];
  images: {
    main: string;
    gallery: string[];
  };
  specs: {
    engine: string;
    power: string;
    acceleration: string;
    topSpeed: string;
  };
  sold: boolean;
}