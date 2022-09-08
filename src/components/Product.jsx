import { formatPrice } from '../Helpers/formatPrice';
import styled from 'styled-components';

const Product = ({name, price, image, description, category}) => {
  return (
    <ProductStyle>
      <img src={image} alt='preview' />
      <h3>{name}</h3>
      <h2>{formatPrice(price)}</h2>
      <p>{description}</p>
    </ProductStyle>
  )
}

const ProductStyle = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  max-width: 300px;
  margin: 0.5rem auto;
  padding: 0.5rem;
  h3 {
    color: var(--clr-heading-2);
  }
  h2 {
    color: var(--clr-paragraph-6);
  }
  img{
    padding: 1rem;
    &:hover{
      transition: var(--transition);
      transform: scale(105%);
    }
  }
`

export default Product;