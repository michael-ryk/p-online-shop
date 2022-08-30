import { useState, useEffect } from 'react';
import dummyList from '../constants/dummyList';

const Products = () => {

  const [ products, setProducts ] = useState([]);

  // simulate fetch from backend
  useEffect( () => {
    setProducts(dummyList);
  },[]);


  return <h1>Products</h1>
}

export default Products;