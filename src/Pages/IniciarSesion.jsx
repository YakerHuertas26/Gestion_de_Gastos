
import { HeaderFomulario, InputPassword, InputUser } from "../Components/Formulario";
import { ContenedorSesion } from "../Styles/ContenedorSesion";
import { ConteinerHeard, ContentButonStyled, HeaderStyled } from "../Styles/HeaderStyled";
import icono2 from '../Assets/icono2.png'
import { ContenedorFomulario, Formulario } from "../Styles/FormularioStyled";
import { Boton, Titulo } from "../Elements/E_Header";

const IniciarSesion = () => {
    return ( 
    <ContenedorSesion>
        <HeaderStyled>
            <ConteinerHeard>
                <Titulo titulo="Iniciar Sesión"/>
                <ContentButonStyled>
                    <Boton desciption="Regístrate" link='../Crear_cuenta' />
                </ContentButonStyled>
            </ConteinerHeard>
        </HeaderStyled>

        <ContenedorFomulario >
            <HeaderFomulario ruta={icono2} titulo="Bienvenido"/>
            <Formulario >
                <InputUser name="Correo Electrónico"/>
                <InputPassword name="Constraseña"/>
                
                <Boton 
                desciption="Iniciar Sesión" secundario="secundario"
                type="submit"/>
            </Formulario>
        </ContenedorFomulario>

   </ContenedorSesion> 
     );
}
 
export default IniciarSesion;