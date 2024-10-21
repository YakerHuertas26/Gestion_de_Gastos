import { create } from "zustand";
import { persist,createJSONStorage  } from "zustand/middleware";


const useStoreAPP= create((set)=>({
    //  ++++++++ Sesión activa ++++++ 
    user:null,
    loading:true,
    setUser: (p)=>set({user:p,loading:false}),
    // setLoading:()=> set({user:null,loading:false}),

    

    // +++++ Para mostrar el calendario
    fecha:new Date(),
    setFecha:(a)=>set({fecha:a}),
    
    //Mostrar calentario
    mostrarCalendario:false,
    setMostarCalendario:()=> set((state)=>({mostrarCalendario:!state.mostrarCalendario})) ,
    selectFecha:()=>set({mostrarCalendario:false}),

    // ++++ OBTENER UN MONTO 
    monto:69,

    // OBTENER LISTA DE GASTOS
    listaGasto:[],
    setListaGasto:(lista)=>set({listaGasto:[lista]})
}));
 export default useStoreAPP;