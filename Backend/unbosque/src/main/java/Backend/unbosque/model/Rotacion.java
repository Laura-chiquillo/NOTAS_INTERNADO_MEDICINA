package Backend.unbosque.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("Rotaciones")
public class Rotacion {

        @Id
        private String idRotacion;
        private String idEstudiante;
        private double nota;
        private String mes;
        private String fechaInicio;
        private String fechaCierre;
        
        public Rotacion(String idRotacion, String idEstudiante, double nota, String mes, String fechaInicio,
              String fechaCierre) {
            this.idRotacion = idRotacion;
            this.idEstudiante = idEstudiante;
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

        public String getIdEstudiante() {
            return idEstudiante;
        }

        public void setIdEstudiante(String idEstudiante) {
            this.idEstudiante = idEstudiante;
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
}