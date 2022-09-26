import { useDispatch } from 'react-redux';
import { filterActions } from '../store/filter';
import styled from 'styled-components';

const Filter = () => {

  const dispatch = useDispatch()

  const handleFilterChanges = (e) => {
    const { name, value } = e.target;
    dispatch(filterActions.updateFilters({name, value}))
    dispatch(filterActions.filterProducts());
  }

  const handleClearFilter = () => {
    dispatch(filterActions.clearFilters());
    dispatch(filterActions.sortProducts());
  }

  return (
    <FilterStyles>
      <form onSubmit={(e) => {e.preventDefault()}}>
        <div className='form-block'>
          <input
            name='search_text'
            type='text'
            placeholder='Search'
            className='search-input'
            onChange={handleFilterChanges}
          />
        </div>
        <div className='form-block'>
          <h3>קטגוריה</h3>
        </div>
        <div className='form-block'>
          <h3>צבע</h3>
        </div>
        <div className='form-block'>
          <h3>מחיר</h3>
        </div>
        <div className='form-block'>
          <h3>מבצעים</h3>
        </div>
      </form>
      <button type='button' className='clear-btn' onClick={handleClearFilter}>
        אפס סינון
      </button>
    </FilterStyles>
  );
};

const FilterStyles = styled.section`
  padding: 0.5rem;

  @media only screen and (max-width: 450px) {
    text-align: center;
  }

  .form-block {
    margin: 1rem auto;
  }
  .search-input {
    border-radius: var(--radius);
    font-size: 1.5rem;
    padding: 0.25rem 0.5rem;
  }
  .clear-btn {
    display: block;
    width: 100%;
    font-size: 20px;
    border: 1px solid transparent;
    border-radius: var(--radius);
    background-color: var(--clr-paragraph-9);
    padding: 0.5rem 1rem;
    &:hover {
      background-color: var(--clr-paragraph-8);
    }
    &:active {
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
    }
  }
`;

export default Filter;
