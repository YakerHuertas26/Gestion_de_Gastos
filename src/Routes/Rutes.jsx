import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "../Pages/Home";
import IniciarSesion from "../Pages/IniciarSesion";
import CrearCuenta from "../Pages/CrearCuenta";
import CategoriaGasto from "../Pages/CategoriaGasto";
import ListaGasto from "../Pages/ListaGasto";
import Error404 from "../Pages/Error404";



const Rutes = () => {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="Iniciar_sesion" element={<IniciarSesion/>} />
                <Route path="Crear_cuenta" element={<CrearCuenta/>} />
                <Route path="Categoria" element={<CategoriaGasto/>} />
                <Route path="Lista_gasto" element={<ListaGasto/>} />
                <Route path="*"  element={<Error404/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Rutes;