import { Botton } from "../Styles/Botones";
import { TituloStyled } from "../Styles/HeaderStyled";

const Titulo = ({titulo}) => {
    return ( 
        <TituloStyled>{titulo}</TituloStyled>
     );
}

const Boton = ( {desciption,secundario,link}) => {
    return ( 
        <Botton secundario={secundario} to={link}>{desciption}</Botton>
    );
}



export {Titulo,Boton};


