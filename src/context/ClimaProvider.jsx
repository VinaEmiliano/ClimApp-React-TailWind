import { useState, createContext } from "react";
import axios from "axios";

const ClimaContext = createContext()

const ClimaProvider = ({children}) => {

    const [busqueda, setBusqueda] = useState({
        ciudad: '',
        pais: ''
    })

    const [resultado, setResultado] = useState({})

    const datosBusqueda = e => {
        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    const [noCity, setNoCity] = useState('')

    const consultarClima = async datos => {
        try {
            const {ciudad, pais} = datos

            const appId = import.meta.env.VITE_API_KEY

            const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${appId}`

            const {data} = await axios(url)
            
            const {lat, lon} = data[0]

            const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`

            const {data:clima} = await axios(urlClima)

            setResultado(clima)
            
        } catch (error) {
            setNoCity('ingresa una ciudad valida')
        }
    }

    return (
        <ClimaContext.Provider
            value={{
                busqueda,
                setBusqueda,
                datosBusqueda,
                consultarClima,
                resultado,
                setResultado,
                noCity,
                setNoCity
            }}
        >
            {children}
        </ClimaContext.Provider>
    )
}

export {ClimaProvider}

export default ClimaContext