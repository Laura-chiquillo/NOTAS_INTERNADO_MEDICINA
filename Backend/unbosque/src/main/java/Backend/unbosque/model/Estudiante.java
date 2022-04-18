package Backend.unbosque.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Getter;
import lombok.Setter;

@Document("Estudiante")
@Getter @Setter // para no tener que colocar los getters and setters
public class Estudiante {

        @Id
        private String idEstudiante;
        private String foto;
        private String primerNombre;
        private String segundoNombre;
        private String primerApellido;
        private String segundoApellido;
        private String semestre;
        private String correo;
        private String idInstitucion;
        private String estado;
        

    public Estudiante(String idEstudiante, String foto, String primerNombre, String segundoNombre, String primerApellido, String segundoApellido, String semestre, String correo, String idInstitucion, String estado) {
        this.idEstudiante = idEstudiante;
        this.foto = foto;
        this.primerNombre = primerNombre;
        this.segundoNombre = segundoNombre;
        this.primerApellido = primerApellido;
        this.segundoApellido = segundoApellido;
        this.semestre = semestre;
        this.correo = correo;
        this.idInstitucion = idInstitucion;
        this.estado = estado;
    }
    
        
}

