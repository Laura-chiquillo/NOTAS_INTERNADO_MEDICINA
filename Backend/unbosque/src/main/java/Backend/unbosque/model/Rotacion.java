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
        private String observaciones;
        private String evaluador1;
        private String firma1;
        private String firma2;
        private String evaluador2;  

        public Rotacion(String idRotacion, Estudiante estudiante, Institucion institucion, Asignatura asignatura,
                SubAsignatura subAsignatura, double notaHistoriaClinica, double notaResponsabilidad,
                double notaPractica, double notaCyAC, double notaRotacion, String mes, LocalDate fechaInicio,
                 LocalDate fechaCierre, String observaciones, String evaluador1, String firma1,
                String firma2, String evaluador2) {

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
        return this.idRotacion;
    }

    public void setIdRotacion(String idRotacion) {
        this.idRotacion = idRotacion;
    }

    public Estudiante getEstudiante() {
        return this.estudiante;
    }

    public void setEstudiante(Estudiante estudiante) {
        this.estudiante = estudiante;
    }

    public Institucion getInstitucion() {
        return this.institucion;
    }

    public void setInstitucion(Institucion institucion) {
        this.institucion = institucion;
    }

    public Asignatura getAsignatura() {
        return this.asignatura;
    }

    public void setAsignatura(Asignatura asignatura) {
        this.asignatura = asignatura;
    }

    public SubAsignatura getSubAsignatura() {
        return this.subAsignatura;
    }

    public void setSubAsignatura(SubAsignatura subAsignatura) {
        this.subAsignatura = subAsignatura;
    }

    public double getNotaHistoriaClinica() {
        return this.notaHistoriaClinica;
    }

    public void setNotaHistoriaClinica(double notaHistoriaClinica) {
        this.notaHistoriaClinica = notaHistoriaClinica;
    }

    public double getNotaResponsabilidad() {
        return this.notaResponsabilidad;
    }

    public void setNotaResponsabilidad(double notaResponsabilidad) {
        this.notaResponsabilidad = notaResponsabilidad;
    }

    public double getNotaPractica() {
        return this.notaPractica;
    }

    public void setNotaPractica(double notaPractica) {
        this.notaPractica = notaPractica;
    }

    public double getNotaCyAC() {
        return this.notaCyAC;
    }

    public void setNotaCyAC(double notaCyAC) {
        this.notaCyAC = notaCyAC;
    }

    public double getNotaRotacion() {
        return this.notaRotacion;
    }

    public void setNotaRotacion(double notaRotacion) {
        this.notaRotacion = notaRotacion;
    }

    public String getMes() {
        return this.mes;
    }

    public void setMes(String mes) {
        this.mes = mes;
    }

    public LocalDate getFechaInicio() {
        return this.fechaInicio;
    }

    public void setFechaInicio(LocalDate fechaInicio) {
        this.fechaInicio = fechaInicio;
    }

    public LocalDate getFechaCierre() {
        return this.fechaCierre;
    }

    public void setFechaCierre(LocalDate fechaCierre) {
        this.fechaCierre = fechaCierre;
    }

    public String getObservaciones() {
        return this.observaciones;
    }

    public void setObservaciones(String observaciones) {
        this.observaciones = observaciones;
    }

    public String getEvaluador1() {
        return this.evaluador1;
    }

    public void setEvaluador1(String evaluador1) {
        this.evaluador1 = evaluador1;
    }

    public String getFirma1() {
        return this.firma1;
    }

    public void setFirma1(String firma1) {
        this.firma1 = firma1;
    }

    public String getFirma2() {
        return this.firma2;
    }

    public void setFirma2(String firma2) {
        this.firma2 = firma2;
    }

    public String getEvaluador2() {
        return this.evaluador2;
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