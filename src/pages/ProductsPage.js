import ProductsList from '../components/ProductsList';
import SortBar from '../components/SortBar';
import styled from 'styled-components';

const ProductsPage = () => {

  return (
    <ProductsPageStyles>
      <SortBar />
      <ProductsList />
    </ProductsPageStyles>
  );
};

const ProductsPageStyles = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
`;

export default ProductsPage;
