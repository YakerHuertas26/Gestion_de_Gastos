import {Navigate } from "react-router";
import useStoreAPP from "../Store/Store";

const RutasPublicas = ({children}) => {
    const {user}=useStoreAPP();

    if (user) {
        return <Navigate to="/" />
    }
    return ( 
        children
     );
}
 
export default RutasPublicas;