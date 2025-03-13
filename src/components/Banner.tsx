import React from 'react';

const Banner: React.FC = () => {
  return (
    <section className="banner-section">
      <div className="banner-container">
        <div className="banner-content">
          <h2 className="banner-title">
            <span className="banner-highlight">HUGE</span><br />
            USED<br />
            STOCK<br />
            <span className="banner-highlight">SALE</span>
          </h2>
        </div>
        <div className="banner-images">
          <img src="/banner/car1.png" alt="Car 1" className="banner-image" />
          <img src="/banner/car2.png" alt="Car 2" className="banner-image" />
          <img src="/banner/car3.png" alt="Car 3" className="banner-image" />
        </div>
      </div>
    </section>
  );
};

export default Banner;