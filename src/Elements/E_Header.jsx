import { Botton } from "../Styles/Botones";
import { TituloStyled } from "../Styles/HeaderStyled";

const Titulo = ({titulo}) => {
    return ( 
        <TituloStyled>{titulo}</TituloStyled>
     );
}

const Boton = ( {desciption,secundario,link,type,as}) => {
    return ( 
        <Botton as={as} type={type} $secundario={secundario} to={link} >{desciption}
        </Botton>
    );
}



export {Titulo,Boton};


