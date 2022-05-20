import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './FeaturedProduct.scss';

import { isInCart } from '../Helpers';
import { CartContext } from '../../Context/CartContext';

function FeaturedProducts(props) {
  const navigate = useNavigate();
  const { title, imageUrl, price, id, description } = props;

  const product = { title, imageUrl, price, id, description };

  const { addProduct, cartItems, increase } = useContext(CartContext);

  const itemInCart = isInCart(product, cartItems);

  return (
    <div className='featured-product'>
      <div
        className='featured-image'
        onClick={() => navigate(`/product/${id}`)}
      >
        <img src={imageUrl} alt={title} />
      </div>
      <div className='name-price'>
        <h3>{title}</h3>
        <p>$ {price}</p>

        {!itemInCart ? (
          <button
            className='button is-black nomad-btn'
            onClick={() => addProduct(product)}
          >
            ADD TO CART
          </button>
        ) : (
          <button
            className='button is-white nomad-btn'
            id='btn-white-outline'
            onClick={() => increase(product)}
          >
            ADD MORE
          </button>
        )}
      </div>
    </div>
  );
}

export default FeaturedProducts;
