import { Link, NavLink } from 'react-router-dom';

import { linksConstants } from '../constants/PageLinks';
import CartButtons from '../components/CartButtons';
import styled from 'styled-components';

//NavStyles - nav container
const Navbar = () => {
  return (
    <NavStyles>
      <div className='nav-main'>
        <div className='nav-header'>
          <Link to='/'>
            <h1>LOGO</h1>
          </Link>
          <button type='button' className='nav-btn'>
            Burger
          </button>
        </div>
        <ul className='nav-links'>
          {linksConstants.map(item => <li key={item.id}>
            <NavLink to={item.url}>{item.text}</NavLink>
          </li>)}
        </ul>
        <div className='cart-buttons'>
          <CartButtons />
        </div>
      </div>
    </NavStyles>
  );
};

const NavStyles = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;

  .nav-main {
    width: 95vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }

  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .nav-btn {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
  }

  .nav-links {
    display: none;
  }

  .cart-auth-btn {
    color: red;
  }

  .cart-buttons{
    display: none;
  }

  @media only screen and ( min-width: 990px ){
    .nav-btn {
      display: none;
    }

    .nav-main {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }

    .nav-links {
      display: flex;
      justify-content: center;
      flex-direction: row-reverse;
      margin: 0.5rem 0;

      li a {
        color: var(--clr-heading-3);
        margin: 0 1rem;
        font-size: 1.6rem;
        letter-spacing: var(--spacing);
        padding: 0 0.5rem;
        border-radius: 10px;

        &:hover{
          color: var(--clr-primary-1);
          background-color: var(--clr-primary-10);
          font-weight: bold;
        }
      }
    }

    .cart-buttons{
      display: grid;
    }
  }

`;

export default Navbar;
