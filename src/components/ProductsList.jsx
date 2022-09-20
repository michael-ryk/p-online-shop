import { useSelector } from 'react-redux';
import ProductGrid from './ProductGrid';
import ProductList from './ProductList';

import styled from 'styled-components';

const Products = () => {

  // Take list of products from Redux store
  const products = useSelector(state => state.filter.filteredProducts);
  const viewType = useSelector(state => state.filter.viewType);

  return (
    <ProductsStyles>
      {products && viewType === 'grid' &&
        <div className='product-grid'>
          {products.map((item) => {
            return <ProductGrid  key={item.id} {...item} />
          })}
        </div>
      }
      {products && viewType === 'list' &&
        <div className='product-list'>
          {products.map((item) => {
            return <ProductList  key={item.id} {...item} />
          })}
        </div>
      }
      {!products && <p>Product list is empty</p>}
    </ProductsStyles>
  );
};

const ProductsStyles = styled.section`
  .product-list {
    display: flex;
    flex-direction: column;
    justify-content: right;
  }
  .product-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem 0.5rem;
  
    @media only screen and (max-width: 950px) {
      grid-template-columns: repeat(2, 1fr);
    }
  
    @media only screen and (max-width: 630px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default Products;
