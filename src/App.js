import { Route, Routes, Navigate } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Products from './pages/Products';
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
        <Route path='homepage' element={<HomePage />} />
        <Route path='products' element={<Products />} />
        <Route path='about' element={<About />} />
        <Route path='contacts' element={<Contacts />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
