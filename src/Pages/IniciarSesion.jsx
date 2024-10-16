
import { HeaderFomulario, InputPassword, InputUser } from "../Components/Formulario";
import { ContenedorSesion } from "../Styles/ContenedorSesion";
import { ConteinerHeard, ContentButonStyled, HeaderStyled } from "../Styles/HeaderStyled";
import icono2 from '../Assets/icono2.png'
import { ContenedorFomulario, ContentInput, CoteienerInputandError, Formulario, InputStyled } from "../Styles/FormularioStyled";
import { Boton, Titulo } from "../Elements/E_Header";
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../FireBase/Config";
import { Toaster, toast } from 'sonner'
import { useNavigate } from "react-router";


const IniciarSesion = () => {
    const {register,handleSubmit,formState:{errors}}=useForm();
    const navigate= useNavigate()

    const Login = handleSubmit(async (data)=>{
        const emailSesion= data.emailSesion;
        const passwordSesion= data.
        passwordSesion;

        try {
            await signInWithEmailAndPassword(auth,emailSesion,passwordSesion)
            navigate('/')
        } catch (error) {
            let mensaje;
            switch (error.code) {
                case 'auth/user-not-found':
                    mensaje= "Usuario no registrado"
                    break;
                case 'auth/invalid-credential':
                    mensaje= "Credenciales no validas"
                    break;
                default:
                    mensaje= "Hubo un problema al Iniciar sesión"
                    break;
            }
            toast.error(`${mensaje}`,{
                position: 'top-center',
                duration:1000
            })
        }
        
    });
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
            <Formulario onSubmit={Login} >
            <CoteienerInputandError>
                    <ContentInput>
                        <InputStyled type="email" placeholder="Correo Electrónico"
                        {...register('emailSesion',{required:{value:true,message:'Completar Campo'},pattern:{value:/^[a-zA-Z0-9._%+-]+@gmail\.com$/,message:"Correo invalido (@gmail.com)"}})}
                        />
                        <InputUser name="Nombre" funtion="emailCrearCuenta"/>
                    </ContentInput>
                        {errors.emailSesion && <span>{errors.emailSesion.message}</span>}
                        
            </CoteienerInputandError>
                    
            <CoteienerInputandError>
                        <ContentInput>
                            <InputStyled type="password" placeholder="Contraseña"
                            {...register('passwordSesion',{required:{value:true, message:"Completar Campo"},minLength:{value:8, message:"La contraseña debe tener a menos 8 carácteres"}})}/>
                            <InputPassword name="Constraseña" funtion="contraseñaCrearCuenta"/>
                        </ContentInput>
                        {errors.passwordSesion&& <span>{errors.passwordSesion.message}</span>}
                        
            </CoteienerInputandError>
                
                <Boton 
                desciption="Iniciar Sesión" secundario={true}
                type="submit" 
                as="button" />
                <Toaster richColors visibleToasts={2}/>
            </Formulario>
        </ContenedorFomulario>

   </ContenedorSesion> 
     );
}
 
export default IniciarSesion;