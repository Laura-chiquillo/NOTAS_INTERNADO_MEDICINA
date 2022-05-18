import {URL} from "./constantes"

/* mostrar instituciones */
const getApiInstituciones = async () => {

    const peticion = await fetch (`${URL}institucion/todos`)

   if (peticion.ok) {
       return await peticion.json()
   } throw new Error("Error del servidor") 

}
/* editar institución */
const editApiInstitucion = async (institucion) =>{
    const params = {
        method : "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(institucion)
    }
    const peticion = await fetch (`${URL}institucion/editar/${institucion.idInstitucion}`, params)
    if (peticion.ok) {
        /* json para obtener los datos */
        return await peticion.json()
    } throw new Error("No se pudo realizar la acción")
}
export {getApiInstituciones, editApiInstitucion}