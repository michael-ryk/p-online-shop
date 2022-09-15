import { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { products_url } from './constants/urls';

// Import UI
import Navbar from './UI/Navbar';
import Sidebar from './UI/Sidebar';
import Footer from './UI/Footer';

// Import pages
import HomePage from './pages/HomePage';
import Products from './pages/Products';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import About from './pages/About';
import Contacts from './pages/Contacts';
import NotFound from './pages/NotFound';

import './App.css';
import { productsActions } from './store/products';

function App() {
  const dispatch = useDispatch();

  // Fetch products from db and update store
  useEffect(() => {

    // fetch product list using async await from DB
    const fetchProductsList = async () => {
      const response = await fetch(products_url);
      const data = await response.json();

      if (!response.ok) {
        throw new Error('Problem connect to DB!');
      }

      // Adapt data to be handled by map()
      const adaptedProductsList = [];
      for (const key in data) {
        if (data[key]) {
          adaptedProductsList.push({
            id: key,
            name: data[key].name,
            price: data[key].price,
            description: data[key].description,
            image: data[key].image,
            category: data[key].category,
          });
        }
      }
      
      // Set Store list of products
      dispatch(
        productsActions.addProductsToStore({
          productsList: adaptedProductsList,
        })
      );
    };

    // trigger async function to fetch data and catch errors
    fetchProductsList().catch((err) => {
      console.log(err.message);
    });
  }, []);

  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <Navbar
        openSidebar={() => {
          setShowSidebar(true);
        }}
      />
      {showSidebar && (
        <Sidebar
          closeSidebar={() => {
            setShowSidebar(false);
          }}
        />
      )}
      <Routes>
        <Route path='/' element={<Navigate replace to='/homepage' />} />
        <Route
          path='p-online-shop/'
          element={<Navigate replace to='/homepage' />}
        />
        <Route path='/homepage' element={<HomePage />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<SingleProduct />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/about' element={<About />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
