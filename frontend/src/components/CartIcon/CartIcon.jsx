import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './CartIcon.scss';

import { CartContext } from '../../Context/CartContext';
import ShoppingBag from '../../assets/images/shopping-bag.png';

const CartIcon = () => {
  const navigate = useNavigate();

  const { itemCount, cartItems } = useContext(CartContext);

  console.log('CartItems:', cartItems);
  return (
    <div className='cart-container' onClick={() => navigate('/cart')}>
      <img src={ShoppingBag} alt='shopping-cart-icon' />
      {itemCount > 0 && <span className='cart-count'>{itemCount}</span>}
    </div>
  );
};

export default CartIcon;
