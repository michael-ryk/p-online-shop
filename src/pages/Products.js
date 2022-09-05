import { useState, useEffect } from 'react';

import Product from '../components/Product';
import dummyList from '../constants/dummyList';

import styled from 'styled-components';

const Products = () => {

  const [ products, setProducts ] = useState([]);

  // simulate fetch from backend
  useEffect( () => {
    setProducts(dummyList);
  },[]);


  return (
    <ProductsStyles>
      {products.map( item => {
        return (
          <Product key={item.id} {...item} />
        )
      })}
    </ProductsStyles>
  );
}

const ProductsStyles = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem 0.5rem;

  
  @media only screen and (max-width: 950px){
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 630px){
    grid-template-columns: repeat(1, 1fr);
  }
`

export default Products;