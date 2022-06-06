package Backend.unbosque.model;

import java.time.LocalDate;

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
        @DBRef
        private SubAsignatura subAsignatura;
        private double notaHistoriaClinica;
        private double notaResponsabilidad;
        private double notaPractica;
        private double notaCyAC;
        private double notaRotacion;
        private String mes;
        private LocalDate fechaInicio;
        private LocalDate fechaCierre;  

        public Rotacion(String idRotacion, Estudiante estudiante, Institucion institucion, Asignatura asignatura,
                SubAsignatura subAsignatura, double notaHistoriaClinica, double notaResponsabilidad,
                double notaPractica, double notaCyAC, double notaRotacion, String mes, LocalDate fechaInicio,
                LocalDate fechaCierre) {
            this.idRotacion = idRotacion;
            this.estudiante = estudiante;
            this.institucion = institucion;
            this.asignatura = asignatura;
            this.subAsignatura = subAsignatura;
            this.notaHistoriaClinica = notaHistoriaClinica;
            this.notaResponsabilidad = notaResponsabilidad;
            this.notaPractica = notaPractica;
            this.notaCyAC = notaCyAC;
            this.notaRotacion = notaRotacion;
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

        public SubAsignatura getSubAsignatura() {
            return subAsignatura;
        }

        public void setSubAsignatura(SubAsignatura subAsignatura) {
            this.subAsignatura = subAsignatura;
        }

        public double getNotaHistoriaClinica() {
            return notaHistoriaClinica;
        }

        public void setNotaHistoriaClinica(double notaHistoriaClinica) {
            this.notaHistoriaClinica = notaHistoriaClinica;
        }

        public double getNotaResponsabilidad() {
            return notaResponsabilidad;
        }

        public void setNotaResponsabilidad(double notaResponsabilidad) {
            this.notaResponsabilidad = notaResponsabilidad;
        }

        public double getNotaPractica() {
            return notaPractica;
        }

        public void setNotaPractica(double notaPractica) {
            this.notaPractica = notaPractica;
        }

        public double getNotaCyAC() {
            return notaCyAC;
        }

        public void setNotaCyAC(double notaCyAC) {
            this.notaCyAC = notaCyAC;
        }

        public double getNotaRotacion() {
            return notaRotacion;
        }

        public void setNotaRotacion(double notaRotacion) {
            this.notaRotacion = notaRotacion;
        }

        public String getMes() {
            return mes;
        }

        public void setMes(String mes) {
            this.mes = mes;
        }

        public LocalDate getFechaInicio() {
            return fechaInicio;
        }

        public void setFechaInicio(LocalDate fechaInicio) {
            this.fechaInicio = fechaInicio;
        }

        public LocalDate getFechaCierre() {
            return fechaCierre;
        }

        public void setFechaCierre(LocalDate fechaCierre) {
            this.fechaCierre = fechaCierre;
        }

        public Asignatura getAsignatura() {
            return asignatura;
        }

        public void setAsignatura(Asignatura asignatura) {
            this.asignatura = asignatura;
        }

        @Override
        public String toString() {
            return "Rotacion [asignatura=" + asignatura + ", estudiante=" + estudiante + ", fechaCierre=" + fechaCierre
                    + ", fechaInicio=" + fechaInicio + ", idRotacion=" + idRotacion + ", institucion=" + institucion
                    + ", mes=" + mes + ", notaCyAC=" + notaCyAC + ", notaHistoriaClinica=" + notaHistoriaClinica
                    + ", notaPractica=" + notaPractica + ", notaResponsabilidad=" + notaResponsabilidad
                    + ", notaRotacion=" + notaRotacion + ", subAsignatura=" + subAsignatura + "]";
        }
}