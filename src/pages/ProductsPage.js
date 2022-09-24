import ProductsList from '../components/ProductsList';
import SortBar from '../components/SortBar';
import Filter from '../components/Filter';
import styled from 'styled-components';

const ProductsPage = () => {

  return (
    <main>
      <ProductsPageStyles>
        <Filter />
        <div>
          <SortBar />
          <ProductsList />
        </div>
      </ProductsPageStyles>
    </main>
  );
};

const ProductsPageStyles = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;

  @media only screen and (max-width: 450px) {
    flex-direction: column;
    align-items: center;
  }
`;

export default ProductsPage;
