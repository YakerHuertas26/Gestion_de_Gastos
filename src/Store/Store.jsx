import { create } from "zustand";


const useStoreAPP= create((set)=>({
    //  ++++++++ Sesión activa ++++++ 
    user:null,
    setUser: (p)=>set({user:p}),

    // +++++ Para mostrar el calendario
    fecha:new Date(),
    setFecha:(a)=>set({fecha:a}),
    
    //Mostrar calentario
    mostrarCalendario:false,
    setMostarCalendario:()=> set((state)=>({mostrarCalendario:!state.mostrarCalendario})) ,
    selectFecha:()=>set({mostrarCalendario:false})
}));
 export default useStoreAPP;