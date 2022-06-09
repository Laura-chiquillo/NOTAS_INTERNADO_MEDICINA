import { URL } from "./constantes";

const getApiCoordinador = async (c) => {
    const peticion = await fetch (`${URL}coordinadorIPS/correo/${c}`)

    if (peticion.ok) {
        return await peticion.json()
    } throw new Error("Error del servidor") 
}

/* crear coordinador*/
const crearApiCoordinador = async (coordinadorIPS) =>{
    const params = {
        /*  pasar parametro para que sepa cual es, si no se hace esto lo pasa como get */
        method : "POST",
        /* especificar que se va a pasar un json */
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(coordinadorIPS)
    }
    const peticion = await fetch (`${URL}coordinadorIPS/nuevo`, params)
    if (peticion.ok) {
        /* json para obtener los datos */
        return await peticion.json()
    } throw new Error("No se pudo realizar la acción")
}

const apiCambiarContraseña = async (correo) => {
    const params = {
        /*  pasar parametro para que sepa cual es, si no se hace esto lo pasa como get */
        method : "POST",
        /* especificar que se va a pasar un json */
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(correo)
    }
    const peticion = await fetch (`${URL}coordinadorIPS/olvideContraseña/${correo}`, params)
    if (peticion.ok) {

        return await peticion.text()
    } throw new Error("No se pudo realizar la acción")
}
const getApiCoordinadorById = async (id) => {
    const peticion = await fetch (`${URL}coordinadorIPS/${id}`)

    if (peticion.ok) {
        return await peticion.json()
    } throw new Error("Error del servidor") 
}
export {getApiCoordinador, crearApiCoordinador, apiCambiarContraseña , getApiCoordinadorById}
