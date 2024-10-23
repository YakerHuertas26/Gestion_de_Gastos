import { create } from "zustand";
import { persist,createJSONStorage  } from "zustand/middleware";


const useStoreAPP= create((set)=>({
    //  ++++++++ Sesión activa ++++++ 
    user:null,
    loading:true,
    setUser: (p)=>set({user:p,loading:false}),
    // setLoading:()=> set({user:null,loading:false}),

    

    // +++++ Para el calendario
    fecha:new Date(),
    setFecha:(a)=>set({fecha:a}),
    
    //Mostrar calentario
    mostrarCalendario:false,
    setMostarCalendario:()=> set((state)=>({mostrarCalendario:!state.mostrarCalendario})) ,
    selectFecha:()=>set({mostrarCalendario:false}),

    
    // OBTENER LISTA DE GASTOS
    listaGasto:null,
    setListaGasto:(lista)=>set({listaGasto:lista}),

    // +++++++OBTENER EL ULTIMO GASTO
    ultimoGasto:null,
    setUltimoGasto:(ulGasto)=>set({ultimoGasto:ulGasto}),

    // ++++ SABER SI TENGO MÁS CONTENIDO POR MOSTRAR 
    mostrarMas:false,
    setMostrarMas:(p)=>set({mostrarMas:p}),

    // ++++ EDITAR GASTOS
    editGasto:null,
    setEditGasto:(edit)=> set({editGasto:edit}),

    // +++GASTOs POR MES ++
    gastoMes: null,
    setGastoMes:(g)=> set({gastoMes:(g)}),

    // +++ MONTO TOTAL POR MES
    montoPorMes:0,
    setMontoPorMes:(m)=> set({montoPorMes:m}),

    // +++ GASTOS POR CATEGORIA
    gastoxCategorias:null,
    setGastoxCategorias:(gxc)=>set({gastoxCategorias:gxc})

}));
 export default useStoreAPP;