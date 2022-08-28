import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CartButtons = () => {

  return (
    <ButtonsStyles>
      <button type='button'>Cart</button>
      <button type='button'>Login</button>
    </ButtonsStyles>
  );
}

const ButtonsStyles = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    
    button {
      background: transparent;
      border-color: transparent;
      font-size: 1.7rem;
      cursor: pointer;
      letter-spacing: var(--spacing);
      color: var(--clr-heading-3);
      border: 0;
    }
`

export default CartButtons;