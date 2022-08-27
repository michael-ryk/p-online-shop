import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterStyle>
      <h5>
        &copy; {new Date().getFullYear()}
        <span> Online shop</span>
      </h5>
      <p>All rights preserved</p>
    </FooterStyle>
  );
};

const FooterStyle = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: 5rem;
  background-color: var(--clr-heading-4);

  span {
    color: var(--clr-primary-5);
  }

  h5,
  p {
    color: var(--clr-paragraph-8);
    font-weight: bold;
    margin: 0.5rem;
  }
`;

export default Footer;
