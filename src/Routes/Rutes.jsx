import {Routes,Route, BrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import IniciarSesion from "../Pages/IniciarSesion";
import CrearCuenta from "../Pages/CrearCuenta";
import CategoriaGasto from "../Pages/CategoriaGasto";
import ListaGasto from "../Pages/ListaGasto";
import Error404 from "../Pages/Error404";
import { auth } from "../FireBase/Config";
import useStoreAPP from "../Store/Store";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import RutasProtejidas from "./RutasProtegidas";
import EditarGasto from "../Pages/EditarGasto";


    
const Rutes = () => {
    const {setUser}=useStoreAPP();

    useEffect( ()=>{
         const sesionActive= onAuthStateChanged(auth, (usuario)=>{
                setUser(usuario)
            
        });
        return ()=> sesionActive();
    },[]) 

    
    return ( 
        
        <BrowserRouter>
            <Routes>
                {/* rutas publicas */}
                <Route path="Iniciar_sesion" element={<IniciarSesion/>} />
                <Route path="Crear_cuenta" element={<CrearCuenta/>} />

                {/* rutas protegidas */}
                <Route path="/" element={<RutasProtejidas><Home/></RutasProtejidas>} />
                <Route path="/Categoria" element={<RutasProtejidas> <CategoriaGasto/></RutasProtejidas>} />
                <Route path="/Lista_gasto" element={<RutasProtejidas> <ListaGasto/></RutasProtejidas>} />
                <Route path="/Editar_gasto/:id" element={<RutasProtejidas><EditarGasto /></RutasProtejidas>} />
                
                <Route path="*"  element={<Error404/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Rutes; 