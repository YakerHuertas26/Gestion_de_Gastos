import { create } from "zustand";

const useStoreAPP= create((set)=>({
    // +++++++++Crear Cuenta +++++++++++
    emailCreateAccount:"",
    setEmailCreateAccount: ((p)=> set({emailCreateAccount: p})),

    passwordCreateAccount:"",
    setPasswordCreateAccount: (p)=>set({passwordCreateAccount:p}),

    confirmPasswordCreateAccount:"",
    setconfirmPasswordCreateAccount: (p)=>set({confirmPasswordCreateAccount:p})

}));
export default useStoreAPP;