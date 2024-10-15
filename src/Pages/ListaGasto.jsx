import HeaderPage from "../Components/HeaderPage";
import useStoreAPP from "../Store/Store";

const ListaGasto = () => {
    const {user}=useStoreAPP();
    console.log(user);
    
    return ( 
        <HeaderPage titulo="Lista de Gastos"/>
     );
}
 
export default ListaGasto;