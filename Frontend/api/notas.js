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
const getApiCrearRotacion = async (rotacion) =>{
    const params = {
        method : "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(rotacion)
    }
    const peticion = await fetch (`${URL}rotacion/nuevo`, params)
    if (peticion.ok) {
        return await peticion.json()
    } throw new Error("No se pudo realizar la acción")
}


const getApiRotacion = async () => {

    const peticion = await fetch (`${URL}rotacion/todos`)

   if (peticion.ok) {
       return await peticion.json()
   } throw new Error("Error del servidor") 

}


export {getApiMateria, getApiSubMateria, getApiCrearRotacion,getApiRotacion}

