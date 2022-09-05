import { MdConstruction } from 'react-icons/md';
import styled from 'styled-components';

const UnderConstruction = () => {
  return <AboutStyled>
  <MdConstruction size={100} className='icon' />
  <h1>Page under Construction</h1>
</AboutStyled>
}

const AboutStyled = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  height: 10rem;
  text-align: center;
  color: #fcba03;
  .icon{
    color: #fcba03;
  }
`

export default UnderConstruction;