package Backend.unbosque.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Getter;
import lombok.Setter;

@Document("Rotaciones")
@Getter @Setter // para no tener que colocar los getters and setters
public class Rotaciones {

        @Id
        private String idRotacion;
        private String nombre;
        private String horaFechaInicio;
        private String horaFechaCierre;
        

    public Rotaciones(String idRotacion, String nombre, String horaFechaInicio, String horaFechaCierre) {
        this.idRotacion = idRotacion;
        this.nombre = nombre;
        this.horaFechaInicio = horaFechaInicio;
        this.horaFechaCierre = horaFechaCierre;
    }
    
        
}

