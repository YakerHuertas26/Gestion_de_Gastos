
import { FaUserAlt } from "react-icons/fa";
import { ContentInput } from "../Styles/FormularioStyled";
import { RiLockPasswordLine } from "react-icons/ri";
import { Titulo } from "../Elements/E_Header";
import { Icono } from "../Elements/ElementFormulario";


const HeaderFomulario = ({ruta,titulo}) => {
    return ( 
            <>
            <Icono ruta={ruta}  />
            <Titulo titulo={titulo} className="titulo"/>
            </>
        
    );
}

const InputUser = ({name,funtion}) => {
    return ( 
                <div className="contenedorIcono">
                <FaUserAlt className="icono"/>
                </div>
    );
}

const InputPassword = ({name,funtion}) => {
    return ( 
            <div className="contenedorIcono">
                <RiLockPasswordLine className="icono" />
            </div>    
    );
}


export { HeaderFomulario,InputUser,InputPassword };