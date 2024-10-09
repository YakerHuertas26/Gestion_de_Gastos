import { Boton, Titulo } from "../b_Element/E_Header";
import { HeaderFomulario, InputPassword, InputUser } from "../Components/Formulario";
import { ContenedorSesion } from "../Styles/ContenedorSesion";
import { ConteinerHeard, ContentButonStyled, HeaderStyled } from "../Styles/HeaderStyled";
import icono1 from '../Assets/icono.png'
import { ContenedorFomulario, Formulario } from "../Styles/FormularioStyled";


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

            <ContenedorFomulario >
                <HeaderFomulario ruta={icono1}/>
                <Formulario  >
                    <InputUser name="Correo Electrónico"/>
                    <InputPassword name="Constraseña"/>
                    <InputPassword name="Confirmar Constraseña"/>
                    <Boton login="login" desciption="Registrarse"/>
                </Formulario>
            </ContenedorFomulario>

       </ContenedorSesion> 
     );
}
 
export default CrearCuenta;