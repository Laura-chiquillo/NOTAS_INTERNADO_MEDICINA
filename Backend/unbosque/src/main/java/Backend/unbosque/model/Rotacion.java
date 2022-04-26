package Backend.unbosque.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Getter;
import lombok.Setter;

@Document("Rotaciones")
@Getter @Setter // para no tener que colocar los getters and setters
public class Rotacion {

        @Id
        private Long idRotacion;
        private String nombre;
        private String horaFechaInicio;
        private String horaFechaCierre;

        public Rotacion(Long idRotacion, String nombre, String horaFechaInicio, String horaFechaCierre) {
            this.idRotacion = idRotacion;
            this.nombre = nombre;
            this.horaFechaInicio = horaFechaInicio;
            this.horaFechaCierre = horaFechaCierre;
        }

        public Long getIdRotacion() {
            return this.idRotacion;
        }

        public void setIdRotacion(Long idRotacion) {
            this.idRotacion = idRotacion;
        }

        public String getNombre() {
            return this.nombre;
        }

        public void setNombre(String nombre) {
            this.nombre = nombre;
        }

        public String getHoraFechaInicio() {
            return this.horaFechaInicio;
        }

        public void setHoraFechaInicio(String horaFechaInicio) {
            this.horaFechaInicio = horaFechaInicio;
        }

        public String getHoraFechaCierre() {
            return this.horaFechaCierre;
        }

        public void setHoraFechaCierre(String horaFechaCierre) {
            this.horaFechaCierre = horaFechaCierre;
        }    
        
}

