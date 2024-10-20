
import { useForm } from "react-hook-form";
import HeaderComponent from "../Components/Header";
import { Boton } from "../Elements/E_Header";
import Parrafo from "../Elements/ElementAside";
import { Footer } from "../Styles/Aside";
import { ConteinerForm, FormularioGasto, HeaderForm, MainForm, Opciones, Select } from "../Styles/FormularioAgregarGasto";
import { ContentInput, CoteienerInputandError, InputStyled } from "../Styles/FormularioStyled";
import { IoMdAdd } from "react-icons/io";
import Calendario from "../Components/Calendario";
import useStoreAPP from "../Store/Store";
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import ContenedorInputFecha from "../Styles/Calendario";
const Home = () => {
    const {fecha,mostrarCalendario,setMostarCalendario}= useStoreAPP();
    // funcion formato fecha
    const formatFecha=(fecha=new Date())=>{
        return format(fecha, `dd 'de' MMMM 'del' yyy`,{locale: es})
    }
    const {register,handleSubmit,formState:{errors}}=useForm()
    const registrarGasto= handleSubmit((data)=>{
        console.log(data,fecha);
        
    })
    // AOBJETOS DE CATEGORIAS 

    const categiries=[
        {id: 'comida', texto: 'Comida'},
        {id: 'cuentas y pagos', texto: 'Cuentas y pagos'},
        {id: 'hogar', texto: 'Hogar'},
        {id: 'transporte', texto: 'Transporte'},
        {id: 'ropa', texto: 'Ropa'},
        {id: 'salud e higiene', texto: 'Salud e Higiene'},
        {id: 'compras', texto: 'Compras'},
        {id: 'diversion', texto: 'Diversion'}
    ]

    
    return (
        <>
        <HeaderComponent />
        
        <ConteinerForm>
            <FormularioGasto onSubmit={registrarGasto}>
                <HeaderForm>
                    <ContentInput className="contentSelect">
                            <Select  {...register('categoria')}>
                                {categiries.map((element)=>{
                                    return (
                                        <Opciones key ={element.id} value={element.id}>{element.texto}</Opciones>
                                        
                                    )
                                })}
                                
                            </Select>
                    </ContentInput>
                    
                     <ContenedorInputFecha onClick={setMostarCalendario}  >
                         <InputStyled 
                        type="text"
                        readOnly
                        value={formatFecha(fecha)}
                        $agregarGasto
                        
                        {...register('dia')}/>
                         {mostrarCalendario&& <Calendario />}
                    </ContenedorInputFecha> 
                </HeaderForm>
                <MainForm >
                     <CoteienerInputandError>
                        <ContentInput $agregarGasto  >
                            <InputStyled 
                            type="text"
                            placeholder="DESCRIPCIÓN"
                            $agregarGasto
                            {...register('description',{required:{value:true,message:"Llenar campo"}})}/>
                        </ContentInput>
                        {errors.description && <span>{errors.description.message}</span>}
                     </CoteienerInputandError>

                     <CoteienerInputandError>
                        <ContentInput $agregarGasto  >
                            <InputStyled 
                            type="text"
                            placeholder="MONTO"
                            $agregarGasto
                            {...register('monto',{required:{value:true,message:"Completar campo"},pattern:{value:/^\d+(\.\d\d)?$/,message:"Digite un valor monetario con dos decimales y punto decimal"}})}/>
                        </ContentInput>
                        {errors.monto && <span>{errors.monto.message}</span>}
                     </CoteienerInputandError>
                </MainForm>
                <Boton 
                desciption="Agregar Gasto"
                iconobtn={<IoMdAdd/>}
                secundario={true}
                    type="submit" 
                    as="button" 
                    icono={true}/> 

            </FormularioGasto>
        </ConteinerForm> 
        
        <Footer>
            <Parrafo description='TOTAL GASTADO EN EL MES ...'/> 
            <Parrafo description='$20'/>
        </Footer>
        </>

     );
}
 
export default Home;