import {Navigate } from "react-router";
import useStoreAPP from "../Store/Store";


const RutasProtejidas = ({children}) => {
    
    const {user}=useStoreAPP();

    if (!user) {
        return <Navigate to="../Iniciar_sesion" /> 
    }
    return (

        children
    ) 
     
}
 
export default RutasProtejidas;