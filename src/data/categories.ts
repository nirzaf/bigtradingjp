export interface Category {
  id: string;
  name: string;
  translationKey: string;
  image: string;
  link: string;
}

export const categories: Category[] = [
  {
    id: '1',
    name: 'Excavators',
    translationKey: 'categories.excavators',
    image: '/categories/Komatsu Yellow Excavator PC210.png',
    link: '#vehicle-gallery'
  },
  {
    id: '2',
    name: 'Vehicles',
    translationKey: 'categories.vehicles',
    image: '/categories/Various Vehicles Truck Cars Motorcycle.png',
    link: '#vehicle-gallery'
  },
  {
    id: '3',
    name: 'Dump Trucks',
    translationKey: 'categories.dumpTrucks',
    image: '/categories/Yellow Dump Truck Isolated.webp',
    link: '#vehicle-gallery'
  },
  {
    id: '4',
    name: 'Road Rollers',
    translationKey: 'categories.roadRollers',
    image: '/categories/Yellow Lonking CDM516B Road Roller.png',
    link: '#vehicle-gallery'
  },
  {
    id: '5',
    name: 'Motor Graders',
    translationKey: 'categories.motorGraders',
    image: '/categories/Yellow Motor Grader 4180D.png',
    link: '#vehicle-gallery'
  },
  {
    id: '6',
    name: 'Mobile Cranes',
    translationKey: 'categories.mobileCranes',
    image: '/categories/Yellow Zoomlion Mobile Crane on Black Background.png',
    link: '#vehicle-gallery'
  }
];
