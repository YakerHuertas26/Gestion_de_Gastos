import { useEffect } from "react";
import useStoreAPP from "../Store/Store";
import { dataBase } from "./Config";
import { collection, addDoc,getDocs,doc, onSnapshot,query,orderBy,where,limit } from "firebase/firestore";


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
   const {listaGasto,setListaGasto,user}=useStoreAPP();

   useEffect(()=>{
      const consulta= query(  collection(dataBase,'gastos'),
      where('usuarioID','==',user.uid),
      orderBy('fechaSegundo','desc'),
      limit(10));

      // función para obtener la lista con la consulta 
      const obtenerLista= onSnapshot(consulta,(doc)=>{
         setListaGasto(doc.docs.map((gasto)=>{
            return{...gasto.data(),id:gasto.id}
            
         }))
      })
      return()=> obtenerLista();
   },[user])

    return ( 
         [listaGasto]
    );
}

 
export {AgregarGasto,ObtenerListaDeGasto};