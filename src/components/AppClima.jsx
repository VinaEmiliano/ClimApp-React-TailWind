import Formulario from "./Formulario"
import Resultado from "./Resultado"
import useClima from "../hooks/useClima"



const AppClima = () => {

  const {resultado} = useClima()

  return (
    <main className="m-auto w-9/12 md:w-8/12 lg:w-7/12">
      <h1 className="text-center text-4xl p-6 text-purple-400 font-semibold bg-gradient-to-r from-orange-400 via-yellow-300 to-blue-400 rounded-2xl">ClimApp</h1>
      {resultado?.name ? <Resultado /> : <Formulario /> }
    </main>
  )
}

export default AppClima