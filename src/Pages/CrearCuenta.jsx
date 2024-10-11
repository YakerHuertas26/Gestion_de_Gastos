
import { HeaderFomulario, InputPassword, InputUser } from "../Components/Formulario";
import { ContenedorSesion } from "../Styles/ContenedorSesion";
import { ConteinerHeard, ContentButonStyled, HeaderStyled } from "../Styles/HeaderStyled";
import icono1 from '../Assets/icono.png'
import { ContenedorFomulario, Formulario } from "../Styles/FormularioStyled";
import { Boton, Titulo } from "../Elements/E_Header";
import useStoreAPP from "../Store/Store";
import {createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../FireBase/Config";
import { useNavigate } from "react-router";





const CrearCuenta = () => {
    const {emailCreateAccount,passwordCreateAccount,confirmPasswordCreateAccount} =useStoreAPP()
    const navigate= useNavigate()

    const enviarDatos= async (e)=>{
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
        try {
            
            await createUserWithEmailAndPassword( auth, emailCreateAccount, passwordCreateAccount)
            navigate('/')
        } catch (error) {
            let mensaje;
            switch (error.code) {
                case 'auth/invalid-password':
                    mensaje = 'La contraseña tiene que ser de al menos 6 caracteres.'
                    break;
                case 'auth/email-already-in-use':
                    mensaje = 'Ya existe una cuenta con el correo electrónico proporcionado.'
                break;
                case 'auth/invalid-email':
                    mensaje = 'El correo electrónico no es válido.'
                break;
                default:
                    mensaje = 'Hubo un error al intentar crear la cuenta.'
                break;
            }
            console.log(mensaje);
            
        }
        
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