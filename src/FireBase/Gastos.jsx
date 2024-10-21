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
   const {listaGasto,setListaGasto}=useStoreAPP();

   useEffect(()=>{
      const lista= async ()=>{
         (await getDocs(collection(dataBase,'gastos'))).forEach((doc)=>{
            setListaGasto(doc.data());
         })
      }
      return ()=> lista()
   },[])

    return ( 
         [listaGasto]
    );
}

 
export {AgregarGasto,ObtenerListaDeGasto};