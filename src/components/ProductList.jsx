import { Link } from 'react-router-dom';
import { formatPrice } from '../Helpers/formatPrice';
import styled from 'styled-components';

const ProductList = ({id, name, price, image, description, category}) => {
  return (
    <ProductStyle>
      <div className='img-container'>
        <Link to={`/products/${id}`} className='img-link'>
          <img src={image} alt='preview' />
        </Link>
      </div>
      <div className='content-container'>
        <Link to={`/products/${id}`} className='text-link'>
          <h3>{name}</h3>
        </Link>
        <h2>{formatPrice(price)}</h2>
        <p>{description}</p>
      </div>
    </ProductStyle>
  )
}

const ProductStyle = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  /* text-align: right; */
  /* max-width: 300px; */
  margin: 0.5rem 1rem;
  padding: 0.5rem;
  .img-container {
    img{
      max-width: 300px;
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
  .content-container {
    align-self: center;
    padding: 0 1rem;
    
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
      margin: 0.5rem 0;
      color: var(--clr-paragraph-6);
    }
  }
`

export default ProductList;