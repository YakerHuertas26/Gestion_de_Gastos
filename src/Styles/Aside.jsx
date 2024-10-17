import styled from 'styled-components';
const Footer = styled.footer`
  /* border: solid red 2px; */
  display: flex;
  align-items: center;
  padding:0 4rem;
  justify-content: space-between;
  position: fixed;
  height: 4rem;
  width: 100%;
  bottom: 0;
  background-color: #338458;
  @media (max-width:50rem) {
    padding: 0 1rem;
    
  }
`;

const ParrafoStyled = styled.p`
  font-size: 2rem;
  font-weight: 700;
  @media (max-width:50rem) {
    font-size: 1.3rem;
    
  }
`;

export {ParrafoStyled,Footer};