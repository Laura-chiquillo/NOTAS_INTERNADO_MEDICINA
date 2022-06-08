import {URL} from "./constantes"

/*Login admin*/
const apiLoginAdmin = async (adminLogin) => {
    const params = {
        /*  pasar parametro para que sepa cual es, si no se hace esto lo pasa como get */
        method : "POST",
        /* especificar que se va a pasar un json */
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(adminLogin)
    }
    const peticion = await fetch (`${URL}admin/loginAdmin`, params)
    if (peticion.ok) {
        /* json para obtener los datos */
        const data = await peticion.json() 
        if (typeof window !== "undefined") {

            localStorage.setItem("token", data.token)
            
            }
        return data
    } throw new Error("No se pudo realizar la acción")
}

/*Login coordinador*/
const apiLoginCoordinador = async (coordinadorLogin) => {
    const params = {
        /*  pasar parametro para que sepa cual es, si no se hace esto lo pasa como get */
        method : "POST",
        /* especificar que se va a pasar un json */
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(coordinadorLogin)
    }
    const peticion = await fetch (`${URL}coordinadorIPS/loginCoord`, params)
    if (peticion.ok) {
        /* json para obtener los datos */
        return await peticion.json()
    } throw new Error("No se pudo realizar la acción")
}

export {apiLoginAdmin, apiLoginCoordinador}