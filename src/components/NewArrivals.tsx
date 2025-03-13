import React from 'react';
import ProductCard from './ProductCard';

const NewArrivals: React.FC = () => {
  const newProducts = [
    { id: '1', name: 'KOMATSU WA380-6', image: '/products/komatsu-wa380.jpg' },
    { id: '2', name: 'HITACHI EX60-1', image: '/products/hitachi-ex60.jpg' },
    { id: '3', name: 'KOBELCO SK200-10', image: '/products/kobelco-sk200.jpg' },
    { id: '4', name: 'CAT 320E', image: '/products/cat-320e.jpg' },
    { id: '5', name: 'KOMATSU PC200-8', image: '/products/komatsu-pc200.jpg' },
  ];

  return (
    <section className="new-arrivals-section">
      <h2 className="section-title">New Arrivals</h2>
      <div className="products-grid">
        {newProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.image}
            isNew={true}
          />
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;