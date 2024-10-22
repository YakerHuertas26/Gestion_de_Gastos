import { useForm } from "react-hook-form";
import { Boton } from "../Elements/E_Header";
import { ConteinerForm, FormularioGasto, HeaderForm, MainForm, Opciones, Select } from "../Styles/FormularioAgregarGasto";
import { ContentInput, CoteienerInputandError, InputStyled } from "../Styles/FormularioStyled";
import { IoMdAdd } from "react-icons/io";
import Calendario from "../Components/Calendario";
import useStoreAPP from "../Store/Store";
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import ContenedorInputFecha from "../Styles/Calendario";
// import AgregarGasto from "../FireBase/Gastos";
import { getUnixTime } from 'date-fns'
import {AgregarGasto, EditarGasto} from "../FireBase/Gastos";
import { toast } from 'sonner';
import { useEffect } from "react";
import { useNavigate } from "react-router";


const FormularioGastos = ({datosEdit}) => {
    const navigate= useNavigate()
    const {fecha,mostrarCalendario,setMostarCalendario,user}= useStoreAPP();
    // funcion formato fecha
    const formatFecha=(fecha=new Date())=>{
        return format(fecha, `dd 'de' MMMM 'del' yyy`,{locale: es})
    }
    const {register,handleSubmit,reset,formState:{errors}}=useForm()
    
    // variables de los gastos
    let categoria,descipcion,monto,usuarioID,fechaSegundos
    
    const registrarGasto= handleSubmit((data)=>{
        if (datosEdit) {
            const categoriaEdit=data.categoria;
            const descipcionEdit= data.description;        ;
            const montoEdit= parseFloat(data.monto).toFixed(2);
            const fechaSegundosEdit = getUnixTime(fecha);
            EditarGasto(datosEdit.id,categoriaEdit,fechaSegundosEdit,descipcionEdit,montoEdit);

            toast.success('Gasto Modificado correctamente',{
                duration: 1000,
                position: 'top-center'
            })
            setTimeout(() => {
                navigate("/Lista_Gasto")
            }, 1300);
            
        }
        else{
            categoria=data.categoria;
            descipcion= data.description;        ;
            monto= parseFloat(data.monto).toFixed(2);
            usuarioID=user.uid
            fechaSegundos = getUnixTime(fecha);
            
            AgregarGasto(categoria,descipcion, fechaSegundos,monto,usuarioID)
    
            toast.success('Gasto agregado correctamente',{
                duration: 1000,
                position: 'top-center'
            })
            reset();
        }

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

    // ++++++ EDITAR GASTO++++
    //  verificar si hay un gastoen un formulario solo una vez 
    useEffect(()=>{
        if (datosEdit) {
            // verificar el gasto del mismo usurio
            if (user.uid==datosEdit.data().usuarioID) {
                reset({
                    categoria:datosEdit.data().categoria,
                    description:datosEdit.data().descipcion,               
                    monto:parseFloat(datosEdit.data().monto).toFixed(2),
                    usuarioID:datosEdit.data().usuarioID,
                    fechaSegundos:getUnixTime(datosEdit.data().fechaSegundo)
                })    
            }
            else{
                navigate("/Lista_gastos")
            }
        }
    },[datosEdit,reset, user])

    return ( 
        <ConteinerForm>
        <FormularioGasto onSubmit={registrarGasto}>
            <HeaderForm>
                <ContentInput className="contentSelect">
                        <Select  {...register('categoria')}
                         >
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
            {!datosEdit? 
            <Boton 
            desciption="Agregar Gasto"
            iconobtn={<IoMdAdd/>}
            secundario={true}
                type="submit" 
                as="button" 
                icono={true}/> 
            :
            <Boton 
            desciption="Editar Gasto"
            iconobtn={<IoMdAdd/>}
            secundario={true}
                type="submit" 
                as="button" 
                icono={false}/> 
            }

        </FormularioGasto>
    </ConteinerForm> 
     );
}
 
export default FormularioGastos;