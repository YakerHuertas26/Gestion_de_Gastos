import { Botton } from "../Styles/Botones";
import { TituloStyled } from "../Styles/HeaderStyled";

const Titulo = ({titulo}) => {
    return ( 
        <TituloStyled>{titulo}</TituloStyled>
     );
}

const Boton = ( {desciption,secundario,link,type,as,icono,iconobtn}) => {
    return ( 
        <Botton as={as} type={type} $secundario={secundario} to={link} $icono={icono} >{desciption}{iconobtn}
        </Botton>
    );
}



export {Titulo,Boton};


