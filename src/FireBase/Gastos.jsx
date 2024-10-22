import { useEffect } from "react";
import useStoreAPP from "../Store/Store";
import { dataBase } from "./Config";
import { collection, addDoc,getDocs,doc, onSnapshot,query,orderBy,where,limit, startAfter } from "firebase/firestore";
import {deleteDoc } from "firebase/firestore";
import { toast } from "sonner";


const AgregarGasto = (categoria,descipcion,fechaSegundos,monto,usuarioID) => {
   try {
      return addDoc(collection(dataBase,"gastos"),{
       categoria:categoria,
       descipcion:descipcion,
       fechaSegundo:fechaSegundos,
       monto:Number(monto),
       usuarioID:usuarioID
      })
      
   } catch (error) {
      console.log(error);
      
   }
}

const ObtenerListaDeGasto = () => {
   const {listaGasto,setListaGasto,user,ultimoGasto,setUltimoGasto,mostrarMas,setMostrarMas}=useStoreAPP();

   const ObtenerMasListaGastos=()=>{
      const consulta= query(collection(dataBase,'gastos'),
            where('usuarioID','==',user.uid),
            orderBy('fechaSegundo','desc'),
            limit(5),
            startAfter(ultimoGasto));

            onSnapshot(consulta,(nuevosGastos)=>{
               // cuando ya no hay ms gasto por mostrar
               if (nuevosGastos.docs.length>0) {
                  // defino un nuevo gasto de la nueva lista 
                  setUltimoGasto(nuevosGastos.docs[nuevosGastos.docs.length-1])

                  // nuevamente modifico la cadena original
                  // concateno con la lista original
                  // mapeo la listanueva para retornar la lista y id 
                  setListaGasto(listaGasto.concat(nuevosGastos.docs.map((listanueva)=>{
                     // retornar una nueva lista 
                     return {...listanueva.data(),id:listanueva.id}
                  })))
               }
               // cuando ya no hay ms gasto por mostrar
               else{
                  setMostrarMas(false)
               }
            })
   }

   useEffect(()=>{
      const consulta= query(collection(dataBase,'gastos'),
      where('usuarioID','==',user.uid),
      orderBy('fechaSegundo','desc'),
      limit(5));

      // función para obtener la lista con la consulta 
      const obtenerLista= onSnapshot(consulta,(doc)=>{
         // verificar si tengo gastos
         if (doc.docs.length>0) {
            // establecer el ultimo gasto 
            setUltimoGasto(doc.docs[doc.docs.length-1]);
            // cuando si hay mas gastos por mostrar
            setMostrarMas(true);
         }
         else{
            // no más para mostrar
            setMostrarMas(false)
         }

         setListaGasto(doc.docs.map((gasto)=>{
            return{...gasto.data(),id:gasto.id}
            
         }))
      })
      return ()=> obtenerLista();
   },[user])
   
    return ( 
         [listaGasto,ObtenerMasListaGastos,mostrarMas]
    );
}

const BorrarGasto = async (id) => {
   try {
      await deleteDoc(doc(dataBase,'gastos',id))
     //  crear una alerta
     toast.success('Borrado correctamente',{
      duration:1000,
      position:"top-center"
     })
  
   } catch (error) {
      console.log(error);
      toast.error('Ocurrio un error',{
         duration:1000,
         position:"top-center"
        })
   }
}

export {AgregarGasto,ObtenerListaDeGasto,BorrarGasto};