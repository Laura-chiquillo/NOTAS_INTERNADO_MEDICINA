package Backend.unbosque.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("Rotaciones")
public class Rotacion {

        @Id
        private Long idRotacion;
        private Long idEstudiante;
        private double nota;
        private String mes;
        private String fechaInicio;
        private String fechaCierre;
        
        public Rotacion(Long idRotacion, Long idEstudiante, double nota, String mes, String fechaInicio,
                String fechaCierre) {
            this.idRotacion = idRotacion;
            this.idEstudiante = idEstudiante;
            this.nota = nota;
            this.mes = mes;
            this.fechaInicio = fechaInicio;
            this.fechaCierre = fechaCierre;
        }

        public Long getIdRotacion() {
            return idRotacion;
        }

        public void setIdRotacion(Long idRotacion) {
            this.idRotacion = idRotacion;
        }

        public Long getIdEstudiante() {
            return idEstudiante;
        }

        public void setIdEstudiante(Long idEstudiante) {
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