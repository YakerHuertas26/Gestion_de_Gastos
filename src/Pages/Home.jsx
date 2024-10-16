
import { useForm } from "react-hook-form";
import HeaderComponent from "../Components/Header";
import { Boton } from "../Elements/E_Header";
import Parrafo from "../Elements/ElementAside";
import { Aside } from "../Styles/Aside";
import { ConteinerForm, FormularioGasto, HeaderForm, MainForm } from "../Styles/FormularioAgregarGasto";
import { ContentInput, CoteienerInputandError, InputStyled } from "../Styles/FormularioStyled";
import { IoMdAdd } from "react-icons/io";

const Home = () => {
    const {register,handleSubmit,watch,formState:{errors}}=useForm()
    const registrarGasto= handleSubmit((data)=>{
        console.log(data);
        
    })
    return (
        <>
        <HeaderComponent />
        <ConteinerForm>
            <FormularioGasto onClick={registrarGasto}>
                <HeaderForm>
                    <ContentInput $agregarGasto >
                        <InputStyled 
                        type="text"
                        placeholder="CATEGORIA"
                        $agregarGasto/>
                    </ContentInput>

                    <ContentInput $agregarGasto className="divImput1">
                        <InputStyled 
                        type="text"
                        placeholder="FECHA"
                        $agregarGasto/>
                    </ContentInput>
                </HeaderForm>
                <MainForm >
                     <CoteienerInputandError>
                        <ContentInput  >
                            <InputStyled 
                            type="text"
                            placeholder="DESCRIPCIÓN"
                            $agregarGasto
                            {...register('description',{required:{value:true,message:"Llenar campo"}})}/>
                        </ContentInput>
                        {errors.description && <span>{errors.description.message}</span>}
                     </CoteienerInputandError>

                     <CoteienerInputandError>
                        <ContentInput  >
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
        <Aside>
            <Parrafo description='TOTAL GASTADO EN EL MES ...'/> 
            <Parrafo description='$20'/>
        </Aside>
        </>

     );
}
 
export default Home;