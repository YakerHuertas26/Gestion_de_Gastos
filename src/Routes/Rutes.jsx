import { BrowserRouter,Routes,Route } from "react-router-dom";
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

    
const Rutes = () => {
    const {user,setUser}=useStoreAPP()
    useEffect(()=>{
            onAuthStateChanged(auth,(usuario)=>{
            setUser(usuario) 
            
        })
    },[])
    console.log(user);
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