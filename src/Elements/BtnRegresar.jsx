import { useNavigate } from "react-router";
import { BtnRegresar } from "../Styles/BotonRegresar";
import { IoChevronBack } from "react-icons/io5";

const ButonRegresar = ({ruta= '/'}) => {
    const regresar=useNavigate();
    return ( 
        <BtnRegresar onClick={()=>regresar(ruta)} ><IoChevronBack className="icon"/></BtnRegresar>
     );
}
 
export default ButonRegresar;