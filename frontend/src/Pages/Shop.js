import React, { useContext } from 'react';
import './Shop.scss';

import Layout from '../components/Shared/Layout';
import FeaturedProduct from '../components/Shared/FeaturedProduct';
import { ProductsContext } from '../Context/ProductsContext';

function Shop() {
  const { products } = useContext(ProductsContext);

  return (
    <Layout>
      <div className='product-list-container'>
        <div className='product-list-title'>Shop</div>
        <div className='product-list'>
          {products.map((product, index) => (
            <FeaturedProduct {...product} key={index} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Shop;
