import React, { createContext, useReducer } from 'react';
import CartReducer, { sumItems } from './CartReducer';

export const CartContext = createContext();

const cartFromLocalStorage = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : [];

const initialState = {
  cartItems: cartFromLocalStorage,
  ...sumItems(cartFromLocalStorage),
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);
  const addProduct = (product) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: product,
    });
  };

  const increase = (product) => {
    dispatch({ type: 'INCREASE', payload: product });
  };

  const decrease = (product) => {
    dispatch({
      type: 'DECREASE',
      payload: product,
    });
  };

  const removeProduct = (product) => {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: product,
    });
  };

  const clearCart = () => {
    dispatch({
      type: 'CLEAR',
    });
  };

  const contextValues = {
    ...state,
    addProduct,
    increase,
    decrease,
    removeProduct,
    clearCart,
  };

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
