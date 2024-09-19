import React, { useContext } from 'react';
import './PO.css';
import { StoreContext } from '../../Components/Context/StoreContext';

function PO() {
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Email address" />
          <input type="text" placeholder="Street" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="multi-fields">
        <input type="text" placeholder="Zip Code" />
        <input type="text" placeholder="Phone no." />
        </div>
      </div>

      <div className="place-holder-right">
        <div className="cart-total">
          <h3>Cart Totals</h3>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount()}</p>
          </div>
          <div className="cart-total-details">
            <p>Delivery Fees</p>
            <p>${getTotalCartAmount() === 0 ? 0 : 2.00}</p>
          </div>
          <div className="cart-total-details">
            <p>Total</p>
            <p>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</p>
          </div>
          <button className="checkout-btn">PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </form>
  );
}

export default PO;
