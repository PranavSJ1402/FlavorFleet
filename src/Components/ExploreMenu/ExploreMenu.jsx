import React from 'react';
import { menu_list } from '../../assets/assets.js'; // Ensure correct path with forward slashes
import './ExploreMenu.css';

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h2>Explore our menu</h2>
      <p className="explore-menu-text">
        Discover a variety of delicious dishes curated to satisfy your cravings.
      </p>
      <div className="explore-menu-list">
        {menu_list && menu_list.length > 0 ? (
          menu_list.map((item, index) => (
            <div
              onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}
              className={`explore-menu-item ${category === item.menu_name ? 'active' : ''}`}
              key={index}
            >
              <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt={item.menu_name} />
              <p>{item.menu_name}</p>
            </div>
          ))
        ) : (
          <p>No menu items available at the moment.</p>
        )}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
