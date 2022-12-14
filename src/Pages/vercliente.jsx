import { useParams } from "react-router-dom" //Hook para leer datos de una URL
import { useEffect, useState } from "react"
import Spinner from "../Components/Spinner";

const Vercliente = () => {

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
    cargando ? <Spinner/> : Object.keys(cliente).length === 0 ? <p>No hay Resultado</p> : (
      <div>

        <h1 className=' font-black text-4xl text-blue-900 uppercase'>Ver Cliente: {cliente.nombre}</h1>
        <p className=' mt-3 text-2xl'>Informacion del Cliente</p>

        {cliente.nombre && (
          <p className=" text-4xl text-gray-600 mt-10 uppercase">
            <span className="  uppercase font-bold">Cliente: </span>
            {cliente.nombre}
          </p>
        )}
        {cliente.email && (
          <p className=" text-2xl text-gray-500 mt-4">
            <span className=" text-gray-800 uppercase font-bold">Email: </span>
            {cliente.email}
          </p>
        )}
        {cliente.telefono && (
          <p className=" text-2xl text-gray-500 mt-4">
            <span className="  text-gray-800  uppercase font-bold">Telefono: </span>
            {cliente.telefono}
          </p>
        )}
        {cliente.empresa && (
          <p className=" text-2xl text-gray-500 mt-4">
            <span className="  text-gray-800  uppercase font-bold">Empresa: </span>
            {cliente.empresa}
          </p>
        )}
        {cliente.notas && (
          <p className=" text-2xl text-gray-500 mt-4">
            <span className="  text-gray-800  uppercase font-bold">Notas: </span>
            {cliente.notas}
          </p>
        )}


      </div>
    )

  )
}

export default Vercliente