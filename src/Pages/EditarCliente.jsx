import { useParams } from "react-router-dom" //Hook para leer datos de una URL
import { useEffect, useState } from "react"
import Formulario from '../Components/Formulario'
import Spinner from "../Components/Spinner";

const EditarCliente = () => {

  const [cliente, setCliente] = useState({});
  const [cargando, setCargando] = useState(true);

  const { id } = useParams()

  useEffect(() => {
    const obtenerClienteAPI = async () => {
      try {
        const url = `http://localhost:4000/clientes/${id}`
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        setCliente(resultado);

      } catch (error) {
        console.log(error)
      }
      setCargando(!cargando)
    }
    obtenerClienteAPI()
  }, []);
  console.log(cargando)


  return (
    <>
      <h1 className=' font-black text-4xl text-blue-900'>Editar Cliente</h1>
      <p className=' mt-3'>Utiliza este formulario para editar datos de un cliente</p>

      {cliente?.nombre ? (
        
        <Formulario
          cliente={cliente}
          cargando={cargando}
        />
      ): <div><p className=" text-yellow-600 font-bold text-xl">Cliente ID no valido</p><Spinner/></div>}
      
    </>
  )
}

export default EditarCliente