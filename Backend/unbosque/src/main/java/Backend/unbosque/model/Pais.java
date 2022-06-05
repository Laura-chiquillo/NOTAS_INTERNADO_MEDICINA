package Backend.unbosque.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("Pais")
public class Pais {

        @Id
        private String idPais;
        private String descripcion;

        public Pais(String idPais, String descripcion) {
            this.idPais = idPais;
            this.descripcion = descripcion;
        }

        public String getIdPais() {
            return this.idPais;
        }

        public void setIdPais(String idPais) {
            this.idPais = idPais;
        }

        public String getDescripcion() {
            return descripcion;
        }

        public void setDescripcion(String descripcion) {
            this.descripcion = descripcion;
        }

        @Override
        public String toString() {
            return "Pais [descripcion=" + descripcion + ", idPais=" + idPais + "]";
        }   
}
