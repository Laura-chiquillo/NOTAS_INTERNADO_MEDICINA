import {URL} from "./constantes"

/* mostrar instituciones */
const getApiRotacion = async () => {

    const peticion = await fetch (`${URL}rotacion/todos`)

   if (peticion.ok) {
       return await peticion.json()
   } throw new Error("Error del servidor") 

}
export {getApiRotacion}