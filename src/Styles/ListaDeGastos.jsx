import styled from "styled-components";


const Lista = styled.ul`
  /* border: solid 2px red; */
  list-style: none;
  padding: 0 2.5rem; /* 40px */
  height: 78vh;
  width: 95%;
  margin: 0 auto;
  overflow-y: auto;
  scrollbar-width: none;
  border-radius: 2rem;

  background: rgba(255, 255, 255, 0.1);

  li {
    grid-template-columns: 1fr 1fr 1fr auto;
    
  }

  @media (max-width: 50rem) {
    /*80px*/
    li {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
    }
  }
`;

const ElementoLista = styled.li`
  /* border: solid 2px green; */
  padding: 1.25rem 0; /* 20px */
  /* border-bottom: 2px solid #f2f2f2; */
  display: grid;
  gap: 4rem; /* 5px */
  justify-content: space-between;

  & > div {
    width: 100%;
    display: flex;
    align-items: center;
  }

  &:hover button,
  &:hover a {
    opacity: 1;
  }
`;



const Categoria = styled.div`
/* border: solid 2px red; */
  font-weight: 500;
  font-size: 1.6rem; /* 20px */
  text-transform: uppercase;
  display: flex;
  align-items: center;


  @media (max-width: 50rem) {
    /* 80px */
    font-size: 1.12rem;
  }
`;

const Descripcion = styled.div`
/* border: solid 2px red; */
  justify-content: center;
  font-size: 1.6rem;
  text-transform: capitalize;
  @media (max-width: 50rem) {
    /* 50px */
    justify-content: end;
  }
`;

const Valor = styled.div`
  font-size: 1.6rem; /* 20px */
  font-weight: 700;
  justify-content: end;

  @media (max-width: 50rem) {
    /* 80px */
    justify-content: start;
  }
`;

const Fecha = styled.div`
  border-radius: 0.31rem; /* 5px */
  background: #3f68f1;
  text-align: center;
  color: #fff;
  padding: 0.62rem 3.12rem; /* 10px 50px */
  display: inline-block;
  margin: 1.25rem 0; /* 20px */

  @media (max-width: 50rem) {
    /* 80px */
    width: 100%;
  }
`;

const ContenedorBotones = styled.div`
  @media (max-width: 50rem) {
    /* 80px */
    justify-content: end;
  }
`;

const BotonAccion = styled.button`
  outline: none;
  background: #adababd0;
  border: none;
  width: 2.5rem; /* 40px */
  display: inline-block;
  height: 2.5rem; /* 40px */
  line-height: 2.5rem; /* 40px */
  font-size: 16px;
  cursor: pointer;
  border-radius: 0.31rem; /* 5px */
  margin-left: 0.625rem; /* 10px */
  /* transition: 0.3s ease all; */
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 2.5rem;
  /* opacity: 0; */

  /* &:hover {
    background: #6a6969;
  } */

  @media (max-width: 50rem) {
    /* 80px */
    opacity: 1;
  }
`;

const ContenedorSubtitulo = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Subtitulo = styled.h3`
  color:  #6a6969;
  font-weight: 400;
  font-size: 40px;
  padding: 2.5rem 0; /* 40px */
`;

const ContenedorBotonCentral = styled.div`
  display: flex;
  justify-content: center;
  margin: 2.5rem; /* 40px */
`;

const BotonCargarMas = styled.button`
  background:  #b7b4b4;
  border: none;
  border-radius: 7px;
  color: #000;
  padding: 1rem 1.87rem; /* 20px 30px */

  font-size: 1.25rem; /* 20px */
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  outline: none;
  transition: 0.3s ease all;

  &:hover {
    background:  #c1ede1;
  }
`;
const ListaDeCategorias = styled.ul`
    /* border: 2px red solid; */
    list-style: none;
    padding: 0rem; /* 40px */
    height: 85vh;
    overflow-y: auto;
    width: 90%;
    margin: 0 auto;
`;
 
const ElementoListaCategorias = styled.li`
    padding: 1.25rem 0; /* 20px */
    border-bottom: 2px solid #F2F2F2;
    display: flex;
    gap: 3rem;
    justify-content: space-between;
`;

export {
    Lista,ElementoLista,Categoria,Descripcion,Valor,
    Fecha,ContenedorBotones,BotonAccion,BotonCargarMas,ContenedorBotonCentral,ContenedorSubtitulo,Subtitulo,ListaDeCategorias,ElementoListaCategorias
};
