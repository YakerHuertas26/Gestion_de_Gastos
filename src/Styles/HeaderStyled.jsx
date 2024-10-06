import styled from 'styled-components';

const HeaderStyled = styled.header`
  width: 100%;
    padding: 1.6rem ; /* 40px */
    display: flex;
    justify-content: space-between;
    align-items: center;
 
    @media(max-width: 60rem){ /* 950px */
        justify-content: start;
    }
`;
const ConteinerHeard = styled.div`
  border: solid 2px wheat;
    width: 100%;
    display: flex;
    justify-content: space-between;
    
 
    @media(max-width: 500px){ /* 950px */
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
 
        & > div {
            display: flex;
            margin-bottom: 2rem;
            justify-content: end;
        }
    }
`;
const TituloStyled = styled.h2`
  text-transform: uppercase;
  font-size: 2.2rem;
  @media(max-width: 500px) {
    font-size: 1.8rem;
  }
`;


const ContentButonStyled = styled.div`
    border: solid 2px red;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;



export {HeaderStyled,ContentButonStyled,TituloStyled,ConteinerHeard};
