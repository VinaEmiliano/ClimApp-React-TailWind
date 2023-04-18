import useClima from "../hooks/useClima"

const Resultado = () => {
    const {setBusqueda, resultado, setResultado} = useClima()
    const {main, name} = resultado

    const reiniciarFormulario = () => {
        setResultado({})
        setBusqueda({  
            ciudad: '',
            pais: ''
        })
    }

    const kelvin = 273.15

    return (
            <div className="text-center">
                <div className='text-center text-white font-semibold p-3 mt-8 w-4/6 m-auto rounded-2xl bg-amber-500'>
                    <h2 className="text-3xl mb-4">El clima de {name} es:</h2>
                    <p className="text-2xl mb-4">{parseInt(main.temp - kelvin)}<span>&#x2103;</span></p>
                    <p className="text-2xl mb-4">Temp min: {parseInt(main.temp_min - kelvin)}<span>&#x2103;</span></p>
                    <p className="text-2xl mb-4">Temp max: {parseInt(main.temp_max - kelvin)}<span>&#x2103;</span></p>
                    <p className="text-2xl mb-4">Humedad: {main.humidity}%</p>
                </div>
                <button
                    className="text-center text-white font-semibold p-3 mt-8 w-4/6 m-auto rounded-2xl bg-amber-500 hover:bg-amber-600 transition-colors"
                    onClick={reiniciarFormulario}
                >Volver a consultar</button>
            </div>
  )}

export default Resultado