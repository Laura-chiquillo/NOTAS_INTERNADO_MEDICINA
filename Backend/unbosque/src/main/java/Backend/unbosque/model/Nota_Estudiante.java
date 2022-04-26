package Backend.unbosque.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Getter;
import lombok.Setter;

@Document("Nota_Estudiante")
@Getter @Setter // para no tener que colocar los getters and setters
public class Nota_Estudiante {

        @Id
        private Long idNota_Estudiante;
        private String idNota;
        private String idEstudiante;

        public Nota_Estudiante(Long idNota_Estudiante, String idNota, String idEstudiante) {
            this.idNota_Estudiante = idNota_Estudiante;
            this.idNota = idNota;
            this.idEstudiante = idEstudiante;
    
        }

        public Long getIdNota_Estudiante() {
            return this.idNota_Estudiante;
        }

        public void setIdNota_Estudiante(Long idNota_Estudiante) {
            this.idNota_Estudiante = idNota_Estudiante;
        }

        public String getIdNota() {
            return this.idNota;
        }

        public void setIdNota(String idNota) {
            this.idNota = idNota;
        }

        public String getIdEstudiante() {
            return this.idEstudiante;
        }

        public void setIdEstudiante(String idEstudiante) {
            this.idEstudiante = idEstudiante;
        }    
        
}
