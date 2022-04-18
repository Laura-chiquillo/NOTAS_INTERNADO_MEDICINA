package Backend.unbosque.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Getter;
import lombok.Setter;

@Document("Pais")
@Getter @Setter // para no tener que colocar los getters and setters
public class Pais {

        @Id
        private String idPais;
        private String nombre;
        private String ciudad;
        

    public Pais(String idPais, String nombre, String ciudad) {
        this.idPais = idPais;
        this.nombre = nombre;
        this.ciudad = ciudad;
    }
    
        
}
