import {Navigate } from "react-router";
import useStoreAPP from "../Store/Store";


const RutasProtejidas = ({children}) => {
    
    const {user,loading}=useStoreAPP();
    if (loading) {
        return <p>CARGANDO ....</p>
    }
    if (!user) {
        return <Navigate to="../Iniciar_sesion" /> 
    }
    return (

        children
    ) 
     
}
 
export default RutasProtejidas;