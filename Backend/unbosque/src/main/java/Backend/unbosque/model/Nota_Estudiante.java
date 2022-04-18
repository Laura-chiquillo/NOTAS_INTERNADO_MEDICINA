package Backend.unbosque.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Getter;
import lombok.Setter;

@Document("Nota_Estudiante")
@Getter @Setter // para no tener que colocar los getters and setters
public class Nota_Estudiante {

        @Id
        private String idNota_Estudiante;
        private String idNota;
        private String idEstudiante;
        

    public Nota_Estudiante(String idNota_Estudiante, String idNota, String idEstudiante) {
        this.idNota_Estudiante = idNota_Estudiante;
        this.idNota = idNota;
        this.idEstudiante = idEstudiante;

    }
    
        
}
