import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NotFound = () => {
  return (
    <ErrorStyles>
      <h2>Sorry... but page you search is not available</h2>
      <button>Go Home</button>
    </ErrorStyles>
  );
};

const ErrorStyles = styled.section`
  padding: 5rem 0;
  margin: 0 auto;
  background-color: var(--clr-primary-10);
  width: 95vw;
  max-width: var(--max-width);
  h2 {
    text-align: center;
  }
  button {
    display: block;
    margin: 1rem auto;
    background: transparent;
    border-color: transparent;
    font-size: 1.7rem;
    cursor: pointer;
    letter-spacing: var(--spacing);
    border: 0;
  }

  button:hover {
    color: var(--clr-green-dark);
  }
`;

export default NotFound;
