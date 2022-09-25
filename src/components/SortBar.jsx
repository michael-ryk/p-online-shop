import { useDispatch, useSelector } from 'react-redux';
import { filterActions } from '../store/filter';
import styled from 'styled-components';
import { BsGridFill, BsList } from 'react-icons/bs';
import { useEffect } from 'react';

const SortBar = () => {
  const dispatch = useDispatch();
  const numberOfFilteredItems = useSelector(
    (state) => state.filter.NumberOfFilteredProducts
  );
  const viewType = useSelector((state) => state.filter.viewType);
  const sortValue = useSelector((state) => state.filter.sortValue);

  useEffect(() => {
    // console.log("=== STEP 3 === UseEffect - sortbar")
    dispatch(filterActions.sortProducts());
  }, [sortValue]);

  return (
    <SortBarStyles>
      <div className='btn-container'>
        <button
          type='button'
          name='grid'
          className={`${viewType === 'grid' ? 'active-btn' : ''}`}
          onClick={() => dispatch(filterActions.setViewMode('grid'))}
        >
          <BsGridFill />
        </button>
        <button
          type='button'
          name='list'
          className={`${viewType === 'list' ? 'active-btn' : ''}`}
          onClick={() => dispatch(filterActions.setViewMode('list'))}
        >
          <BsList />
        </button>
      </div>
      <p>נמצאו {numberOfFilteredItems} מוצרים</p>
      <form>
        <label htmlFor='sort'>מיון לפי</label>
        <select
          name='sort'
          id='sort'
          className='sort-input'
          value={sortValue}
          onChange={(e) =>
            dispatch(filterActions.editSortValue(e.target.value))
          }
        >
          <option value='price-lowest'>מחיר (נמוך לגבוהה)</option>
          <option value='price-highers'>מחיר (גבוהה לנמוך)</option>FD
          <option value='name-a'>שם הפריט (א-ת)</option>
          <option value='name-z'>שם הפריט (ת-א)</option>
        </select>
      </form>
    </SortBarStyles>
  );
};

const SortBarStyles = styled.section`
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 620px) {
    flex-direction: column;
  }
  .btn-container {
    margin: 0 0.5rem;
    button {
      margin: 0 0.25rem;
      padding: 0.25rem 0.4rem;
      background: transparent;
      border: 1px solid var(--clr-heading-3);
      border-radius: var(--radius);
      cursor: pointer;
      color: var(--clr-heading-3);
      &:hover {
        transition: var(--transition);
        color: var(--clr-paragraph-5);
      }
      svg {
        font-size: 2rem;
      }
    }
    .active-btn {
      background-color: var(--clr-heading-3);
      color: var(--clr-paragraph-10);
    }
  }
  p {
    font-size: 1.25rem;
    margin: 0 2rem;
  }
  form {
    .sort-input {
      border-radius: var(--radius);
      font-size: 1.25rem;
      padding: 0.25rem 0.5rem;
      margin-right: 0.5rem;
    }
    label {
      font-size: 1.25rem;
    }
  }
`;

export default SortBar;
