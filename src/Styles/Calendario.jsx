import styled from "styled-components";


const ContenedorInputFecha = styled.div`
    position: absolute;
    right: 0;
    height: 3.6rem;
    width:25rem;
    border-radius: 2rem;
    input {
        box-sizing: border-box;
        border: none;
        background: rgba(225,225,225, 0.6);
        cursor: pointer;
        border-radius: 2rem; /* 10px */
        height: 100%; /* 80px */
        width: 100%;
        padding: 0 1.25rem; /* 20px */
        font-size: 1.5rem; /* 24px */
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        outline: none;
    }
 
    .rdp {
        position: absolute;
        padding: 0 2rem;
        
    }
 
    .rdp-months {
        display: flex;
        justify-content: center;
        padding: 0 2rem;
        
    }
    .rdp-nav{
        z-index: 101;
        margin-right: 1rem;
    }
 
    .rdp-month {
        background: #3a3838;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        padding: 20px;
        border-radius: 10px;
        z-index: 100;
        margin-left: 0.5rem;
        
        
    }
 
    @media (max-width: 60rem) {
        /* 950px */
        & > * {
            width: 100%;
        }
    }
`;
export default ContenedorInputFecha;