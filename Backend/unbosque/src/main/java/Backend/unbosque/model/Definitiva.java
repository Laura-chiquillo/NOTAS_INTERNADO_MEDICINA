package Backend.unbosque.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("Definitivas")
public class Definitiva {
    
    @Id
    private String idDefinitiva;
    @DBRef
    private Estudiante iEstudiante;
    @DBRef
    private Asignatura idAsignatura;
    private Double nota1;
    private Double nota2;
    private Double nota3;
    private Double notaDefinitiva;

    public Definitiva(String idDefinitiva, Estudiante iEstudiante, Asignatura idAsignatura, Double nota1, Double nota2,
            Double nota3, Double notaDefinitiva) {
        this.idDefinitiva = idDefinitiva;
        this.iEstudiante = iEstudiante;
        this.idAsignatura = idAsignatura;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
        this.notaDefinitiva = notaDefinitiva;
    }

    public String getIdDefinitiva() {
        return idDefinitiva;
    }

    public void setIdDefinitiva(String idDefinitiva) {
        this.idDefinitiva = idDefinitiva;
    }

    public Estudiante getiEstudiante() {
        return iEstudiante;
    }

    public void setiEstudiante(Estudiante iEstudiante) {
        this.iEstudiante = iEstudiante;
    }

    public Asignatura getIdAsignatura() {
        return idAsignatura;
    }

    public void setIdAsignatura(Asignatura idAsignatura) {
        this.idAsignatura = idAsignatura;
    }

    public Double getNota1() {
        return nota1;
    }

    public void setNota1(Double nota1) {
        this.nota1 = nota1;
    }

    public Double getNota2() {
        return nota2;
    }

    public void setNota2(Double nota2) {
        this.nota2 = nota2;
    }

    public Double getNota3() {
        return nota3;
    }

    public void setNota3(Double nota3) {
        this.nota3 = nota3;
    }

    public Double getNotaDefinitiva() {
        return notaDefinitiva;
    }

    public void setNotaDefinitiva(Double notaDefinitiva) {
        this.notaDefinitiva = notaDefinitiva;
    }

    @Override
    public String toString() {
        return "Definitiva [iEstudiante=" + iEstudiante + ", idAsignatura=" + idAsignatura + ", idDefinitiva="
                + idDefinitiva + ", nota1=" + nota1 + ", nota2=" + nota2 + ", nota3=" + nota3 + ", notaDefinitiva="
                + notaDefinitiva + "]";
    }    
}