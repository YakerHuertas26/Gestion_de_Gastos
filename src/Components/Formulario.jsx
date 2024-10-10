import { Titulo } from "../b_Element/E_Header";
import { Icono, Input,Password } from "../b_Element/ElementFormulario";
import { FaUserAlt } from "react-icons/fa";
import { ContentInput } from "../Styles/FormularioStyled";
import { RiLockPasswordLine } from "react-icons/ri";


const HeaderFomulario = ({ruta,titulo}) => {
    return ( 
            <>
            <Icono ruta={ruta}  />
            <Titulo titulo={titulo} className="titulo"/>
            </>
        
    );
}

const InputUser = ({name}) => {
    return ( 
        <ContentInput>
            <Input name={name}/>
            <div className="contenedorIcono">
            <FaUserAlt className="icono"/>
            </div>
        </ContentInput>
    );
}

const InputPassword = ({name}) => {
    return ( 
        <ContentInput>
            <Password name={name}/>
            <div className="contenedorIcono">
            <RiLockPasswordLine className="icono" />
            </div>
        </ContentInput>
    );
}


export { HeaderFomulario,InputUser,InputPassword };