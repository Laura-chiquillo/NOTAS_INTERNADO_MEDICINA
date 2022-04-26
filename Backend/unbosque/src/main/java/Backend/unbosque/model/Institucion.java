package Backend.unbosque.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Getter;
import lombok.Setter;

@Document("Institucion")
@Getter @Setter // para no tener que colocar los getters and setters
public class Institucion {

        @Id
        private Long idInstitucion;
        private String idPais;
        private String nombre;
        private String direccion;
        private String correo;
        private String estado;

        public Institucion(Long idInstitucion, String idPais, String nombre, String direccion, String correo, String estado) {
            this.idInstitucion = idInstitucion;
            this.idPais = idPais;
            this.nombre = nombre;
            this.direccion = direccion;
            this.correo = correo;
            this.estado = estado;
        }

        public Long getIdInstitucion() {
            return this.idInstitucion;
        }

        public void setIdInstitucion(Long idInstitucion) {
            this.idInstitucion = idInstitucion;
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

        public String getDireccion() {
            return this.direccion;
        }

        public void setDireccion(String direccion) {
            this.direccion = direccion;
        }

        public String getCorreo() {
            return this.correo;
        }

        public void setCorreo(String correo) {
            this.correo = correo;
        }

        public String getEstado() {
            return this.estado;
        }

        public void setEstado(String estado) {
            this.estado = estado;
        }    
        
}
