import { URL } from "./constantes";

const getApiCoordinador = async (c) => {
    const peticion = await fetch (`${URL}coordinadorIPS/correo/${c}`)

    if (peticion.ok) {
        return await peticion.json()
    } throw new Error("Error del servidor") 
}

export {getApiCoordinador}