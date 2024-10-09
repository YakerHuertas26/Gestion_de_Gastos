import { IconoEncabezado, InputStyled } from "../Styles/FormularioStyled";


const Icono = ({ruta}) => {
    return ( 
        <IconoEncabezado src={ruta} alt="Icono crear cuenta" />
    );
}

const Input = ({name}) => {
    return ( 
        <InputStyled 
            type="text"
             placeholder={name}/>
    );
}

const Password = ({name}) => {
    return ( 
        <InputStyled 
            type="password"
             placeholder={name}/>
    );
}



export { Icono,Input,Password };