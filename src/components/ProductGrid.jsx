import { Link } from 'react-router-dom';
import { formatPrice } from '../Helpers/formatPrice';
import styled from 'styled-components';

const ProductGrid = ({id, name, price, image, description, category}) => {
  return (
    <ProductStyle>
      <div className='img-container'>
        <Link to={`/products/${id}`} className='img-link'>
          <img src={image} alt='preview' />
        </Link>
      </div>
      <Link to={`/products/${id}`} className='text-link'>
        <h3>{name}</h3>
      </Link>
      <h2>{formatPrice(price)}</h2>
      <p>{description}</p>
    </ProductStyle>
  )
}

const ProductStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: right;
  max-width: 300px;
  margin: 0.5rem auto;
  padding: 0.5rem;
  .img-container {
    img{
      max-width: 100%;
      padding: 1rem;
      &:hover{
        transition: var(--transition);
        transform: scale(110%);
      }
    }
    .img-link {
    cursor: pointer;
      svg {
        font-size: 2rem;
        margin: 0 auto;
        color: var(--clr-heading-4);
      }
    }
  }
  .text-link {
    text-decoration: underline;
    h3 {
      color: var(--clr-heading-2);
      &:hover{
        color: var(--clr-heading-4);
      }
    }
  }
  h2 {
    color: var(--clr-paragraph-6);
  }
`

export default ProductGrid;