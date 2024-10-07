import { useNavigate } from "react-router";
import { Titulo } from "../b_Element/E_Header";
import {  HeaderStyled } from "../Styles/HeaderStyled";
import ButonRegresar from "../b_Element/BtnRegresar";


const HeadarCategoriaGasto = () => {
    
    return ( 
        <HeaderStyled>
                <ButonRegresar/>
                <Titulo titulo="Gastos por categoría"/>
        </HeaderStyled>
     );
}
 
export default HeadarCategoriaGasto;