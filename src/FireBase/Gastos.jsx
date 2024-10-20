import { dataBase } from "./Config";
import { collection, addDoc } from "firebase/firestore";

const AgregarGasto = (categoria,descipcion,fechaSegundos,monto,usuarioID) => {
   return addDoc(collection(dataBase,"gastos"),{
    categoria:categoria,
    descipcion:descipcion,
    fechaSegundo:fechaSegundos,
    monto:Number(monto),
    usuarioID:usuarioID
   })
}
 
export default AgregarGasto;