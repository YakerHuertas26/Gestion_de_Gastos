import { create } from "zustand";
import { auth } from "../FireBase/Config";


const useStoreAPP= create((set)=>({
    //  ++++++++ Sesión activa ++++++ 
    user:null,
    setUser: (p)=>set({user:p}),



}));
 export default useStoreAPP;