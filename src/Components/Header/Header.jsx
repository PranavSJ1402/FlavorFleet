import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="Header">
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p className="tagline">
          Experience the perfect blend of flavor and convenience with our diverse menu, offering something for every taste. From classic comfort foods to gourmet creations, we prepare each dish with the utmost care.
        </p>
        <button id='view-menu'>View Menu</button>
      </div>
    </div>
  );
}

export default Header;
