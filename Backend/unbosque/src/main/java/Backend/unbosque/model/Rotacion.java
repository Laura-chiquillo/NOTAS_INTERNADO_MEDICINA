package Backend.unbosque.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("Rotaciones")
public class Rotacion {

        @Id
        private String idRotacion;
        @DBRef
        private Estudiante estudiante;
        @DBRef
        private Institucion institucion;
        @DBRef
        private Asignatura asignatura;
        private String idSubAsignatura;
        private double nota;
        private String mes;
        private String fechaInicio;
        private String fechaCierre; 

        public Rotacion(String idRotacion, Estudiante estudiante, Institucion institucion, Asignatura asignatura,
                String idSubAsignatura, double nota, String mes, String fechaInicio, String fechaCierre) {
            this.idRotacion = idRotacion;
            this.estudiante = estudiante;
            this.institucion = institucion;
            this.asignatura = asignatura;
            this.idSubAsignatura = idSubAsignatura;
            this.nota = nota;
            this.mes = mes;
            this.fechaInicio = fechaInicio;
            this.fechaCierre = fechaCierre;
        }

        public String getIdRotacion() {
            return idRotacion;
        }

        public void setIdRotacion(String idRotacion) {
            this.idRotacion = idRotacion;
        }

        public Estudiante getEstudiante() {
            return estudiante;
        }

        public void setEstudiante(Estudiante estudiante) {
            this.estudiante = estudiante;
        }

        public Institucion getInstitucion() {
            return institucion;
        }

        public void setInstitucion(Institucion institucion) {
            this.institucion = institucion;
        }

        public Asignatura getAsignatura() {
            return asignatura;
        }

        public void setAsignatura(Asignatura asignatura) {
            this.asignatura = asignatura;
        }

        public String getIdSubAsignatura() {
            return idSubAsignatura;
        }

        public void setIdSubAsignatura(String idSubAsignatura) {
            this.idSubAsignatura = idSubAsignatura;
        }

        public double getNota() {
            return nota;
        }

        public void setNota(double nota) {
            this.nota = nota;
        }

        public String getMes() {
            return mes;
        }

        public void setMes(String mes) {
            this.mes = mes;
        }

        public String getFechaInicio() {
            return fechaInicio;
        }

        public void setFechaInicio(String fechaInicio) {
            this.fechaInicio = fechaInicio;
        }

        public String getFechaCierre() {
            return fechaCierre;
        }

        public void setFechaCierre(String fechaCierre) {
            this.fechaCierre = fechaCierre;
        }

        @Override
        public String toString() {
            return "Rotacion [asignatura=" + asignatura + ", estudiante=" + estudiante + ", fechaCierre=" + fechaCierre
                    + ", fechaInicio=" + fechaInicio + ", idRotacion=" + idRotacion + ", idSubAsignatura="
                    + idSubAsignatura + ", institucion=" + institucion + ", mes=" + mes + ", nota=" + nota + "]";
        }    
}