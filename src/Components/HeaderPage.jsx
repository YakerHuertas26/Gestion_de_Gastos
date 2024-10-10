
import ButonRegresar from "../Elements/BtnRegresar";
import { Titulo } from "../Elements/E_Header";
import {  HeaderStyled } from "../Styles/HeaderStyled";



const HeaderPage = ({titulo}) => {
    
    return ( 
        <HeaderStyled>
                <ButonRegresar/>
                <Titulo titulo={titulo}/>
        </HeaderStyled>
     );
}
 
export default HeaderPage;