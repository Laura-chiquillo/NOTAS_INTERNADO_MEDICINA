package Backend.unbosque.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("Definitivas")
public class Definitiva {
    
    @Id
    private String idDefinitiva;
    @DBRef
    private Estudiante estudiante;
    @DBRef
    private Asignatura asignatura;
    private List<Double> notas;
    private Double notaDefinitiva;

    public Definitiva(String idDefinitiva, Estudiante estudiante, Asignatura asignatura, List<Double> notas,
            Double notaDefinitiva) {
        this.idDefinitiva = idDefinitiva;
        this.estudiante = estudiante;
        this.asignatura = asignatura;
        this.notas = notas;
        this.notaDefinitiva = notaDefinitiva;
    }

    public String getIdDefinitiva() {
        return idDefinitiva;
    }

    public void setIdDefinitiva(String idDefinitiva) {
        this.idDefinitiva = idDefinitiva;
    }
    
    public Estudiante getEstudiante() {
        return estudiante;
    }

    public void setEstudiante(Estudiante estudiante) {
        this.estudiante = estudiante;
    }

    public Asignatura getAsignatura() {
        return asignatura;
    }

    public void setAsignatura(Asignatura asignatura) {
        this.asignatura = asignatura;
    }

    public List<Double> getNotas() {
        return notas;
    }

    public void setNotas(List<Double> notas) {
        this.notas = notas;
    }

    public Double getNotaDefinitiva() {
        return notaDefinitiva;
    }

    public void setNotaDefinitiva(Double notaDefinitiva) {
        this.notaDefinitiva = notaDefinitiva;
    }

    @Override
    public String toString() {
        return "Definitiva [asignatura=" + asignatura + ", estudiante=" + estudiante + ", idDefinitiva=" + idDefinitiva
                + ", notaDefinitiva=" + notaDefinitiva + ", notas=" + notas + "]";
    }
}