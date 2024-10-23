import { useEffect } from "react";
import {HeaderPage} from "../Components/HeaderPage";
import { FooterPage } from "../Elements/ElementFooter";
import { GastoPorMes } from "../FireBase/Gastos";
import useStoreAPP from "../Store/Store";



const CategoriaGasto = () => {
  
    
    return ( 
        <>
        <HeaderPage titulo="Gastos por categoría"/>
        <FooterPage />
        </>
     );
}
 
export default CategoriaGasto;