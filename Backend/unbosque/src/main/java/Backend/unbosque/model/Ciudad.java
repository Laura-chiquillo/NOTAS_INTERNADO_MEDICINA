package Backend.unbosque.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("Ciudad")
public class Ciudad {

    @Id
    private String idCiudad;
    private String descripcion;
    @DBRef
    private Pais pais;
    
    public Ciudad(String idCiudad, String descripcion, Pais pais) {
        this.idCiudad = idCiudad;
        this.descripcion = descripcion;
        this.pais = pais;
    }

    public String getIdCiudad() {
        return idCiudad;
    }

    public void setIdCiudad(String idCiudad) {
        this.idCiudad = idCiudad;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Pais getPais() {
        return pais;
    }

    public void setPais(Pais pais) {
        this.pais = pais;
    }

    @Override
    public String toString() {
        return "Ciudad [descripcion=" + descripcion + ", idCiudad=" + idCiudad + ", pais=" + pais + "]";
    }
}
