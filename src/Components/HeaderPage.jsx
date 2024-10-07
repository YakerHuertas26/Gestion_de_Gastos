
import { Titulo } from "../b_Element/E_Header";
import {  HeaderStyled } from "../Styles/HeaderStyled";
import ButonRegresar from "../b_Element/BtnRegresar";


const HeaderPage = ({titulo}) => {
    
    return ( 
        <HeaderStyled>
                <ButonRegresar/>
                <Titulo titulo={titulo}/>
        </HeaderStyled>
     );
}
 
export default HeaderPage;