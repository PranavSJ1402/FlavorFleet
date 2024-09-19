import { createContext, useEffect, useState } from "react";
import { food_list } from "../../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItem, setCartItem] = useState({});

  const AddToCart = (itemId) => {
    setCartItem((prev) => ({
      ...prev,
      [itemId]: prev[itemId] ? prev[itemId] + 1 : 1,
    }));
  };

  const RemoveFromCart = (itemId) => {
    if (cartItem[itemId] > 1) {
      setCartItem((prev) => ({
        ...prev,
        [itemId]: prev[itemId] - 1,
      }));
    } else {
      const { [itemId]: removedItem, ...newCart } = cartItem;
      setCartItem(newCart);
    }
  };
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItem[item];
        }
      }
    }
    return totalAmount; 
  };
  
  const contextValue = {
    food_list,
    cartItem,
    AddToCart,
    RemoveFromCart,
    getTotalCartAmount
    };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
