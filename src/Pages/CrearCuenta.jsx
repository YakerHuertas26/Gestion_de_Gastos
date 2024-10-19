import { HeaderFomulario, InputPassword, InputUser } from "../Components/Formulario";
import { ContenedorSesion } from "../Styles/ContenedorSesion";
import { ConteinerHeard, ContentButonStyled, HeaderStyled } from "../Styles/HeaderStyled";
import icono1 from '../Assets/icono.png'
import { ContenedorFomulario, ContentInput, CoteienerInputandError, Formulario, InputStyled } from "../Styles/FormularioStyled";
import { Boton, Titulo } from "../Elements/E_Header";
import {createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../FireBase/Config";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { Toaster,toast } from 'sonner';




const CrearCuenta = () => {
    // const {emailCreateAccount,passwordCreateAccount,confirmPasswordCreateAccount} =useStoreAPP()
    const navigate= useNavigate()

    // useFrom

    const {register, formState:{errors},handleSubmit,watch} = useForm();

    const createUser=  handleSubmit(async (data)=>{
        const email= data.emailCreateAccount
        const password= data.passwordCreateAccount
        try {
            await createUserWithEmailAndPassword(auth,email,password)
            
            toast.success('Usuario creado correctamente',{
                duration: 1000,
                position: 'top-center'
            })
            setTimeout(()=>{
                navigate("../Iniciar_sesion")
            },1300)
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
           toast.error(`${mensaje}`,{
            duration: 1000,
             position: 'top-center'
           })
           
        }
        
    })
    
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
                <Formulario onSubmit={createUser} >
                    <CoteienerInputandError>
                    <ContentInput>
                        <InputStyled type="email" placeholder="Correo Electrónico"
                        {...register ('emailCreateAccount', {required:{value:true, message:"Completar Campo"},pattern:{value:/^[a-zA-Z0-9._%+-]+@gmail\.com$/, message:'Correo invalido (@gmail.com)'}})} />
                        <InputUser name="Nombre" funtion="emailCrearCuenta"/>
                    </ContentInput>
                        {errors.emailCreateAccount && <span>{errors.emailCreateAccount.message}</span>}
                    </CoteienerInputandError>
                    
                    <CoteienerInputandError>
                        <ContentInput>
                            <InputStyled type="password" placeholder="Contraseña"
                            {...register('passwordCreateAccount',{required:{value:true, message:"Completar Campo"},minLength:{value:8,message:"La contraseña debe tener a menos 8 carácteres"}})}
                            />
                            <InputPassword name="Constraseña" funtion="contraseñaCrearCuenta"/>
                        </ContentInput>
                        {errors.passwordCreateAccount && <span>{errors.passwordCreateAccount.message}</span>}
                    </CoteienerInputandError>

                    <CoteienerInputandError>
                        <ContentInput>
                            <InputStyled type="password" placeholder="Confirmar Contraseña"
                            {...register ('confirmarPassword',{required:{value:true, message:"Completar Campo"},
                            validate:value=> value===watch('passwordCreateAccount') || "Las contraseñas no coinciden"
                                
                            })}
                            />
                            <InputPassword name="Confirmar Constraseña" funtion="confirmarcontraseñaCrearCuenta"/>
                        </ContentInput>
                        {errors.confirPassword && <span>{errors.confirPassword.message}</span>}
                    </CoteienerInputandError>
                    <Boton as="button" type="submit" desciption="Registrarse" />
                    <Toaster expand visibleToasts={2} richColors/>
                </Formulario>
            </ContenedorFomulario>

       </ContenedorSesion> 
     );
}
 
export default CrearCuenta;