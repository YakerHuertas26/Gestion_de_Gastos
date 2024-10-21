import useStoreAPP from "../Store/Store";
import { Footer, ParrafoStyled } from "../Styles/Aside";

// funcion formato moneda
const FormatoMoneda = (cantidad) => {
    return ( 
            new Intl.NumberFormat('es-PE',{style:'currency',currency:'PEN', minimumFractionDigits:2}).format(cantidad)
     );
}
 

const FooterPage = ({description}) => {
    const {monto}= useStoreAPP();
    return ( 
        <Footer>
            <ParrafoStyled>TOTAL GASTADO EN EL MES ...</ParrafoStyled>
            <ParrafoStyled> {FormatoMoneda(monto)}</ParrafoStyled>
        </Footer>
     );
}

export {FooterPage,FormatoMoneda} ;