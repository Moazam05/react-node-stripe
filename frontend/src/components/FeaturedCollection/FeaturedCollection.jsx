import React, { useContext } from 'react';

import { ProductsContext } from '../../Context/ProductsContext';
import FeaturedProduct from '../Shared/FeaturedProduct';

const FeaturedCollection = () => {
  const { products } = useContext(ProductsContext);

  const productsItems = products
    .filter((product, i) => i < 4)
    .map((product) => <FeaturedProduct {...product} key={product.id} />);

  return (
    <div className='featured-collection container'>
      <div className='featured-section-title'>Featured Collection</div>
      <div className='products'>{productsItems}</div>
    </div>
  );
};

export default FeaturedCollection;
