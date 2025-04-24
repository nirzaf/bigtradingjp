import { Vehicle } from '../types/vehicle';

export const vehicles: Vehicle[] = [
  {
    id: '1',
    make: 'Mitsubishi',
    model: 'Lancer Evolution',
    year: 2023,
    price: 42500,
    mileage: 3250,
    description: 'The Mitsubishi Lancer Evolution delivers exhilarating performance with its rally-bred heritage. This tuned blue model features enhanced aerodynamics, precision handling, and aggressive styling that turns heads wherever it goes.',
    transmission: 'Manual',
    fuelType: 'Petrol',
    bodyType: 'Sedan',
    color: 'Tuned Blue',
    features: ['Recaro Sport Seats', 'Performance Exhaust System', 'Upgraded Suspension', 'Aftermarket Wheels', 'Carbon Fiber Accents', 'Turbo Boost Controller', 'Limited Slip Differential'],
    images: {
      main: '/images/Tuned Blue Mitsubishi Lancer Evolution.jpeg',
      gallery: [
        '/images/Tuned Blue Mitsubishi Lancer Evolution.jpeg',
        '/images/Blue Mitsubishi Lancer Evolution Front View.jpeg',
        '/images/Blue Modified Mitsubishi Lancer Evolution Rear View.jpeg',
        '/images/Recaro Car Seats Interior View.jpeg'
      ]
    },
    specs: {
      engine: '2.0L Turbocharged Inline-4',
      power: '350 hp',
      acceleration: '0-60 mph in 4.1 seconds',
      topSpeed: '165 mph'
    },
    sold: false
  },

  {
    id: '2',
    make: 'Toyota',
    model: 'Allion',
    year: 2023,
    price: 28500,
    mileage: 12750,
    description: 'The Toyota Allion combines elegant styling with practical functionality. This silver sedan offers a comfortable ride, excellent fuel efficiency, and Toyota\'s legendary reliability for everyday driving.',
    transmission: 'Automatic',
    fuelType: 'Petrol',
    bodyType: 'Sedan',
    color: 'Silver Metallic',
    features: ['Smart Entry System', 'Dual-Zone Climate Control', 'LED Headlights', 'Rearview Camera', 'Touchscreen Infotainment', 'Cruise Control', 'Alloy Wheels'],
    images: {
      main: '/images/Silver Toyota Allion side view.jpeg',
      gallery: [
        '/images/Silver Toyota Allion side view.jpeg',
        '/images/Silver Toyota Allion rear view.jpeg',
        '/images/Toyota Interior Dashboard Steering Wheel.webp',
        '/images/Vehicle Dashboard Gauges Service Meter Speedometerjpg.jpeg'
      ]
    },
    specs: {
      engine: '1.8L Inline-4',
      power: '140 hp',
      acceleration: '0-60 mph in 9.8 seconds',
      topSpeed: '118 mph'
    },
    sold: false
  },
  {
    id: '3',
    make: 'Komatsu',
    model: 'WA70 Wheel Loader',
    year: 2023,
    price: 89500,
    mileage: 450,
    description: 'The Komatsu WA70 Wheel Loader is a versatile and powerful construction vehicle designed for efficiency and reliability. This compact loader offers excellent maneuverability and impressive lifting capacity for various construction applications.',
    transmission: 'Automatic',
    fuelType: 'Diesel',
    bodyType: 'Construction',
    color: 'Komatsu Yellow',
    features: ['Hydrostatic Transmission', 'Articulated Steering', 'Enclosed Cab with AC', 'Adjustable Bucket', 'Rear View Camera', 'LED Work Lights', 'Quick Coupler System'],
    images: {
      main: '/images/Yellow Wheel Loader Construction Vehicle.jpeg',
      gallery: [
        '/images/Yellow Wheel Loader Construction Vehicle.jpeg',
        '/images/Yellow Wheel Loader Heavy Equipment Closeup.jpeg',
        '/images/Yellow Articulated Wheel Loaderjpg.jpeg',
        '/images/Komatsu WA70 Loader Back View.jpeg'
      ]
    },
    specs: {
      engine: '4.4L Turbo Diesel',
      power: '95 hp',
      acceleration: 'N/A',
      topSpeed: '22 mph'
    },
    sold: false
  },
  {
    id: '4',
    make: 'Caterpillar',
    model: '320GC Excavator',
    year: 2023,
    price: 215000,
    mileage: 320,
    description: 'The Caterpillar 320GC Excavator delivers exceptional performance and efficiency for demanding construction projects. This powerful machine combines advanced hydraulics with operator comfort to maximize productivity in any environment.',
    transmission: 'Hydraulic',
    fuelType: 'Diesel',
    bodyType: 'Excavator',
    color: 'CAT Yellow',
    features: ['Smart Mode Operation', 'Premium Cab with Air Suspension Seat', 'Rear View Camera', 'Boom Float Function', 'Auxiliary Hydraulic Lines', 'LED Work Lights', 'Grade Control Ready'],
    images: {
      main: '/images/Caterpillar_320GC_Excavator_Side_View.jpeg',
      gallery: [
        '/images/Caterpillar_320GC_Excavator_Side_View.jpeg',
        '/images/Yellow CAT 320GC Excavator Quarry.jpeg',
        '/images/CAT 320E Excavator Rear View.jpeg',
        '/images/CAT Excavator Interior Controls Seat.jpeg'
      ]
    },
    specs: {
      engine: '6.7L CAT C7.1 Diesel',
      power: '174 hp',
      acceleration: 'N/A',
      topSpeed: '3.4 mph'
    },
    sold: false
  },
  {
    id: '5',
    make: 'Komatsu',
    model: 'D51PX Bulldozer',
    year: 2023,
    price: 178000,
    mileage: 650,
    description: 'The Komatsu D51PX Bulldozer is a powerful and versatile earthmoving machine designed for maximum productivity and operator comfort. With its hydrostatic transmission and precision control, this bulldozer excels in a variety of grading and land clearing applications.',
    transmission: 'Hydrostatic',
    fuelType: 'Diesel',
    bodyType: 'Bulldozer',
    color: 'Komatsu Yellow',
    features: ['Palm Command Control System', 'Air Suspension Operator Seat', 'Rear View Monitoring System', 'Auto Shift Transmission', 'Parallel Link Undercarriage System', 'Integrated ROPS Cab', 'Komtrax Monitoring System'],
    images: {
      main: '/images/Komatsu D51PX Bulldozer Image.jpeg',
      gallery: [
        '/images/Komatsu D51PX Bulldozer Image.jpeg',
        '/images/Komatsu-D51PX-Bulldozer-Moving-Dirtjpg.jpeg',
        '/images/Komatsu-D51PX-Bulldozer-Pushing-Dirtjpg.jpeg',
        '/images/Bulldozer Control Panel and Steering Wheel.jpeg'
      ]
    },
    specs: {
      engine: '5.1L Komatsu SAA6D107E-1 Diesel',
      power: '130 hp',
      acceleration: 'N/A',
      topSpeed: '5.3 mph'
    },
    sold: false
  },
  {
    id: '6',
    make: 'Caterpillar',
    model: '140M Motor Grader',
    year: 2023,
    price: 245000,
    mileage: 420,
    description: 'The Caterpillar 140M Motor Grader is a precision earthmoving machine designed for road construction and maintenance. With its articulated frame and advanced blade control, this motor grader delivers exceptional grading accuracy and productivity for infrastructure projects.',
    transmission: 'Hydrostatic',
    fuelType: 'Diesel',
    bodyType: 'Construction',
    color: 'CAT Yellow',
    features: ['Articulated Frame', 'Electronic Joystick Controls', 'Climate-Controlled Cab', 'Advanced Blade Control System', 'Rear Ripper Attachment', 'All-Wheel Drive Option', 'Integrated Grade Control Technology'],
    images: {
      main: '/images/CAT_140M_Motor_Grader_Yellow.jpg',
      gallery: [
        '/images/CAT_140M_Motor_Grader_Yellow.jpg',
        '/images/CAT_140M_Motor_Grader.jpeg',
        '/images/CAT_140M_Motor_Grader_new.jpeg',
        '/images/CAT_140M_Yellow_CAT_Motor_Grader.jpg'
      ]
    },
    specs: {
      engine: '7.2L CAT C9.3 Diesel',
      power: '213 hp',
      acceleration: 'N/A',
      topSpeed: '27 mph'
    },
    sold: false
  }
];

export const getVehicleById = (id: string): Vehicle | undefined => {
  return vehicles.find(vehicle => vehicle.id === id);
};