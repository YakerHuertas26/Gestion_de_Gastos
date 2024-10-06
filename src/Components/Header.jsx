import { Boton, Titulo } from "../b_Element/E_Header";
import { ConteinerHeard, ContentButonStyled, HeaderStyled } from "../Styles/HeaderStyled";

const HeaderComponent = () => {
    return ( 
        <HeaderStyled>
            <ConteinerHeard>
                <Titulo titulo="Agregar gasto"/>
                <ContentButonStyled>
                    <Boton desciption="Categoria" link='Categoria' />
                    <Boton desciption="Lista Gastos" link='Lista_gasto' />
                </ContentButonStyled>
            </ConteinerHeard>
        </HeaderStyled>
    );
}
 
export default HeaderComponent;