import React, { useContext } from 'react';
import './FoodItem.css';
import { StoreContext } from '../Context/StoreContext';
import { assets } from '../../assets/assets'; 

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItem, AddToCart, RemoveFromCart } = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt={name} />
        {!cartItem[id] ? (
          <img
            className="add-icon"
            onClick={() => AddToCart(id)}
            src={assets.add_icon_white}
            alt="Add to cart"
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => RemoveFromCart(id)}
              src={assets.remove_icon_red}
              alt="Remove from cart"
            />
            <p>{cartItem[id]}</p>
            <img
              onClick={() => AddToCart(id)}
              src={assets.add_icon_green}
              alt="Add to cart"
            />
          </div>
        )}
      </div>

      <div className="food-item-details">
        <h3>{name}</h3>
        <p>{description}</p>
        <img src={assets.rating_starts} alt="" />
        <p className='price'> ${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
