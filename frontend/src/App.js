import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';

import Home from './Pages/Home';
import Shop from './Pages/Shop';
import SingleProduct from './components/SingleProduct/SingleProduct';
import NotFound from './components/NotFound';
import CartPage from './components/CartPage/CartPage';
import Checkout from './components/Checkout/Checkout';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/product/:id' element={<SingleProduct />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
