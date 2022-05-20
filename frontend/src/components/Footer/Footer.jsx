import React from 'react';
import './Footer.scss';

const Footer = () => {
  const year = new Date().getFullYear();
  return <div className='footer'>{year} &copy; Stripe Mern</div>;
};

export default Footer;
