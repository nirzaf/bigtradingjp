import React from 'react';

interface ProductProps {
  id: string;
  name: string;
  image: string;
  isNew?: boolean;
  isPopular?: boolean;
}

const ProductCard: React.FC<ProductProps> = ({ id, name, image, isNew, isPopular }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={image} alt={name} className="product-image" />
        {isNew && <span className="badge new-badge">New</span>}
        {isPopular && <span className="badge popular-badge">Popular</span>}
      </div>
      <h3 className="product-name">{name}</h3>
      <div className="product-actions">
        <button className="add-to-wishlist">Add to Wishlist</button>
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;