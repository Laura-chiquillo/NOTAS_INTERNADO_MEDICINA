package Backend.unbosque.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("Pais")
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

        public String getIdPais() {
            return this.idPais;
        }

        public void setIdPais(String idPais) {
            this.idPais = idPais;
        }

        public String getNombre() {
            return this.nombre;
        }

        public void setNombre(String nombre) {
            this.nombre = nombre;
        }

        public String getCiudad() {
            return this.ciudad;
        }

        public void setCiudad(String ciudad) {
            this.ciudad = ciudad;
        }    
        
}
