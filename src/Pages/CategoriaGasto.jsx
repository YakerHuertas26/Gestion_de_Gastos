import HeaderPage from "../Components/HeaderPage";
import useStoreAPP from "../Store/Store";

const CategoriaGasto = () => {
    const {user,setUser}=useStoreAPP();
    console.log(user);
    return ( 
        <HeaderPage titulo="Gastos por categoría"/>
     );
}
 
export default CategoriaGasto;