export interface Category {
  id: string;
  name: string;
  image: string;
  link: string;
}

export const categories: Category[] = [
  {
    id: '1',
    name: 'Excavators',
    image: '/categories/Komatsu Yellow Excavator PC210.png',
    link: '#vehicle-gallery'
  },
  {
    id: '2',
    name: 'Vehicles',
    image: '/categories/Various Vehicles Truck Cars Motorcycle.png',
    link: '#vehicle-gallery'
  },
  {
    id: '3',
    name: 'Dump Trucks',
    image: '/categories/Yellow Dump Truck Isolated.webp',
    link: '#vehicle-gallery'
  },
  {
    id: '4',
    name: 'Road Rollers',
    image: '/categories/Yellow Lonking CDM516B Road Roller.png',
    link: '#vehicle-gallery'
  },
  {
    id: '5',
    name: 'Motor Graders',
    image: '/categories/Yellow Motor Grader 4180D.png',
    link: '#vehicle-gallery'
  },
  {
    id: '6',
    name: 'Mobile Cranes',
    image: '/categories/Yellow Zoomlion Mobile Crane on Black Background.png',
    link: '#vehicle-gallery'
  }
];
