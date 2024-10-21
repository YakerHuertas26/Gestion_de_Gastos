import HeaderPage from "../Components/HeaderPage";
import { FooterPage, FormatoMoneda } from "../Elements/ElementFooter";
import { ObtenerListaDeGasto } from "../FireBase/Gastos";
import useStoreAPP from "../Store/Store";
import { BotonAccion, BotonCargarMas, Categoria, ContenedorBotonCentral, ContenedorBotones, ContenedorSubtitulo, Descripcion, ElementoLista, Fecha, Lista, Subtitulo, Valor } from "../Styles/ListaDeGastos";
import { TiEdit } from "react-icons/ti";
import { MdOutlineDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import { format, fromUnixTime } from 'date-fns'
import { es } from "date-fns/locale";

const ListaGasto = () => {
    const {user}= useStoreAPP();
    const [listDeGasto]= ObtenerListaDeGasto();

    // regresar el formato de la fecha
    const RegresarFormato= (fecha)=>{
        // darFormato 
        return format(fromUnixTime(fecha),"dd 'de' MMMM 'de' yyyy", {locale:es})
    }
    // Comprobar si las fechas son iguales 
    const fechasIguales= (listaGastos,index,gasto)=>{
        if (index!==0) {
            const fechaActual= RegresarFormato(gasto.fechaSegundo);
           
            const fechaAnterior= RegresarFormato(listaGastos[index-1].fechaSegundo)
            
            if (fechaActual==fechaAnterior) {
                return true                
            }
            else{
                return false
            }
        }
    }
return(
         listDeGasto==null?
        <span>Cargando ...</span>
         :
         <>
         <HeaderPage titulo="Lista de Gastos"/>
         <Lista>
            {listDeGasto.map((gasto,index)=>{
                return(
                    <div key={gasto.id}>

                    {!fechasIguales(listDeGasto,index,gasto)&&  <Fecha>{RegresarFormato(gasto.fechaSegundo)}</Fecha>}
                    <ElementoLista key={gasto.id}>
                        <Categoria>
                            {gasto.categoria}
                        </Categoria>
                        <Descripcion>
                            {gasto.descipcion}
                        </Descripcion>
                        <Valor>
                            {FormatoMoneda(gasto.monto)}
                        </Valor>
                        <ContenedorBotones>
                            <BotonAccion as={Link} to={`../Editar_gasto/${gasto.id}`}><TiEdit/></BotonAccion>
                            <BotonAccion><MdOutlineDeleteForever/></BotonAccion>
                        </ContenedorBotones>
                    </ElementoLista>
                    </div>
                )
            })}
                <ContenedorBotonCentral>
                    <BotonCargarMas>
                        Cargar Más
                    </BotonCargarMas>
                </ContenedorBotonCentral>

                {
                    listDeGasto.length===0 &&
                    <ContenedorSubtitulo>
                        <Subtitulo>No hay gastos</Subtitulo>
                    </ContenedorSubtitulo>
                }
         </Lista>
         <FooterPage/>
         </>

)

         
        
     ;
}
 
export default ListaGasto;