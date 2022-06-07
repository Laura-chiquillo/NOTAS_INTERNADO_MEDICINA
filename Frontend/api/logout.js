import {URL} from "./constantes"

const apiLogout = async () => {
    /* await -> la instrucción es la que tiene que esperar */
    let token = ''
    if (typeof window !== "undefined") {

        token = localStorage.getItem("token")
        
    }
   const peticion = await fetch (`${URL}admin/logoutAdmin`,
   {
       method: "POST",
       headers:{
       "Authorization": token
   }})
   /* los 3 = es comparativo */
   if (peticion.ok) {
       /* json para obtener los datos */
       return await peticion.json()
   } throw new Error("Error del servidor") 
}

export { apiLogout }