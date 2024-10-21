import HeaderPage from "../Components/HeaderPage";
import { FooterPage } from "../Elements/ElementFooter";
import { ObtenerListaDeGasto } from "../FireBase/Gastos";
import useStoreAPP from "../Store/Store";

const ListaGasto = () => {
    const {user}= useStoreAPP();
    const [listDeGasto]= ObtenerListaDeGasto();
    console.log(listDeGasto);
    
    return ( 
        <>
        <HeaderPage titulo="Lista de Gastos"/>
        <FooterPage/>
        </>
     );
}
 
export default ListaGasto;