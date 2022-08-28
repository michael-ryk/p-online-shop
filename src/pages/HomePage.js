import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomePage = () => {

  return (
    <HomeStyles>
      <h1>חנות למוצרים חיוניים</h1>
      <div className='center-container'>
        <div className='center-text'>
          <p>הגעתם לחנות אונליין למוצרים חיוניים. אנחנו מעמינים באיכות השירות לאורך השנים ונאמנות ללקוחות שלנו.</p>
          <br />
          <p>אתם מוזמנים לעיין ולהתרשם ממגוון מוצרים שחברה שלנו מספקת </p>
        </div>
        <div className='center-img'>
          <img src='https://www.allstoragesystems.com.au/wp-content/uploads/2021/07/home-hero-warehouse.jpg' alt='storage' />
        </div>
      </div>
      <Link to='/products'>התחל בחווית קניות עכשיו</Link>
    </HomeStyles>
  );
}

const HomeStyles = styled.section`
  max-width: var(--max-width);
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  text-align: right;
  background-color: var(--clr-paragraph-10);
  
  h1 {
    margin: 2rem auto;
    color: var(--clr-heading-3);
    font-size: 3rem;
  }

  .center-container{
    display: flex;
    flex-direction: row-reverse;
    padding: 0 1rem;
  }

  .center-text{
    max-width: 500px;
    font-size: 1.5rem;
    align-self: center;
    line-height: 2rem;
    margin: 1rem 0;
    padding: 0 0.5rem;
  }

  .center-img {
    
  }

  .center-img img {
    width: 100%;
  }

  a {
    font-size: 2.5rem;
    margin: 2rem auto;
    padding: 0.5rem 1rem;
    border-radius: var(--radius);
    color: var(--clr-primary-5);

    &:hover{
      background-color: var(--clr-paragraph-8);
      color: var(--clr-primary-3);
    }
  }

  @media only screen and (max-width: 600px){
    width: 90vw;

    .center-container{
      flex-direction: column;
    }

    a{
      text-align: center;
    }
  }
`

export default HomePage;