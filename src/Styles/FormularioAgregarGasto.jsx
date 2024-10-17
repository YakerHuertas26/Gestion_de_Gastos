import styled from 'styled-components';

const ConteinerForm = styled.div`
    /* border:  solid 2px red; */
    width: 70%;
    margin:  0 auto;
    height: 75%;
    @media (max-width: 50rem) {
        width: 95%;
    }
  
`;
const FormularioGasto = styled.form`
    /* border:  solid 2px red; */
    width: 90%;
    margin:  0 auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .contentSelect{
        width: 24rem;
    }
    @media (max-width: 50rem) {
        width: 100%;
        .contentSelect{
        width: 15rem;
    }
    }
        
`;
const HeaderForm = styled.div`
   /* border:  solid 2px green; */
    width: 95%;
    margin:  0 auto;
    height: 20%; 
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
`;
const MainForm = styled.div`
  /* border:2px solid red; */
  width: 50rem;
  height: 60%;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  justify-content:space-evenly;
  align-items: center;
  @media (max-width: 50rem) {
    width: 30rem;
  }
`;

const Select = styled.select`
    width: 95%;
    height: 100%;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(255, 255, 255, 0.1);
    border: none;
    font-size: 1.5rem;
    color: #fff;
    &:focus{
        outline: none;
    }
`;
const Opciones = styled.option`
    font-size: 1.6rem;
    background-color: #413a3a9f;

    
`;

export {ConteinerForm,FormularioGasto,HeaderForm,MainForm,Select,Opciones};