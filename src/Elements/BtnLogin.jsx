import { signOut } from "firebase/auth";
import { auth } from "../FireBase/Config";
import { BtnRegresar } from "../Styles/BotonRegresar";
import { MdLogin } from "react-icons/md";
import useStoreAPP from "../Store/Store";
import { useNavigate } from "react-router";


const CloseLogin = () => {

    const navigate=  useNavigate();

    const closesetion= async()=>{
        try {
            await signOut(auth)
            navigate('Iniciar_sesion')
        } catch (error) {
            
        }
        
    }
    return (       
        <BtnRegresar onClick={closesetion}>
            <MdLogin className="icon"/>
        </BtnRegresar>
        
     );
}
 
export default CloseLogin;