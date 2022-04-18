package Backend.unbosque.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Getter;
import lombok.Setter;

@Document("Notas")
@Getter @Setter // para no tener que colocar los getters and setters
public class Notas {

        @Id
        private String idNotas;
        private String idRotacion;
        private String notaCorte1;
        private String notaCorte2;
        private String notaPromedio;
        

    public Notas(String idNotas, String idRotacion, String notaCorte1, String notaCorte2, String notaPromedio) {
        this.idNotas = idNotas;
        this.idRotacion = idRotacion;
        this.notaCorte1 = notaCorte1;
        this.notaCorte2 = notaCorte2;
        this.notaPromedio = notaPromedio;
    }
    
        
}
