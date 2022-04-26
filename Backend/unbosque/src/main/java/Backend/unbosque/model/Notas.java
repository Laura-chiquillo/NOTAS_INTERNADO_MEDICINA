package Backend.unbosque.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Getter;
import lombok.Setter;

@Document("Notas")
@Getter @Setter // para no tener que colocar los getters and setters
public class Notas {

        @Id
        private Long idNotas;
        private String idRotacion;
        private String notaCorte1;
        private String notaCorte2;
        private String notaPromedio;

        public Notas(Long idNotas, String idRotacion, String notaCorte1, String notaCorte2, String notaPromedio) {
            this.idNotas = idNotas;
            this.idRotacion = idRotacion;
            this.notaCorte1 = notaCorte1;
            this.notaCorte2 = notaCorte2;
            this.notaPromedio = notaPromedio;
        }    

        public Long getIdNotas() {
            return this.idNotas;
        }

        public void setIdNotas(Long idNotas) {
            this.idNotas = idNotas;
        }

        public String getIdRotacion() {
            return this.idRotacion;
        }

        public void setIdRotacion(String idRotacion) {
            this.idRotacion = idRotacion;
        }

        public String getNotaCorte1() {
            return this.notaCorte1;
        }

        public void setNotaCorte1(String notaCorte1) {
            this.notaCorte1 = notaCorte1;
        }

        public String getNotaCorte2() {
            return this.notaCorte2;
        }

        public void setNotaCorte2(String notaCorte2) {
            this.notaCorte2 = notaCorte2;
        }

        public String getNotaPromedio() {
            return this.notaPromedio;
        }

        public void setNotaPromedio(String notaPromedio) {
            this.notaPromedio = notaPromedio;
        }
        
}
