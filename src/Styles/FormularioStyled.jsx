import styled from 'styled-components';

const ContenedorFomulario = styled.div`
    /* border: solid 2px red; */
    width: 34rem;
    height: 34rem;
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
  width: 7rem;
  height: 7rem;
  position: absolute;
  top: -40px;

`;

const Formulario = styled.form`
   /* border: solid 2px green; */
   width: 29rem;
   height: 25rem;
   margin-top: 1rem;
   display: flex;
   flex-direction: column;
   padding: 0.5rem;
   gap: 3rem;
   justify-content: center;
   align-items: center;
  
`;
const ContentInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3.2rem;
  background: rgba(225,225,225, 0.6);
  position:relative;
  border-radius: 40rem;
  width: 100%;
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
  width: 89%;
  height: 2.5rem;
  /* border: 2px solid red; */
  border: none;
  background: transparent;
  color: #000;
  font-weight: 700;
  font-size: 1.4rem;
  margin-left: 1rem;
  &::placeholder{
    color: #fff;
    font-weight: 500;
  }
  &:focus{
    border: none;
    outline: none;
  }
`;


export {ContenedorFomulario,IconoEncabezado,Formulario,ContentInput,InputStyled};