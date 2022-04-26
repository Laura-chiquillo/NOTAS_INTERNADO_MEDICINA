package Backend.unbosque.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;
import lombok.Setter;

@Document("Admin")
@Getter @Setter // para no tener que colocar los getters and setters
public class Admin {

        @Id
        private String idAdmin;

        private String primerNombre;
        private String segundoNombre;
        private String primerApellido;
        private String segundoApellido;
        private String correo;
        private String contraseña;
        

    public Admin(String idAdmin, String primerNombre, String segundoNombre, String primerApellido, String segundoApellido, String correo, String contraseña) {
        this.idAdmin = idAdmin;
        this.primerNombre = primerNombre;
        this.segundoNombre = segundoNombre;
        this.primerApellido = primerApellido;
        this.segundoApellido = segundoApellido;
        this.correo = correo;
        this.contraseña = contraseña;
    }
    
        
}
