import styled from 'styled-components';

const Product = ({name, price, image, description, category}) => {
  return (
    <ProductStyle>
      <div className='product-container'>
        <img src={image} alt='preview' />
        <h3>{name}</h3>
        <h2>&#8362; {price}</h2>
        <p>{description}</p>
      </div>
    </ProductStyle>
  )
}

const ProductStyle = styled.div`
  display: flex;
  flex-direction: row-reverse;
  text-align: right;
  margin: 0.5rem auto;
  padding: 0.5rem;
  

  .product-container{
    h3 {
      color: var(--clr-heading-2);
    }
    h2 {
      color: var(--clr-paragraph-6);
    }
  }
  .product-container img{
    max-width: 300px;
    &:hover{
      transition: var(--transition);
      transform: scale(105%);
    }

  }


`

export default Product;