package Backend.unbosque.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("Institucion")
public class Institucion {

        @Id
        private String idInstitucion;
        @DBRef
        private List<Estudiante> estudiantes;
        @DBRef
        private Ciudad ciudad;
        private String nombre;
        private String direccion;
        private String estado;

        public Institucion(String idInstitucion, List<Estudiante> estudiantes, Ciudad ciudad, String nombre,
                String direccion, String estado) {
            this.idInstitucion = idInstitucion;
            this.estudiantes = estudiantes;
            this.ciudad = ciudad;
            this.nombre = nombre;
            this.direccion = direccion;
            this.estado = estado;
        }

        public String getIdInstitucion() {
            return idInstitucion;
        }

        public void setIdInstitucion(String idInstitucion) {
            this.idInstitucion = idInstitucion;
        }

        public List<Estudiante> getEstudiantes() {
            return estudiantes;
        }

        public void setEstudiantes(List<Estudiante> estudiantes) {
            this.estudiantes = estudiantes;
        }

        public Ciudad getCiudad() {
            return ciudad;
        }

        public void setCiudad(Ciudad ciudad) {
            this.ciudad = ciudad;
        }

        public String getNombre() {
            return nombre;
        }

        public void setNombre(String nombre) {
            this.nombre = nombre;
        }

        public String getDireccion() {
            return direccion;
        }

        public void setDireccion(String direccion) {
            this.direccion = direccion;
        }

        public String getEstado() {
            return estado;
        }

        public void setEstado(String estado) {
            this.estado = estado;
        }

        @Override
        public String toString() {
            return "Institucion [ciudad=" + ciudad + ", direccion=" + direccion + ", estado=" + estado
                    + ", estudiantes=" + estudiantes + ", idInstitucion=" + idInstitucion + ", nombre=" + nombre + "]";
        }   
}