import { useEffect } from "react"
import Rutas from "./Routes/Rutes"
import useStoreAPP from "./Store/Store"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./FireBase/Config"



function App() {

  return (
      <>
        <Rutas/>
      </>
  )
}

export default App
