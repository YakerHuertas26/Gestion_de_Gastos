import { Botton } from "../Styles/Botones";
import { TituloStyled } from "../Styles/HeaderStyled";

const Titulo = ({titulo}) => {
    return ( 
        <TituloStyled>{titulo}</TituloStyled>
     );
}

const Boton = ( {desciption,secundario,link,login}) => {
    return ( 
        <Botton secundario={secundario} to={link} login={login}>{desciption}</Botton>
    );
}



export {Titulo,Boton};


