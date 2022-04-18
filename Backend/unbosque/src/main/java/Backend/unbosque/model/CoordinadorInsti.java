package Backend.unbosque.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Getter;
import lombok.Setter;

@Document("CoordinadorInsti")
@Getter @Setter
public class CoordinadorInsti {

    @Id
    
    private String idCoordinador;
    private String primerNombre;
    private String segundoNombre;
    private String primerApellido;
    private String segundoApellido;
    private String idInstitucion;
    private String correo;
    private String contraseña;
    
    public CoordinadorInsti(String idCoordinador, String primerNombre, String segundoNombre, String primerApellido, String segundoApellido, String idInstitucion, String correo, String contraseña){
        this.idCoordinador = idCoordinador;
        this.primerNombre = primerNombre;
        this.segundoNombre = segundoNombre;
        this.primerApellido = primerApellido;
        this.segundoApellido = segundoApellido;
        this.idInstitucion = idInstitucion
        this.correo = correo;
        this.contraseña = contraseña;
    }

}
