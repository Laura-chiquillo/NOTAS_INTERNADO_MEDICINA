package Backend.unbosque.security;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationServiceImpl implements AuthenticationService{
    @Autowired
    private MongoOperations mongoOperations;

    @Autowired
    private TokenRepository tokenRepository;

    public boolean isLoggedAdmin(String tk) {
        Token token = tokenRepository.findById(tk).get();
        if (token.getRol().equalsIgnoreCase("Admin")) return true;
        return false;
    }
    public boolean isLoggedCoordinador(String tk) {
        Token token = tokenRepository.findById(tk).get();
        if (token.getRol().equalsIgnoreCase("Coord")) return true;
        return false;
    }
    
    public Token createToken(Token token) {
        return tokenRepository.insert(token);
    }
    @Override
    public void deleteToken(String tk) {
        Token token = tokenRepository.findById(tk).get();
        tokenRepository.delete(token);
    }
}
