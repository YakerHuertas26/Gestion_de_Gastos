import { useEffect } from "react";
import { GastoPorMes } from "../FireBase/Gastos";
import useStoreAPP from "../Store/Store";
import { Footer, ParrafoStyled } from "../Styles/Aside";

// funcion formato moneda
const FormatoMoneda = (cantidad) => {
    return ( 
            new Intl.NumberFormat('es-PE',{style:'currency',currency:'PEN', minimumFractionDigits:2}).format(cantidad)
     );
}
 

const FooterPage = () => {

    const gastoDelMes= GastoPorMes();
    const {montoPorMes,setMontoPorMes}= useStoreAPP();

    useEffect(()=>{
        if (gastoDelMes) {
            let montoTotal= 0;
            gastoDelMes.forEach((element) => {
                setMontoPorMes(montoTotal+=element.monto);
            });
            
            if(gastoDelMes.length===0){
                setMontoPorMes(0)
            }
        }
        else{
            setMontoPorMes(0) 
        }
        },[gastoDelMes])

    return ( 
        <Footer>
            <ParrafoStyled>TOTAL GASTADO ...</ParrafoStyled>
            <ParrafoStyled> {FormatoMoneda(montoPorMes)}</ParrafoStyled>
        </Footer>
     );
}

export {FooterPage,FormatoMoneda} ;