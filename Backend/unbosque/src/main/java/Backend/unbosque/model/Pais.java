package Backend.unbosque.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("Pais")
public class Pais {

        @Id
        private Long idPais;
        private String nombre;
        private String ciudad;

        public Pais(Long idPais, String nombre, String ciudad) {
            this.idPais = idPais;
            this.nombre = nombre;
            this.ciudad = ciudad;
        }

        public Long getIdPais() {
            return this.idPais;
        }

        public void setIdPais(Long idPais) {
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
