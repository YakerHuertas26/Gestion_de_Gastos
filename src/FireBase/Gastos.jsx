import { useEffect } from "react";
import useStoreAPP from "../Store/Store";
import { dataBase } from "./Config";
import { collection, addDoc,getDocs,doc, onSnapshot,query,orderBy,where,limit, startAfter, getDoc, updateDoc } from "firebase/firestore";
import {deleteDoc } from "firebase/firestore";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import { endOfMonth,startOfMonth,getUnixTime } from "date-fns";

const AgregarGasto =async (categoria,descipcion,fechaSegundos,monto,usuarioID) => {
   try {
      await addDoc(collection(dataBase,"gastos"),{
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

// función obtener un gasto por ID para editar
const ObtenerUnGasto=  (id)=>{
   const navigate= useNavigate()
   const {editGasto,setEditGasto}=useStoreAPP();

   // la conexioón a la bd se realiza una vez por eso es useeffect
   useEffect(()=>{
      const ObtenerDatos= async ()=>{
         const docuement= await getDoc(doc(dataBase,"gastos",id))
         //  verificar si el dato exite
         if (docuement.exists()) {
            setEditGasto(docuement)
         }
         else{
            navigate("/Lista_gasto")
         }
      }
      return ()=> ObtenerDatos()
   },[])

   
   return [editGasto];
}

// Editar Gasto
const EditarGasto= async(id,categoria,fecha, descipcion, monto)=>{
   const documento= doc(dataBase,'gastos',id)
  return await updateDoc(documento,{
      categoria:categoria,
       descipcion:descipcion,
       fechaSegundo:fecha,
       monto:Number(monto)
   })
  
}

// GASTOS POR MES 
const GastoPorMes= ()=>{
   const inicioDeMes=getUnixTime(startOfMonth(new Date()));
   const finDeMes= getUnixTime(endOfMonth(new Date()));
   
   const {user,setGastoMes,gastoMes}= useStoreAPP();
   // una unica consulta

   useEffect(()=>{
      if (user) {

      const consulta= query(collection(dataBase,'gastos'),
      orderBy ('fechaSegundo','desc'),
      // where('fechaSegundo','>=',inicioDeMes),
      // where('fechaSegundo','<=',finDeMes),
      where('usuarioID','==',user.uid),
      )

      const obtenerCategoria= onSnapshot(consulta,(lista)=>{
         setGastoMes(lista.docs.map((element)=>{
            return {...element.data(),id:lista.id}
            
         }));
         
      },(error)=>{
         console.log(error);
      })
      return()=> obtenerCategoria();
   }
   },[user]) 

   return gastoMes
}

export {AgregarGasto,ObtenerListaDeGasto,BorrarGasto,ObtenerUnGasto,EditarGasto, GastoPorMes};