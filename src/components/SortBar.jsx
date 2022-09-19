import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { BsGridFill, BsList } from 'react-icons/bs';

const SortBar = () => {
  const numberOfFilteredItems = useSelector(state => state.filter.filteredItems.length);

  return (
    <SortBarStyles>
      <div className='btn-container'>
        <button>
          <BsGridFill />
        </button>
        <button>
          <BsList />
        </button>
      </div>
      <p>נמצאו {numberOfFilteredItems} מוצרים</p>
      <form>
        <label htmlFor='sort'>מיון לפי</label>
        <select name='sort' id='sort' className='sort-input'>
          <option value='price-lowest'>מחיר (נמוך לגבוהה)</option>
          <option value='price-highers'>מחיר (גבוהה לנמוך)</option>
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
      padding: 0 0.5rem;
      background: transparent;
      border: 1px solid var(--clr-heading-3);
      border-radius: var(--radius);
      cursor: pointer;
      color: var(--clr-heading-3);
      &:hover{
        transition: var(--transition);
        color: var(--clr-paragraph-5);
      }
      svg {
        font-size: 2rem;
      }
    }
  }
  p {
    font-size: 1.25rem;
    margin: 0 2rem;
  }
  form {
    .sort-input{
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
