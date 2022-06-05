package Backend.unbosque.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("SubAsignatura")
public class SubAsignatura {

    @Id
    private String idSubAsignatura;
    @DBRef
    private Asignatura asignatura;
    private String descripcion;
    
    public SubAsignatura(String idSubAsignatura, Asignatura asignatura, String descripcion) {
        this.idSubAsignatura = idSubAsignatura;
        this.asignatura = asignatura;
        this.descripcion = descripcion;
    }

    public String getIdSubAsignatura() {
        return idSubAsignatura;
    }

    public void setIdSubAsignatura(String idSubAsignatura) {
        this.idSubAsignatura = idSubAsignatura;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Asignatura getAsignatura() {
        return asignatura;
    }

    public void setAsignatura(Asignatura asignatura) {
        this.asignatura = asignatura;
    }

    @Override
    public String toString() {
        return "SubAsignatura [asignatura=" + asignatura + ", descripcion=" + descripcion + ", idSubAsignatura="
                + idSubAsignatura + "]";
    }  
}
