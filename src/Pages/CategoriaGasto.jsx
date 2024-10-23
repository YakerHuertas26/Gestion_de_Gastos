import { useEffect } from "react";
import {HeaderPage} from "../Components/HeaderPage";
import { FooterPage } from "../Elements/ElementFooter";
import { GastoPorMes } from "../FireBase/Gastos";
import useStoreAPP from "../Store/Store";
import { Categoria, ElementoListaCategorias, ListaDeCategorias, Valor } from "../Styles/ListaDeGastos";



const CategoriaGasto = () => {

  const gastos= GastoPorMes();
const {setGastoxCategorias,gastoxCategorias}= useStoreAPP()

  useEffect(()=>{
    if (gastos) {
        const gastoxCategoria= gastos.reduce((resultado,valorActual)=>{
            const categoriaActual= valorActual.categoria;
            const montoActual= valorActual.monto;
            resultado[categoriaActual]+=montoActual;
    
            return resultado;
            
        },{
            'comida': 0,
            'cuentas y pagos': 0,
            'hogar': 0,
            'transporte': 0,
            'ropa': 0,
            'salud e higiene': 0,
            'compras': 0,
            'diversion': 0
        });
        
        setGastoxCategorias(Object.keys(gastoxCategoria).map((element)=>{
            return {categoria:element,cantidad:gastoxCategoria[element]}
        }));
    }
      },[gastos,setGastoxCategorias])
        
      
    return ( 
        
        
        gastoxCategorias ?    
        <>
        <HeaderPage titulo="Gastos por categoría"/>
        <ListaDeCategorias>
            {gastoxCategorias.map((categoria,index)=>{
               return(
                <ElementoListaCategorias key={index} >
                    <Categoria>{categoria.categoria
                    }</Categoria>
                    <Valor>{categoria.cantidad
                    }</Valor>
                </ElementoListaCategorias>
               )
                
            })}
        </ListaDeCategorias>
        <FooterPage />
        </>
        :
        <span>Cargando...</span>
        
     );
}
 
export default CategoriaGasto;