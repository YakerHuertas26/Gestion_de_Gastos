import styled from 'styled-components';

const HeaderStyled = styled.div`
    width: 100%;
    padding: 2rem ; 
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10vh;
    
    @media(max-width: 500px){ /* 950px */
        justify-content: space-between;
        height: 15vh;
        margin-top: 1.4rem;
    }
`;
const ConteinerHeard = styled.div`
 
    width: 100%;
    display: flex;
    justify-content: space-between;
    
 
    @media(max-width: 500px){ /* 950px */
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        gap: 1rem;
        margin-top: 1rem;
 
        & > div {
            display: flex;
            margin-bottom: 0.5rem;
            justify-content: end;
        }
    }
`;
const TituloStyled = styled.h2`
  text-transform: uppercase;
  font-size: 3rem;
  @media(max-width: 500px) {
    font-size: 1.8rem;
    
  }
`;


const ContentButonStyled = styled.div`
   
    display: flex;
    justify-content: space-around;
    align-items: center;
    
`;



export {HeaderStyled,ContentButonStyled,TituloStyled,ConteinerHeard};
