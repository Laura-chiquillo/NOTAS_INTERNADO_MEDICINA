package Backend.unbosque.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Getter;
import lombok.Setter;

@Document("Estudiante")
@Getter @Setter // para no tener que colocar los getters and setters
public class Estudiante {

        @Id
        private Long idEstudiante;
        private String foto;
        private String primerNombre;
        private String segundoNombre;
        private String primerApellido;
        private String segundoApellido;
        private String semestre;
        private String correo;
        private String idInstitucion;
        private String estado;

        public Estudiante(Long idEstudiante, String foto, String primerNombre, String segundoNombre, String primerApellido, String segundoApellido, String semestre, String correo, String idInstitucion, String estado) {
            this.idEstudiante = idEstudiante;
            this.foto = foto;
            this.primerNombre = primerNombre;
            this.segundoNombre = segundoNombre;
            this.primerApellido = primerApellido;
            this.segundoApellido = segundoApellido;
            this.semestre = semestre;
            this.correo = correo;
            this.idInstitucion = idInstitucion;
            this.estado = estado;
        }

        public Long getIdEstudiante() {
            return this.idEstudiante;
        }

        public void setIdEstudiante(Long idEstudiante) {
            this.idEstudiante = idEstudiante;
        }

        public String getFoto() {
            return this.foto;
        }

        public void setFoto(String foto) {
            this.foto = foto;
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

        public String getSemestre() {
            return this.semestre;
        }

        public void setSemestre(String semestre) {
            this.semestre = semestre;
        }

        public String getCorreo() {
            return this.correo;
        }

        public void setCorreo(String correo) {
            this.correo = correo;
        }

        public String getIdInstitucion() {
            return this.idInstitucion;
        }

        public void setIdInstitucion(String idInstitucion) {
            this.idInstitucion = idInstitucion;
        }

        public String getEstado() {
            return this.estado;
        }

        public void setEstado(String estado) {
            this.estado = estado;
        }  
        
}

