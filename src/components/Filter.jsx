import { useDispatch, useSelector } from 'react-redux';
import { filterActions } from '../store/filter';
import styled from 'styled-components';

const Filter = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.filter.fetchedProducts);
  const {
    filters: { price, min_price, max_price, discount },
  } = useSelector((state) => state.filter);
  const uniqueCategories = new Set(allProducts.map((item) => item.category));
  const categories = ['כל הקטגוריות', ...uniqueCategories];
  const uniqueColors = new Set(allProducts.map((item) => item.color));
  const colors = ['הכל', ...uniqueColors];

  const handleFilterChanges = (e) => {
    // console.log(e.target);
    const name = e.target.name;
    var value = e.target.value;
    if ( name === 'color' ) value = e.target.dataset.color;
    if ( name === 'discount' ) value = e.target.checked;
    dispatch(filterActions.clearFilters());
    dispatch(filterActions.updateFilters({ name, value }));
    dispatch(filterActions.filterProducts());
  };

  const handleClearFilter = () => {
    dispatch(filterActions.clearFilters());
    dispatch(filterActions.sortProducts());
  };

  return (
    <FilterStyles>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
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
          <h2>קטגוריה</h2>
          {categories.map((item, index) => {
            return (
              <button
                key={index}
                type='button'
                name='category'
                value={item}
                onClick={handleFilterChanges}
                className='list-btn'
              >
                {item}
              </button>
            );
          })}
        </div>
        <div className='form-block'>
          <h2>צבע</h2>
          <div className='colors'>
            {colors.map((item, index) => {
              if (item === 'הכל') {
                return (
                  <button
                    key={index}
                    name='color'
                    className='btn-all'
                    onClick={handleFilterChanges}
                    data-color={item}
                  >
                    הכל
                  </button>
                );
              } else {
                return (
                  <button
                    key={index}
                    name='color'
                    className='btn-color'
                    style={{ background: item }}
                    onClick={handleFilterChanges}
                    data-color={item}
                  ></button>
                );
              }
            })}
          </div>
        </div>
        <div className='form-block'>
          <h2>מחיר</h2>
          <p className='price'>{price / 100}</p>
          <input
            type='range'
            name='price'
            min={min_price}
            max={max_price}
            value={price}
            onChange={handleFilterChanges}
          />
        </div>
        <div className='form-block'>
          <h2>מבצעים</h2>
          <input
            type='checkbox'
            name='discount'
            className='discount-input'
            onChange={handleFilterChanges}
            checked={discount}
          />
          <label>פריטים במבצע</label>
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

  .colors {
    display: flex;
    padding: 0.5rem 0;
    @media only screen and (max-width: 450px){
      justify-content: center;
    }
    button {
      margin-left: 0.5rem;
      border: none;
      cursor: pointer;
    }
    .btn-all {
      font-size: 1.25rem;
      background-color: white;
    }
    .btn-color {
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 50%;
    }
  }

  .discount-input {
    margin-left: 0.5rem;
  }

  button {
    display: block;
    cursor: pointer;
  }

  .list-btn {
    border: none;
    background: transparent;
    font-size: 18px;
    letter-spacing: var(--spacing);
    padding: 0.2rem 0.5rem;
    margin: 0.2rem 0;
    color: var(--clr-heading-4);
    &:hover {
      background-color: var(--clr-paragraph-8);
    }
  }

  .price {
    font-weight: bold;
    font-size: 18px;
    color: var(--clr-red-light);
  }

  .clear-btn {
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
