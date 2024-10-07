import { Boton, Titulo } from "../b_Element/E_Header";
import { ContenedorSesion } from "../Styles/ContenedorSesion";
import { ConteinerHeard, ContentButonStyled, HeaderStyled } from "../Styles/HeaderStyled";

const CrearCuenta = () => {
    return ( 
       <ContenedorSesion>
            <HeaderStyled>
            <ConteinerHeard>
                <Titulo titulo="Crear Cuenta"/>
                <ContentButonStyled>
                    <Boton secundario="secundario" desciption="Iniciar Sesión" link='../Iniciar_sesion' />
                </ContentButonStyled>
            </ConteinerHeard>
        </HeaderStyled>
       </ContenedorSesion> 
     );
}
 
export default CrearCuenta;