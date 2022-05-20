import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

import CartIcon from '../CartIcon/CartIcon';

const header = () => {
  return (
    <nav className='nav-menu container'>
      <div className='logo'>
        <Link to='/'>Stripe Mern</Link>
      </div>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/shop'>Shop</Link>
        </li>
      </ul>

      <CartIcon />
    </nav>
  );
};

export default header;
