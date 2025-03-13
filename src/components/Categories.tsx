import React from 'react';

const Categories: React.FC = () => {
  const categories = [
    { name: 'Motor Grader', image: '/categories/motor-grader.png' },
    { name: 'Dump Truck', image: '/categories/dump-truck.png' },
    { name: 'Excavator', image: '/categories/excavator.png' },
    { name: 'Road Roller', image: '/categories/road-roller.png' },
    { name: 'Mobile Crane', image: '/categories/mobile-crane.png' },
    { name: 'Pickup Truck', image: '/categories/pickup-truck.png' },
  ];

  return (
    <section className="categories-section">
      <h2 className="section-title">Shop By Categories</h2>
      <p className="section-subtitle">FORKLIFTS, CONSTRUCTION VEHICLES, DUMP TRUCKS, EXCAVATORS, BULLDOZERS, CRANES, ETC.</p>
      <div className="categories-grid">
        {categories.map((category) => (
          <div key={category.name} className="category-card">
            <img src={category.image} alt={category.name} className="category-image" />
            <div className="category-name">{category.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;