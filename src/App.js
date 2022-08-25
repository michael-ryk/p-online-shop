import { Route, Routes, Navigate } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Products from './pages/Products';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import About from './pages/About';
import Contacts from './pages/Contacts';
import NotFound from './pages/NotFound';

import styled from 'styled-components';
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigate replace to='/homepage' />} />
        <Route path='/homepage' element={<HomePage />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<SingleProduct />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/about' element={<About />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
