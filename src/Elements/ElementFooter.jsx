import { Footer, ParrafoStyled } from "../Styles/Aside";

// funcion formato moneda
const FormatoMoneda = (cantidad) => {
    return ( 
            new Intl.NumberFormat('es-PE',{style:'currency',currency:'PEN', minimumFractionDigits:2}).format(cantidad)
     );
}
 

const FooterPage = ({description}) => {
    return ( 
        <Footer>
            <ParrafoStyled>TOTAL GASTADO EN EL MES ...</ParrafoStyled>
            <ParrafoStyled> {FormatoMoneda(description)}</ParrafoStyled>
        </Footer>
     );
}

export {FooterPage} ;