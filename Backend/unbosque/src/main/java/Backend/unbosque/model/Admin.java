package Backend.unbosque.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("Admin")
public class Admin {

        @Id
        private String idAdmin;
        private String primerNombre;
        private String segundoNombre;
        private String primerApellido;
        private String segundoApellido;
        private String correo;
        private String contraseña;

        public Admin(String idAdmin, String primerNombre, String segundoNombre, String primerApellido, String segundoApellido, String correo, String contraseña) {
            this.idAdmin = idAdmin;
            this.primerNombre = primerNombre;
            this.segundoNombre = segundoNombre;
            this.primerApellido = primerApellido;
            this.segundoApellido = segundoApellido;
            this.correo = correo;
            this.contraseña = contraseña;
        }

        public String getIdAdmin() {
            return this.idAdmin;
        }

        public void setIdAdmin(String idAdmin) {
            this.idAdmin = idAdmin;
        }

        public String getPrimerNombre() {
            return this.primerNombre;
        }

        public void setPrimerNombre(String primerNombre) {
            this.primerNombre = primerNombre;
        }

        public String getSegundoNombre() {
            return this.segundoNombre;
        }

        public void setSegundoNombre(String segundoNombre) {
            this.segundoNombre = segundoNombre;
        }

        public String getPrimerApellido() {
            return this.primerApellido;
        }

        public void setPrimerApellido(String primerApellido) {
            this.primerApellido = primerApellido;
        }

        public String getSegundoApellido() {
            return this.segundoApellido;
        }

        public void setSegundoApellido(String segundoApellido) {
            this.segundoApellido = segundoApellido;
        }

        public String getCorreo() {
            return this.correo;
        }

        public void setCorreo(String correo) {
            this.correo = correo;
        }

        public String getContraseña() {
            return this.contraseña;
        }

        public void setContraseña(String contraseña) {
            this.contraseña = contraseña;
        }

        @Override
        public String toString() {
            return "Admin [contraseña=" + contraseña + ", correo=" + correo + ", idAdmin=" + idAdmin
                    + ", primerApellido=" + primerApellido + ", primerNombre=" + primerNombre + ", segundoApellido="
                    + segundoApellido + ", segundoNombre=" + segundoNombre + "]";
        }  
}
