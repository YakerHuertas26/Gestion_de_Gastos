
import { FaUserAlt } from "react-icons/fa";
import { ContentInput } from "../Styles/FormularioStyled";
import { RiLockPasswordLine } from "react-icons/ri";
import { Titulo } from "../Elements/E_Header";
import { Icono, Input, Password } from "../Elements/ElementFormulario";


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
        <ContentInput>
            <Input name={name} funtion={funtion}/>
            <div className="contenedorIcono">
            <FaUserAlt className="icono"/>
            </div>
        </ContentInput>
    );
}

const InputPassword = ({name,funtion}) => {
    return ( 
        <ContentInput>
            <Password name={name} funtion={funtion}/>
            <div className="contenedorIcono">
            <RiLockPasswordLine className="icono" />
            </div>
        </ContentInput>
    );
}


export { HeaderFomulario,InputUser,InputPassword };