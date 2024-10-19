import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import useStoreAPP from "../Store/Store";

const Calendario = () => {
    const {fecha,setFecha}=useStoreAPP();


    console.log(fecha);
    
    return ( 
        
        
        <div>
            <DayPicker
               mode="single"
               selected={fecha}
               onSelect={setFecha}
              
            />
        </div>
     );
}
 
export default Calendario;