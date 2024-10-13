import useStoreAPP from "../Store/Store";
import { IconoEncabezado, InputStyled } from "../Styles/FormularioStyled";


const Icono = ({ruta}) => {
    return ( 
        <IconoEncabezado src={ruta} alt="Icono crear cuenta" />
    );
}
export { Icono };