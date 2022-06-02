import {URL} from "./constantes"

/*Mostrar Materia */
const getApiMateria= async () => {

    const peticion = await fetch (`${URL}asignatura/todos`)

   if (peticion.ok) {
       return await peticion.json()
   } throw new Error("Error del servidor") 

}

export {getApiMateria}

