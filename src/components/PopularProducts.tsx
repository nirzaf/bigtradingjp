import React from 'react';
import ProductCard from './ProductCard';

const PopularProducts: React.FC = () => {
  const popularProducts = [
    { id: '1', name: 'KOBELCO SK200-10', image: '/products/kobelco-sk200.jpg' },
    { id: '2', name: 'CAT 320E', image: '/products/cat-320e.jpg' },
    { id: '3', name: 'KOMATSU PC200-8', image: '/products/komatsu-pc200.jpg' },
    { id: '4', name: 'HITACHI EX60-1', image: '/products/hitachi-ex60.jpg' },
    { id: '5', name: 'KOMATSU WA380-6', image: '/products/komatsu-wa380.jpg' },
  ];

  return (
    <section className="popular-products-section">
      <h2 className="section-title">Popular This Week</h2>
      <div className="products-grid">
        {popularProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.image}
            isPopular={true}
          />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;