import { useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { filterActions } from './store/filter';
import { products_url } from './constants/urls';

// Import UI
import Navbar from './UI/Navbar';
import Sidebar from './UI/Sidebar';
import Footer from './UI/Footer';

// Import pages
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import About from './pages/About';
import Contacts from './pages/Contacts';
import NotFound from './pages/NotFound';

import './App.css';


function App() {
  const dispatch = useDispatch();
  const showSidebar = useSelector(state => state.products.showSidebar);

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
      dispatch(filterActions.addProductsToStoreFirstTime(adaptedProductsList));
    };

    // trigger async function to fetch data and catch errors
    fetchProductsList().catch((err) => {
      console.log(err.message);
    });
  }, []);

  return (
    <>
      <Navbar />
      {showSidebar && <Sidebar />}
      <Routes>
        <Route path='/' element={<Navigate replace to='/homepage' />} />
        <Route
          path='p-online-shop/'
          element={<Navigate replace to='/homepage' />}
        />
        <Route path='/homepage' element={<HomePage />} />
        <Route path='/products' element={<ProductsPage />} />
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
