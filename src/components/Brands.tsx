import React from 'react';

const Brands: React.FC = () => {
  const brands = [
    { name: 'CAT', logo: '/brands/cat.png' },
    { name: 'HITACHI', logo: '/brands/hitachi.png' },
    { name: 'KOMATSU', logo: '/brands/komatsu.png' },
    { name: 'Kubota', logo: '/brands/kubota.png' },
    { name: 'Mitsubishi', logo: '/brands/mitsubishi.png' },
    { name: 'TOYOTA', logo: '/brands/toyota.png' },
  ];

  return (
    <section className="brands-section">
      <h2 className="section-title">Top Brands</h2>
      <p className="section-subtitle">Discover top brands in construction vehicles, earthmoving equipment, excavators, and attachments</p>
      <div className="brands-container">
        {brands.map((brand) => (
          <div key={brand.name} className="brand-item">
            <img src={brand.logo} alt={`${brand.name} logo`} className="brand-logo" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Brands;