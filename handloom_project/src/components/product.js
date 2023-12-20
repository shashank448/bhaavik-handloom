import React, { useState } from 'react';

const Product = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setIsMenuOpen(false);
  };

  return (
    <div
      className="dropdown-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="dropdown-button">Products</button>
      {isMenuOpen && (
        <div className="dropdown-content">
          {/* Dropdown content goes here */}
          <select name="products" id="products">
            <option value="saree">Saree</option>
            <option value="kurta">Kurta</option>
        </select>
        </div>
      )}
    </div>
  );
};

export default Product;
