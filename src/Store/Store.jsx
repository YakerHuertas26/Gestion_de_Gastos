import { create } from "zustand";


const useStoreAPP= create((set)=>({
    //  ++++++++ Sesión activa ++++++ 
    user:null,
    setUser: (p)=>set({user:p}),

    // +++++ Para mostrar el calendario
    fecha:new Date(),
    setFecha:(a)=>set({fecha:a})


}));
 export default useStoreAPP;