
import { HeaderFomulario, InputPassword, InputUser } from "../Components/Formulario";
import { ContenedorSesion } from "../Styles/ContenedorSesion";
import { ConteinerHeard, ContentButonStyled, HeaderStyled } from "../Styles/HeaderStyled";
import icono1 from '../Assets/icono.png'
import { ContenedorFomulario, Formulario } from "../Styles/FormularioStyled";
import { Boton, Titulo } from "../Elements/E_Header";


const CrearCuenta = () => {
    const enviarDatos=(e)=>{
        e.preventDefault();
        console.log('enviando');
        
    }
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
                <HeaderFomulario ruta={icono1} titulo="Crear Cuenta"/>
                <Formulario onSubmit={enviarDatos}>
                    <InputUser name="Correo Electrónico" funtion="emailCrearCuenta"/>

                    <InputPassword name="Constraseña" funtion="contraseñaCrearCuenta"/>
                    
                    <InputPassword name="Confirmar Constraseña" funtion="confirmarcontraseñaCrearCuenta"/>
                    <Boton as="button" type="submit" desciption="Registrarse" />
                </Formulario>
            </ContenedorFomulario>

       </ContenedorSesion> 
     );
}
 
export default CrearCuenta;