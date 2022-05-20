import React, { useContext } from 'react';
import './CartItem.scss';

import { CartContext } from '../../Context/CartContext';
import Layout from '../Shared/Layout';
import CartItem from './CartItem';
import Total from './Total';

const CartPage = () => {
  const {
    cartItems,
    itemCount,
    total,
    increase,
    decrease,
    removeProduct,
    clearCart,
  } = useContext(CartContext);
  const funcs = { increase, decrease, removeProduct };

  return (
    <Layout>
      <>
        <h1>Cart</h1>
        {cartItems.length === 0 ? (
          <div className='empty-cart'>Your Cart is empty</div>
        ) : (
          <>
            <div className='cart-page'>
              <div className='cart-item-container'>
                {cartItems.map((item, index) => (
                  <CartItem {...item} key={index} {...funcs} />
                ))}
              </div>
              <Total
                itemCount={itemCount}
                total={total}
                clearCart={clearCart}
              />
            </div>
          </>
        )}
      </>
    </Layout>
  );
};

export default CartPage;
