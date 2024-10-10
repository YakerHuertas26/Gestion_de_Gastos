
import { Boton, Titulo } from "../Elements/E_Header";
import { ConteinerHeard, ContentButonStyled, HeaderStyled } from "../Styles/HeaderStyled";

const HeaderComponent = () => {
    return ( 
        <HeaderStyled>
            <ConteinerHeard>
                <Titulo titulo="Agregar gasto"/>
                <ContentButonStyled>
                    <Boton desciption="Categoria" link='Categoria' />
                    <Boton desciption="Lista Gastos" link='Lista_gasto' />
                    <Boton desciption="x" />
                </ContentButonStyled>
            </ConteinerHeard>
        </HeaderStyled>
    );
}
 
export default HeaderComponent;