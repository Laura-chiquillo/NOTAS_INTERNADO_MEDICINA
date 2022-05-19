/* importar constante de la url */ 
import {URL} from "./constantes"

/* funcion que llama a el backend para la lista de estudiantes */
/* async -> la funcion tiene que esperar para poder seguir ejecutando */ 
const getApiEstudiantes = async () => {
    /* await -> la instrucción es la que tiene que esperar */
   const peticion = await fetch (`${URL}estudiante/todos`)
   /* los 3 = es comparativo */
   if (peticion.ok) {
       /* json para obtener los datos */
       return await peticion.json()
   } throw new Error("Error del servidor") 
}

/* editar */
const editApiEstudiante = async (estudiante) =>{
    const params = {
        /*  pasar parametro para que sepa cual es, si no se hace esto lo pasa como get */
        method : "PATCH",
        /* especificar que se va a pasar un json */
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(estudiante)
    }
    const peticion = await fetch (`${URL}estudiante/editar/${estudiante.idEstudiante}`, params)
    if (peticion.ok) {
        /* json para obtener los datos */
        return await peticion.json()
    } throw new Error("No se pudo realizar la acción")
}

/* agregar */
const agregarApiEstudiante = async (estudiante) =>{
    console.log(estudiante)
    const params = {
        /*  pasar parametro para que sepa cual es, si no se hace esto lo pasa como get */
        method : "POST",
        /* especificar que se va a pasar un json */
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(estudiante)
    }
    const peticion = await fetch (`${URL}estudiante/nuevo`, params)
    if (peticion.ok) {
        /* json para obtener los datos */
        return await peticion.json()
    } throw new Error("No se pudo realizar la acción")
}

export {getApiEstudiantes, editApiEstudiante, agregarApiEstudiante}
