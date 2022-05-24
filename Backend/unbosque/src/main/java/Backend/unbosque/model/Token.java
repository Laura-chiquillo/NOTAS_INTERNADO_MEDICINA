package Backend.unbosque.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("Token")
public class Token {
    @Id
    private String token;
    private String idUsuario;
    private String rol;

    public Token(String token, String idUsuario, String rol){
        this.token = token;
        this.idUsuario = idUsuario;
        this.rol = rol;
    }

    public String getToken() {
        return token;
    }
    public void setToken(String token) {
        this.token = token;
    }
    public String getIdUsuario() {
        return idUsuario;
    }
    public void setIdUsuario(String idUsuario) {
        this.idUsuario = idUsuario;
    }
    public String getRol() {
        return rol;
    }
    public void setRol(String rol) {
        this.rol = rol;
    }
}
