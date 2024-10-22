
import {ButonRegresar, ButonRegresar2 } from "../Elements/BtnRegresar";
import { Titulo } from "../Elements/E_Header";
import { HeaderStyled } from "../Styles/HeaderStyled";



const HeaderPage = ({titulo}) => {
    
    return ( 
        <HeaderStyled>
                <ButonRegresar ruta="/" />
                <Titulo titulo={titulo}/>
        </HeaderStyled>
     );
}

const HeaderPageEditar = ({titulo}) => {
    
    return ( 
        <HeaderStyled>
                <ButonRegresar2 ruta="/Lista_gasto" />
                <Titulo titulo={titulo}/>
        </HeaderStyled>
     );
}
 
export {HeaderPage,HeaderPageEditar};