import { Vehicle } from '../types/vehicle';

export const vehicles: Vehicle[] = [
  {
    id: '1',
    make: 'BMW',
    model: 'M4 Competition',
    year: 2023,
    price: 84700,
    mileage: 1250,
    description: 'The BMW M4 Competition combines track-capable performance with everyday usability. Featuring a twin-turbocharged inline-six engine, this M4 delivers breathtaking acceleration and precision handling.',
    transmission: 'Automatic',
    fuelType: 'Petrol',
    bodyType: 'Coupe',
    color: 'Frozen Dark Grey',
    features: ['Premium Sound System', 'Carbon Fiber Interior Trim', 'Heated Seats', 'Apple CarPlay', 'Head-Up Display', 'Adaptive Suspension', 'Carbon Ceramic Brakes'],
    images: {
      main: 'https://images.pexels.com/photos/12906588/pexels-photo-12906588.jpeg',
      gallery: [
        'https://images.pexels.com/photos/12906588/pexels-photo-12906588.jpeg',
        'https://images.pexels.com/photos/9270143/pexels-photo-9270143.jpeg',
        'https://images.pexels.com/photos/13298522/pexels-photo-13298522.jpeg',
        'https://images.pexels.com/photos/4635346/pexels-photo-4635346.jpeg'
      ]
    },
    specs: {
      engine: '3.0L Twin-Turbocharged Inline-6',
      power: '503 hp',
      acceleration: '0-60 mph in 3.8 seconds',
      topSpeed: '155 mph (limited)'
    },
    sold: false
  },
  {
    id: '2',
    make: 'Porsche',
    model: '911 Carrera S',
    year: 2023,
    price: 135600,
    mileage: 450,
    description: 'The iconic Porsche 911 Carrera S represents the perfect balance of luxury and performance. With its distinctive silhouette and rear-mounted flat-six engine, this 911 delivers an exhilarating driving experience.',
    transmission: 'Automatic',
    fuelType: 'Petrol',
    bodyType: 'Coupe',
    color: 'Racing Yellow',
    features: ['Sport Chrono Package', 'BOSE® Surround Sound System', 'Adaptive Sport Seats', 'Porsche Dynamic Chassis Control', 'LED Matrix Headlights', 'Sport Exhaust System'],
    images: {
      main: 'https://images.pexels.com/photos/3954440/pexels-photo-3954440.jpeg',
      gallery: [
        'https://images.pexels.com/photos/3954440/pexels-photo-3954440.jpeg',
        'https://images.pexels.com/photos/3954436/pexels-photo-3954436.jpeg',
        'https://images.pexels.com/photos/3954426/pexels-photo-3954426.jpeg',
        'https://images.pexels.com/photos/3954431/pexels-photo-3954431.jpeg'
      ]
    },
    specs: {
      engine: '3.0L Twin-Turbocharged Flat-6',
      power: '443 hp',
      acceleration: '0-60 mph in 3.5 seconds',
      topSpeed: '191 mph'
    },
    sold: false
  },
  {
    id: '3',
    make: 'Mercedes-Benz',
    model: 'S-Class S580',
    year: 2023,
    price: 148500,
    mileage: 875,
    description: 'The Mercedes-Benz S-Class represents the pinnacle of luxury motoring. This flagship sedan combines opulent comfort with cutting-edge technology and effortless performance.',
    transmission: 'Automatic',
    fuelType: 'Petrol',
    bodyType: 'Sedan',
    color: 'Obsidian Black Metallic',
    features: ['Burmester® 4D Surround Sound', 'Executive Rear Seat Package', 'MBUX Augmented Reality Navigation', 'Active Ambient Lighting', 'Heated & Ventilated Massage Seats', 'Air Balance Package'],
    images: {
      main: 'https://images.pexels.com/photos/13465516/pexels-photo-13465516.jpeg',
      gallery: [
        'https://images.pexels.com/photos/13465516/pexels-photo-13465516.jpeg',
        'https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg',
        'https://images.pexels.com/photos/3354648/pexels-photo-3354648.jpeg',
        'https://images.pexels.com/photos/3689532/pexels-photo-3689532.jpeg'
      ]
    },
    specs: {
      engine: '4.0L Biturbo V8 with EQ Boost',
      power: '496 hp',
      acceleration: '0-60 mph in 4.4 seconds',
      topSpeed: '130 mph (limited)'
    },
    sold: false
  },
  {
    id: '4',
    make: 'Tesla',
    model: 'Model S Plaid',
    year: 2023,
    price: 129990,
    mileage: 320,
    description: 'The Tesla Model S Plaid delivers unrivaled performance in the electric vehicle segment. With a tri-motor setup and breathtaking acceleration, this luxury sedan redefines what an EV can be.',
    transmission: 'Automatic',
    fuelType: 'Electric',
    bodyType: 'Sedan',
    color: 'Midnight Silver Metallic',
    features: ['Tri-Motor AWD', '17" Touchscreen Display', 'Glass Roof', 'Premium Audio System', 'Autopilot', 'Yoke Steering', 'Full Self-Driving Capability'],
    images: {
      main: 'https://images.pexels.com/photos/14148071/pexels-photo-14148071.jpeg',
      gallery: [
        'https://images.pexels.com/photos/14148071/pexels-photo-14148071.jpeg',
        'https://images.pexels.com/photos/14148190/pexels-photo-14148190.jpeg',
        'https://images.pexels.com/photos/12866420/pexels-photo-12866420.jpeg',
        'https://images.pexels.com/photos/15218659/pexels-photo-15218659.jpeg'
      ]
    },
    specs: {
      engine: 'Tri-Motor Electric',
      power: '1,020 hp',
      acceleration: '0-60 mph in 1.99 seconds',
      topSpeed: '200 mph'
    },
    sold: false
  },
  {
    id: '5',
    make: 'Audi',
    model: 'RS e-tron GT',
    year: 2023,
    price: 164100,
    mileage: 580,
    description: 'The Audi RS e-tron GT combines stunning design with electric performance. This grand tourer represents Audi\'s vision for the future of luxury mobility.',
    transmission: 'Automatic',
    fuelType: 'Electric',
    bodyType: 'Sedan',
    color: 'Daytona Gray Pearl',
    features: ['Bang & Olufsen 3D Sound System', 'Carbon Fiber Roof', 'Matrix LED Headlights', 'Air Suspension', 'All-Wheel Steering', 'Head-Up Display'],
    images: {
      main: 'https://images.pexels.com/photos/9798361/pexels-photo-9798361.jpeg',
      gallery: [
        'https://images.pexels.com/photos/9798361/pexels-photo-9798361.jpeg',
        'https://images.pexels.com/photos/10668641/pexels-photo-10668641.jpeg',
        'https://images.pexels.com/photos/9798362/pexels-photo-9798362.jpeg',
        'https://images.pexels.com/photos/10668642/pexels-photo-10668642.jpeg'
      ]
    },
    specs: {
      engine: 'Dual-Motor Electric',
      power: '637 hp',
      acceleration: '0-60 mph in 3.1 seconds',
      topSpeed: '155 mph (limited)'
    },
    sold: false
  },
  {
    id: '6',
    make: 'Land Rover',
    model: 'Range Rover Autobiography',
    year: 2023,
    price: 158000,
    mileage: 950,
    description: 'The Range Rover Autobiography represents the ultimate expression of luxury SUV motoring. Combining go-anywhere capability with first-class comfort and refinement.',
    transmission: 'Automatic',
    fuelType: 'Petrol',
    bodyType: 'SUV',
    color: 'Santorini Black',
    features: ['Meridian™ Signature Sound System', 'Semi-Aniline Leather Seats', 'Executive Class Comfort-Plus Rear Seats', 'Cabin Air Purification Pro', 'Active Noise Cancellation', '24-way Heated and Cooled Massage Front Seats'],
    images: {
      main: 'https://images.pexels.com/photos/14882519/pexels-photo-14882519.jpeg',
      gallery: [
        'https://images.pexels.com/photos/14882519/pexels-photo-14882519.jpeg',
        'https://images.pexels.com/photos/2920064/pexels-photo-2920064.jpeg',
        'https://images.pexels.com/photos/13831422/pexels-photo-13831422.jpeg',
        'https://images.pexels.com/photos/3874337/pexels-photo-3874337.jpeg'
      ]
    },
    specs: {
      engine: '4.4L Twin-Turbocharged V8',
      power: '523 hp',
      acceleration: '0-60 mph in 4.4 seconds',
      topSpeed: '155 mph (limited)'
    },
    sold: false
  }
];

export const getVehicleById = (id: string): Vehicle | undefined => {
  return vehicles.find(vehicle => vehicle.id === id);
};