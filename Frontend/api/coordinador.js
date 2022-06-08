import { URL } from "./constantes";

const getApiCoordinador = async (c) => {
    const peticion = await fetch (`${URL}coordinadorIPS/correo/${c}`)

    if (peticion.ok) {
        return await peticion.json()
    } throw new Error("Error del servidor") 
}

const getApiCoordinadorById = async (id) => {
    const peticion = await fetch (`${URL}coordinadorIPS/${id}`)

    if (peticion.ok) {
        return await peticion.json()
    } throw new Error("Error del servidor") 
}

const apiCambiarContraseña = async () => {
    
}

export {getApiCoordinador}