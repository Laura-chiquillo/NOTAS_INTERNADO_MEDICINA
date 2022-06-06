package Backend.unbosque.model;

import java.time.LocalDate;
import java.util.List;

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
        private String observaciones;
        private String evaluador1;
        private List<String> firma1;
        private List<String> firma2;
        private String evaluador2;  

        public Rotacion(String idRotacion, Estudiante estudiante, Institucion institucion, Asignatura asignatura,
                SubAsignatura subAsignatura, double notaHistoriaClinica, double notaResponsabilidad,
                double notaPractica, double notaCyAC, double notaRotacion, String mes, LocalDate fechaInicio,
                LocalDate fechaCierre, String observaciones, String evaluador1, List<String> firma1,
                List<String> firma2, String evaluador2) {
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
            this.observaciones = observaciones;
            this.evaluador1 = evaluador1;
            this.firma1 = firma1;
            this.firma2 = firma2;
            this.evaluador2 = evaluador2;
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

        public String getObservaciones() {
            return observaciones;
        }

        public void setObservaciones(String observaciones) {
            this.observaciones = observaciones;
        }

        public String getEvaluador1() {
            return evaluador1;
        }

        public void setEvaluador1(String evaluador1) {
            this.evaluador1 = evaluador1;
        }

        public List<String> getFirma1() {
            return firma1;
        }

        public void setFirma1(List<String> firma1) {
            this.firma1 = firma1;
        }

        public List<String> getFirma2() {
            return firma2;
        }

        public void setFirma2(List<String> firma2) {
            this.firma2 = firma2;
        }

        public String getEvaluador2() {
            return evaluador2;
        }

        public void setEvaluador2(String evaluador2) {
            this.evaluador2 = evaluador2;
        }

        @Override
        public String toString() {
            return "Rotacion [asignatura=" + asignatura + ", estudiante=" + estudiante + ", evaluador1=" + evaluador1
                    + ", evaluador2=" + evaluador2 + ", fechaCierre=" + fechaCierre + ", fechaInicio=" + fechaInicio
                    + ", firma1=" + firma1 + ", firma2=" + firma2 + ", idRotacion=" + idRotacion + ", institucion="
                    + institucion + ", mes=" + mes + ", notaCyAC=" + notaCyAC + ", notaHistoriaClinica="
                    + notaHistoriaClinica + ", notaPractica=" + notaPractica + ", notaResponsabilidad="
                    + notaResponsabilidad + ", notaRotacion=" + notaRotacion + ", observaciones=" + observaciones
                    + ", subAsignatura=" + subAsignatura + "]";
        }   
}