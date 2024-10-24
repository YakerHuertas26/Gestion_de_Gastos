import { signOut } from "firebase/auth";
import { auth } from "../FireBase/Config";
import { BtnRegresar } from "../Styles/BotonRegresar";
import { MdLogin } from "react-icons/md";
import { useNavigate } from "react-router";


const CloseLogin = () => {

    const navigate=  useNavigate();

    const closesetion=()=>{
        try {
            signOut(auth)
            navigate('Iniciar_sesion')
        }
        catch (error) {
            console.log(error);
        }

    }
    return (       
        <BtnRegresar onClick={closesetion}>
            <MdLogin className="icon"/>
        </BtnRegresar>
        
     );
}
 
export default CloseLogin;