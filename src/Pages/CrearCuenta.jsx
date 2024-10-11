
import { HeaderFomulario, InputPassword, InputUser } from "../Components/Formulario";
import { ContenedorSesion } from "../Styles/ContenedorSesion";
import { ConteinerHeard, ContentButonStyled, HeaderStyled } from "../Styles/HeaderStyled";
import icono1 from '../Assets/icono.png'
import { ContenedorFomulario, Formulario } from "../Styles/FormularioStyled";
import { Boton, Titulo } from "../Elements/E_Header";
import useStoreAPP from "../Store/Store";


const CrearCuenta = () => {
    const {emailCreateAccount,passwordCreateAccount,confirmPasswordCreateAccount} =useStoreAPP()

    const enviarDatos=(e)=>{
        e.preventDefault();

        // expresión regular para validad correo gmail
        const expretionRegular= /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        if (!expretionRegular.test(emailCreateAccount)) {
            console.log('no es correcto');
            return}
        if (emailCreateAccount===''||passwordCreateAccount==="" || confirmPasswordCreateAccount==="") {
            console.log('llenar todos los campos');
            return} 
        if (passwordCreateAccount!==confirmPasswordCreateAccount) {
            console.log('password difirent');
            return
        }
        
        console.log('enviando',emailCreateAccount,passwordCreateAccount,confirmPasswordCreateAccount);
        
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