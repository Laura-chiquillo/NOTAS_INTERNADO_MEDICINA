package Backend.unbosque.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Getter;
import lombok.Setter;

@Document("Institucion")
@Getter @Setter // para no tener que colocar los getters and setters
public class Institucion {

        @Id
        private String idInstitucion;
        private String idPais;
        private String nombre;
        private String direccion;
        private String correo;
        private String estado;
        

    public Institucion(String idInstitucion, String idPais, String nombre, String direccion, String correo, String estado) {
        this.idInstitucion = idInstitucion;
        this.idPais = idPais;
        this.nombre = nombre;
        this.direccion = direccion;
        this.correo = correo;
        this.estado = estado;
    }
    
        
}
