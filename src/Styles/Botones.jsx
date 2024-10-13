import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Botton = styled(NavLink)`
    background: ${props=> props.$secundario ? '#14F97D':'#0347F5'};
    color: ${props=> props.$secundario? '#112C50': '#Fff' };
      margin: 0px 1rem;
      border: none;
      border-radius: 1rem;
      height: 100%;
      max-height: 4rem;
      width: ${props=> props.$icono ? '14rem' : '12rem'};
      font-size: 1.4rem;
      font-weight: 700;
      cursor: pointer;
      display: inline-flex;
      justify-content: space-around;
      align-items: center;
      text-decoration: none;
      .icono {
          height: ${(props) => props.$iconoGrande ? '100%' : '1.2rem'};  /* 12px */
          fill: white;
      }
      @media (max-width: 550px) {
      height: 3.4rem;
      width: 9.3rem;
      font-size: 1.2rem;
  
  }
  `;



export {Botton};