import styled from 'styled-components';
import fondo from './../Assets/fondo.jpg'

const ContenedorSesion = styled.div`
    border: 2px solid green;
    height: 100%;
    background-image: url(${fondo});
    background-repeat: no-repeat;
    background-size:  100% 100%;
    background-position: center;
    position: relative;
    /* z-index: 10; */


    @media (max-width: 500px) {
        background-size:  cover;
    }
`;

export {ContenedorSesion};