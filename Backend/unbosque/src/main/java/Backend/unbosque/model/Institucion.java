package Backend.unbosque.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("Institucion")
public class Institucion {

        @Id
        private Long idInstitucion;
        private Long idPais;
        private String nombre;
        private String direccion;
        private String estado;

        public Institucion(Long idInstitucion, Long idPais, String nombre, String direccion, String estado) {
            this.idInstitucion = idInstitucion;
            this.idPais = idPais;
            this.nombre = nombre;
            this.direccion = direccion;
            this.estado = estado;
        }

        public Long getIdInstitucion() {
            return idInstitucion;
        }

        public void setIdInstitucion(Long idInstitucion) {
            this.idInstitucion = idInstitucion;
        }

        public Long getIdPais() {
            return idPais;
        }

        public void setIdPais(Long idPais) {
            this.idPais = idPais;
        }

        public String getNombre() {
            return nombre;
        }

        public void setNombre(String nombre) {
            this.nombre = nombre;
        }

        public String getDireccion() {
            return direccion;
        }

        public void setDireccion(String direccion) {
            this.direccion = direccion;
        }

        public String getEstado() {
            return estado;
        }

        public void setEstado(String estado) {
            this.estado = estado;
        }    
}