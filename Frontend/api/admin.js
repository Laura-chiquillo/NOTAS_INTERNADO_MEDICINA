import {URL} from "./constantes"

/* mostrar admin */
const getApiAdmin = async (c) => {

    const peticion = await fetch (`${URL}admin/correo/${c}`)

   if (peticion.ok) {
       return await peticion.json()
   } throw new Error("Error del servidor") 

}

export {getApiAdmin}