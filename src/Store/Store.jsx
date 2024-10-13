import { create } from "zustand";
import { auth } from "../FireBase/Config";


const useStoreAPP= create((set)=>({
    //  ++++++++ Sesión activa ++++++
    login: false,
    setLogin:()=> set({login:true}),

    // verificar usuario en login 
    user:{},
    setUser: (p)=>set({user:p})


}));
 export default useStoreAPP;