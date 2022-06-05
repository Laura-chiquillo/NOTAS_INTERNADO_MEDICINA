import {URL} from "./constantes"

/*Mostrar Materia */
const getApiMateria= async () => {

    const peticion = await fetch (`${URL}asignatura/todos`)

   if (peticion.ok) {
       return await peticion.json()
   } throw new Error("Error del servidor") 

}
/*Mostrar subMaterias */
const getApiSubMateria= async () => {

    const peticion = await fetch (`${URL}subAsignatura/todos`)

   if (peticion.ok) {
       return await peticion.json()
   } throw new Error("Error del servidor") 

}
/* Guardar informe de notas */


export {getApiMateria, getApiSubMateria}

