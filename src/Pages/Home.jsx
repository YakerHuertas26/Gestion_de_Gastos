
import FormularioGastos from "../Components/FormularioGastos";
import HeaderComponent from "../Components/Header";
import {FooterPage} from "../Elements/ElementFooter"
import { Toaster} from 'sonner';




const Home = () => {
    
    return (
        <>
        <HeaderComponent />
        <FormularioGastos/>
        <FooterPage /> 
        <Toaster expand visibleToasts={2} richColors/>
        </>
     );
}
 
export default Home;