package Backend.unbosque.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("SubAsignatura")
public class SubAsignatura {

    @Id
    private String idSubAsignatura;
    private String descripcion;
    
    public SubAsignatura(String idSubAsignatura, String descripcion) {
        this.idSubAsignatura = idSubAsignatura;
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

    @Override
    public String toString() {
        return "SubAsignatura [descripcion=" + descripcion + ", idSubAsignatura=" + idSubAsignatura + "]";
    }
}
