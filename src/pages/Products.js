import { useSelector } from 'react-redux';
import Product from '../components/Product';

import styled from 'styled-components';

const Products = () => {

  // Take list of products from Redux store
  const products = useSelector(state => state.productsList)


  return (
    <ProductsStyles>
      {products && products.map((item) => {
        return <Product key={item.id} {...item} />;
      })}
      {!products && <p>Product list is empty</p>}
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
