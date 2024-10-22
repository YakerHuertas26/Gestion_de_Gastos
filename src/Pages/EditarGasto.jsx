
import FormularioGastos from "../Components/FormularioGastos";
import HeaderPage from "../Components/HeaderPage";
import { FooterPage } from "../Elements/ElementFooter";
// para poder extraer el id del link 
import { useParams } from "react-router-dom";
import { ObtenerUnGasto } from "../FireBase/Gastos";


const EditarGasto = () => {
    // extraigo el id
    const {id}= useParams();
   const [datos]=ObtenerUnGasto(id);
   console.log(datos.data().categoria);
   
   
   
    return ( 
        <>
        <HeaderPage titulo="Editar Gasto"/>
        <FormularioGastos/>
        <FooterPage />
        </>
     );
}
 
export default EditarGasto;