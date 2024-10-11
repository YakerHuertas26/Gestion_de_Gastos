import useStoreAPP from "../Store/Store";
import { IconoEncabezado, InputStyled } from "../Styles/FormularioStyled";


const Icono = ({ruta}) => {
    return ( 
        <IconoEncabezado src={ruta} alt="Icono crear cuenta" />
    );
}

const Input = ({name,funtion}) => {
    // importo mi función que modifica el correoCrearCuenta
    const {setEmailCreateAccount,emailCreateAccount}=useStoreAPP();

    const stateMap ={
        'emailCrearCuenta':[emailCreateAccount,setEmailCreateAccount]
    };
    
    // desctructuro
    const [Value,setValue]= stateMap[funtion]|| ['',()=>{}];
    
    // para modidicar mediante el onchage
    const onchange= (e)=> {setValue(e.target.value)}



    
    return ( 
        <InputStyled 
            type="email"
            name="email"
            placeholder={name}
            value={Value}
            onChange={onchange}
            />
    );
}

const Password = ({name,funtion}) => {
    const {setPasswordCreateAccount,setconfirmPasswordCreateAccount,passwordCreateAccount,confirmPasswordCreateAccount}=useStoreAPP();

    // Mapeo dinámico para obtener el estado y su respectivo setter
    const stateMap = {
        'contraseñaCrearCuenta': [passwordCreateAccount, setPasswordCreateAccount],
        'confirmarcontraseñaCrearCuenta': [confirmPasswordCreateAccount, setconfirmPasswordCreateAccount]
    };

    // Desestructurar el estado y el setter en función del "funtion"
    const [Value, setValue] = stateMap[funtion] || ['', () => {}];

    // Función para manejar el cambio de contraseña
    const handleChange = (e) => setValue(e.target.value);


    return ( 
        <InputStyled 
            type="password"
            name="password"
            placeholder={name}
            onChange={handleChange}
            value={Value}/>
    );
}



export { Icono,Input,Password };