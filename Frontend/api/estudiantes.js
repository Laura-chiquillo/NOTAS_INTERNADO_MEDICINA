/* importar constante de la url */ 
import {URL} from "./constantes"

/* funcion que llama a el backend para la lista de estudiantes */
/* async -> la funcion tiene que esperar para poder seguir ejecutando */ 
const getApiEstudiantes = async () => {
    /* await -> la instrucción es la que tiene que esperar */
   await fetch (`${URL}`)
}

