import { useState } from "react"
import useClima from "../hooks/useClima"

const Formulario = () => {
  const [alerta, setAlerta] = useState('')

  const {busqueda, datosBusqueda, consultarClima, noCity, setNoCity} = useClima()
  const {ciudad, pais} = busqueda

  const handleSubmit = e => {
    e.preventDefault()

    if(Object.values(busqueda).includes('')){
      setAlerta('Todos los campos son obligatorios')
      return
    }

    setAlerta('')
    setNoCity('')
    consultarClima(busqueda)
  }



  return (
    <div>
        <p className="text-center text-3xl mt-8 text-white font-semibold bg-amber-500 rounded-2xl p-2 w-4/6 m-auto">Consulta el clima del mundo</p>
        <form 
          action="" 
          className="text-center"
          onSubmit={handleSubmit}
        >
            <div className='text-center text-white font-semibold p-3 mt-8 w-4/6 m-auto rounded-2xl bg-amber-500'>
              <legend className="text-2xl mb-4">Descubre el clima de distindas regiones</legend>

              {alerta && <p className="text-2xl mb-4 text-red-600">{alerta}</p>}
              {noCity && <p className="text-2xl mb-4 text-red-600">{noCity}</p>}
              
              <label htmlFor="ciudad" className='block text-xl mb-1'>Ingresa una ciudad</label>
              <input 
                type="text" 
                id='ciudad'
                name="ciudad" 
                placeholder="Ej: Barcelona"
                className="mb-4 text-black p-1 w-4/6 text-center"
                onChange={datosBusqueda}
                value={ciudad}
              />

              <div>
                  <label htmlFor="pais" className='block text-xl mb-1'>Pais</label>
                  <select 
                    name="pais" 
                    id="pais"
                    className="mb-4 text-black p-1 w-4/6 text-center"
                    onChange={datosBusqueda}
                    value={pais}
                  >
                      <option value="">Seleccione un pais</option>
                      <option value="US">Estados Unidos</option>
                      <option value="IT">Italia</option>
                      <option value="Es">España</option>
                      <option value="AR">Argentina</option>
                      <option value="MX">Mexico</option>
                      <option value="BR">Brasil</option>
                      <option value="FR">Francia</option>
                      <option value="GB">Reino Unido</option>
                  </select>
              </div>
            </div>
            <input
              type="submit" 
              value="Consultar clima" 
              className="text-center text-white font-semibold p-3 mt-8 w-4/6 m-auto rounded-2xl bg-amber-500 hover:bg-amber-600 transition-colors" />
        </form>
    </div>
  )
}

export default Formulario