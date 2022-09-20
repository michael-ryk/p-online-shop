import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { productsActions } from '../store/products';
import { linksConstants } from '../constants/PageLinks';

import CartButtons from '../components/CartButtons';
import styled from 'styled-components';

const Sidebar = () => {
  const dispatch = useDispatch();

  return (
    <SidebarStyles>
      <div className='sidebar-header'>
        <Link to='/'>
            <h1>LOGO</h1>
          </Link>
        <button type='button' className='sidebar-btn' onClick={() => {dispatch(productsActions.closeSidebar())}}>X</button>
      </div>
      <ul className='sidebar-links'>
        {linksConstants.map(item => {
          return (
            <li key={item.id}>
              <Link to={item.url}>{item.text}</Link>
            </li>
          )
        })}
      </ul>
      <div className='cart-buttons'>
        <CartButtons  />
      </div>
    </SidebarStyles>
  )
}

const SidebarStyles = styled.div`
  position:fixed;
  top: 0;
  right:0;
  width: 100%;
  height: 100%;
  background-color: var(--clr-paragraph-10);
  padding: 1rem;

  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;;
  }

  .sidebar-btn {
    background: transparent;
    border: none;
    color: var(--clr-primary-5);
    transition: var(--transition);
    color: var(--clr-red-dark);
    font-size: 2rem;
    font-weight: bold;
    margin: 0.2rem;
  }

  .sidebar-btn:hover {
    color: var(--clr-red-light);
  }

  .sidebar-links, a {
    text-align: right;
    font-size: 2rem;
    /* padding: 1rem 1.5rem; */
    color: var(--clr-heading-4);
    transition: var(--transition);
    letter-spacing: var(--spacing);
    
  }
  
  .sidebar-links a:hover {
    padding-right: 2rem;
    background-color: var(--clr-paragraph-8);
    color: var(--clr-heading-1);
  }

  .cart-buttons {
    margin-top: 2rem;
  }

  @media only screen and (min-width: 990px) {
      display:none;
  }

`

export default Sidebar;