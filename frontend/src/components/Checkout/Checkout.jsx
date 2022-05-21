import React, { useContext } from 'react';
import './Checkout.scss';

import { CartContext } from '../../Context/CartContext';
import Layout from '../Shared/Layout';

const Checkout = () => {
  const { itemCount, total } = useContext(CartContext);

  return (
    <Layout>
      <div className='checkout'>
        <h2>Checkout Summary</h2>
        <h3>{`Total Item: ${itemCount}`}</h3>
        <h4>{`Amount to Pay: $${total}`}</h4>
      </div>
    </Layout>
  );
};

export default Checkout;
