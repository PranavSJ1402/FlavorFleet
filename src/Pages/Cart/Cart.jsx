import React, { useContext } from "react";
import { StoreContext } from "../../Components/Context/StoreContext";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItem, food_list, RemoveFromCart, getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>

        <br />
        <hr />

        {food_list.map((item, index) => {
          if (cartItem[item._id] > 0) {
            return (
              <div className="cart-items-title cart-items-item" key={index}>
                <img src={item.image} alt={item.title} />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItem[item._id]}</p>
                <p>${(item.price * cartItem[item._id]).toFixed(2)}</p>
                <button onClick={() => RemoveFromCart(item._id)}>Remove</button>
              </div>
            );
          }
        })}
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h3>Cart Totals</h3>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <div className="cart-total-details">
            <p>Delivery Fees</p>  
            <p>${getTotalCartAmount() === 0 ? 0 : 2.00}</p>
          </div>
          <div className="cart-total-details">
            <p>Total</p>
            <p>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</p>
          </div>
          <button onClick={() => {navigate('/order')}} className="checkout-btn">PROCEED TO CHECKOUT</button>
        </div>

        <div className="promo-code-section">
          <p>If you have a promo code, Enter it here</p>
          <div className="promo-code-input">
            <input type="text" placeholder="Promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
