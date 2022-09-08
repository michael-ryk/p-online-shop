import { useState, useEffect } from 'react';
import { products_url } from '../constants/urls';
import Product from '../components/Product';

import styled from 'styled-components';

const Products = () => {
  const [products, setProducts] = useState([]);

  // simulate fetch from backend
  useEffect(() => {

    // fetch using async await
    
    const fetchProductsList = async () => {
      const response = await fetch(products_url);
      const data = await response.json();

      if(!response.ok){
        throw new Error('Problem connect to DB!')
      }

      // Adapt data to be handled by map()
      const adaptedProductsList = []
      for (const key in data) {
        if(data[key]) {
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

      setProducts(adaptedProductsList);
    };

    // trigger async function to fetch data and catch errors
    fetchProductsList().catch(err => {
      console.log(err.message);
    });

    
  }, []);

  return (
    <ProductsStyles>
      {products.map((item) => {
        return <Product key={item.id} {...item} />;
      })}
    </ProductsStyles>
  );
};

const ProductsStyles = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem 0.5rem;

  @media only screen and (max-width: 950px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 630px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default Products;
