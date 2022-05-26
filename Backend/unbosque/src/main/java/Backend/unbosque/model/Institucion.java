package Backend.unbosque.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("Institucion")
public class Institucion {

        @Id
        private String idInstitucion;
        private String idPais;
        private String nombre;
        private String direccion;
        @DBRef(lazy = true)
        private List<Estudiante> estudiantes;
        private String estado;

        public Institucion(String idInstitucion, String idPais, String nombre, String direccion,
                List<Estudiante> estudiantes, String estado) {
            this.idInstitucion = idInstitucion;
            this.idPais = idPais;
            this.nombre = nombre;
            this.direccion = direccion;
            this.estudiantes = estudiantes;
            this.estado = estado;
        }

        public String getIdInstitucion() {
            return idInstitucion;
        }

        public void setIdInstitucion(String idInstitucion) {
            this.idInstitucion = idInstitucion;
        }

        public String getIdPais() {
            return idPais;
        }

        public void setIdPais(String idPais) {
            this.idPais = idPais;
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

        public List<Estudiante> getEstudiantes() {
            return estudiantes;
        }

        public void setEstudiantes(List<Estudiante> estudiantes) {
            this.estudiantes = estudiantes;
        }

        public String getEstado() {
            return estado;
        }

        public void setEstado(String estado) {
            this.estado = estado;
        }    
}