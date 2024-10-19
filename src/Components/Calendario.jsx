import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import useStoreAPP from "../Store/Store";
import { es } from 'date-fns/locale'

const Calendario = () => {
    const {fecha,setFecha,selectFecha}=useStoreAPP();
    
    
    return ( 
        
        
        
            <DayPicker 
               mode="single"
               selected={fecha}
               onSelect={setFecha}
               locale= {es}
               onDayClick={selectFecha}
            />

       
       
     );
}
 
export default Calendario;