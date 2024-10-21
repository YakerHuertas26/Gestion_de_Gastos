import HeaderPage from "../Components/HeaderPage";
import { FooterPage } from "../Elements/ElementFooter";
import { ObtenerListaDeGasto } from "../FireBase/Gastos";

const ListaGasto = () => {
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