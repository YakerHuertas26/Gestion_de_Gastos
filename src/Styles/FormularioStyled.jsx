import styled from 'styled-components';

const ContenedorFomulario = styled.div`
    /* border: solid 2px red; */
    width: 40rem;
    height: 38rem;
    margin: 0 auto;
    border-radius: 2rem;
    background: rgba(255, 255, 255, 0.1);
    position: relative;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    & > H2{
        margin-top: 4rem;
    }
    @media (max-width:50rem) {
        width: 30rem;
    }
`;
const IconoEncabezado = styled.img`
  width: 8rem;
  height: 8rem;
  position: absolute;
  top: -40px;

`;

const Formulario = styled.form`
   /* border: solid 2px green; */
   width: 80%;
   height: 30rem;
   margin-top: 0.5rem;
   display: flex;
   flex-direction: column;
   padding: 0.5rem;
   gap: 2rem;
   justify-content: center;
   align-items: center;
  
`;
const CoteienerInputandError= styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  
  span{
    color: red;
    font-size: 1.4rem;
    margin-left: 1rem;
    font-weight: 600;

  }

`
const ContentInput = styled.div`

  display: flex;
  align-items: center;
  justify-content:${props => props.$agregarGasto? 'center': 'space-between'};
  height: 3.6rem;
  background: rgba(225,225,225, 0.6);
  position:relative;
  border-radius: 40rem;
  width:100%;

   .contenedorIcono{
    
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #000;

   }
  
  .icono{
    width: 3rem;
    height: 3rem;
    background-color: #000;
    border-radius: 50%;
    /* border: solid 2px red; */

  }
`;

const InputStyled = styled.input`
  width: ${props=>props.$agregarGasto?'100%':'80%'};
  border-radius:${props=>props.$agregarGasto?'2rem':'0'} ;
  height: 2.5rem;
  border: none;
  background: transparent;
  color: ${props=>props.$agregarGasto? '#FFF':'#000'};
  font-weight: 700;
  font-size: 1.6rem;
  margin-left:${props=>props.$agregarGasto?'none':'1rem'} ;
  text-align:${props=>props.$agregarGasto&&'center'};
  &::placeholder{
    color: #fff;
    font-weight: 500;
  }
  &:focus{
    border: none;
    outline: none;
  }
`;


export {ContenedorFomulario,IconoEncabezado,Formulario,ContentInput,InputStyled,CoteienerInputandError};