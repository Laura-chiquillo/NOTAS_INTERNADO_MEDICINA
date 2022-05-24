package Backend.unbosque.security;

public interface AuthenticationService {
    public boolean isLoggedAdmin(String tk);
    public boolean isLoggedCoordinador(String tk);
    public Token createToken(Token token);
}
