import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CartButtons = () => {

  return (
    <ButtonsStyles>
      <Link to='/cart' className='cart-btn'>
        Cart
      </Link>
      <button type='button' className='auth-btn'>Login</button>
    </ButtonsStyles>
  );
}

const ButtonsStyles = styled.div`
  display:none;

@media only screen and (min-width: 990px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;

    .cart-btn {
      color: var(--clr-heading-1);
      font-size: 1.5rem;
      letter-spacing: var(--spacing);
    }

    .auth-btn {
      background: transparent;
      border-color: transparent;
      font-size: 1.5rem;
      cursor: pointer;
      letter-spacing: var(--spacing);
      border: 0;
    }
}
`

export default CartButtons;