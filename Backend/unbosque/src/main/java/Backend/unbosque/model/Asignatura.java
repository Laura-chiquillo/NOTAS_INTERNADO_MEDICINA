package Backend.unbosque.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("Asignatura")
public class Asignatura {

    @Id
    private String idAsignatura;
    private String semestreA;
    private String descripcion;
    private int creditoMes;
    private int tiempoMes;
    private int creditosTotales;

    public Asignatura(String idAsignatura, String semestreA, String descripcion, int creditoMes, int tiempoMes,
            int creditosTotales) {
        this.idAsignatura = idAsignatura;
        this.semestreA = semestreA;
        this.descripcion = descripcion;
        this.creditoMes = creditoMes;
        this.tiempoMes = tiempoMes;
        this.creditosTotales = creditosTotales;
    }

    public String getIdAsignatura() {
        return idAsignatura;
    }

    public void setIdAsignatura(String idAsignatura) {
        this.idAsignatura = idAsignatura;
    }

    public String getSemestreA() {
        return semestreA;
    }

    public void setSemestreA(String semestreA) {
        this.semestreA = semestreA;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public int getCreditoMes() {
        return creditoMes;
    }

    public void setCreditoMes(int creditoMes) {
        this.creditoMes = creditoMes;
    }

    public int getTiempoMes() {
        return tiempoMes;
    }

    public void setTiempoMes(int tiempoMes) {
        this.tiempoMes = tiempoMes;
    }

    public int getCreditosTotales() {
        return creditosTotales;
    }

    public void setCreditosTotales(int creditosTotales) {
        this.creditosTotales = creditosTotales;
    }

    @Override
    public String toString() {
        return "Asignatura [creditoMes=" + creditoMes + ", creditosTotales=" + creditosTotales + ", descripcion="
                + descripcion + ", idAsignatura=" + idAsignatura + ", semestreA=" + semestreA + ", tiempoMes="
                + tiempoMes + "]";
    }
}