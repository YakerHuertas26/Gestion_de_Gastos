
import FormularioGastos from "../Components/FormularioGastos";
import { HeaderPageEditar } from "../Components/HeaderPage";
import { FooterPage } from "../Elements/ElementFooter";
// para poder extraer el id del link 
import { useParams } from "react-router-dom";
import { ObtenerUnGasto } from "../FireBase/Gastos";
import { Toaster } from "sonner";


const EditarGasto = () => {
    // extraigo el id
    const {id}= useParams();
   const [datosEdit]=ObtenerUnGasto(id);
   
   
    return ( 
        <>
        <HeaderPageEditar titulo="Editar Gasto"/>
        <FormularioGastos datosEdit={datosEdit}/>
        <FooterPage />
        <Toaster expand visibleToasts={2} richColors/>
        </>
     );
}
 
export default EditarGasto;