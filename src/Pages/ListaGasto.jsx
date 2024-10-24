import {HeaderPage} from "../Components/HeaderPage";
import { FooterPage, FormatoMoneda } from "../Elements/ElementFooter";
import { BorrarGasto, ObtenerListaDeGasto } from "../FireBase/Gastos";
import useStoreAPP from "../Store/Store";
import { BotonAccion, BotonCargarMas, Categoria, ContenedorBotonCentral, ContenedorBotones, ContenedorSubtitulo, Descripcion, ElementoLista, Fecha, Lista, Subtitulo, Valor } from "../Styles/ListaDeGastos";
import { TiEdit } from "react-icons/ti";
import { MdOutlineDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import { format, fromUnixTime } from 'date-fns'
import { es } from "date-fns/locale";
import { Toaster } from "sonner";
import { Boton } from "../Elements/E_Header";


const ListaGasto = () => {

    const [listDeGasto,ObtenerMasListaGastos,mostrarMas]= ObtenerListaDeGasto();

    // regresar el formato de la fecha
    const RegresarFormato= (fecha)=>{
        // darFormato 
        return format(fromUnixTime(fecha),"dd 'de' MMMM 'de' yyyy", {locale:es})
    }
    // Comprobar si las fechas son iguales 
   
        const fechasIguales= (index,gasto)=>{
            if (listDeGasto,index,gasto) {
                const fechaActual= RegresarFormato(gasto.fechaSegundo);
                const fechaAnterior= (listDeGasto[index-1])
                if (fechaAnterior) {
                    const fechaAnteriorValidar= RegresarFormato(fechaAnterior.fechaSegundo);
                            if (index!==0) {
                                if (fechaActual==fechaAnteriorValidar) {
                                    return true                
                                }
                                else{
                                    return false
                                }}}
                            
            }      
        }
    
    
return(
         listDeGasto==null?
        <span>Cargando ...</span>
         :
         <>
         <HeaderPage titulo="Lista de Gastos" ruta="/" />
         <Lista>
            {listDeGasto.map((gasto,index)=>{
                return(
                    <div key={gasto.id}>

                    {!fechasIguales(index,gasto)&&  <Fecha>{RegresarFormato(gasto.fechaSegundo)}</Fecha>}
                    
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
                            <BotonAccion as={Link} to={`../Editar_gasto/${gasto.id}`}>
                                <TiEdit/>
                            </BotonAccion>

                            <BotonAccion onClick={()=>BorrarGasto(gasto.id)}>
                                <MdOutlineDeleteForever/>
                            </BotonAccion>
                            <Toaster  expand richColors visibleToasts={2}/>
                        </ContenedorBotones>
                    </ElementoLista>
                    </div>
                )
            })}
                {mostrarMas && 
                    <ContenedorBotonCentral>
                        <BotonCargarMas onClick={ObtenerMasListaGastos}>
                            Cargar Más
                        </BotonCargarMas>
                    </ContenedorBotonCentral>
                }
                

                {
                    listDeGasto.length===0 &&
                    <>
                    <ContenedorSubtitulo>
                        <Subtitulo>No hay gastos</Subtitulo>
                    <Boton desciption='Agregar Gasto' link="/"/>
                    </ContenedorSubtitulo>
                    </>
                }
         </Lista>
         <FooterPage/>
         </>

)

         
        
     ;
}
 
export default ListaGasto;