package Backend.unbosque.security;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationServiceImpl implements AuthenticationService{
    @Autowired
    private MongoOperations mongoOperations;

    @Autowired
    private TokenRepository tokenRepository;

    public boolean isLoggedAdmin(String tk) {
        Optional<Token> token = tokenRepository.findById(tk);
        if (token.isPresent() && token.get().getRol().equalsIgnoreCase("Admin")) return true;
        return false;
    }
    public boolean isLoggedCoordinador(String tk) {
        Optional<Token> token = tokenRepository.findById(tk);
        if (token.isPresent() && token.get().getRol().equalsIgnoreCase("Coord")) return true;
        return false;
    }
    
    public Token createToken(Token token) {
        return tokenRepository.insert(token);
    }
    @Override
    public void deleteToken(String tk) {
        Optional<Token> token = tokenRepository.findById(tk);
        if (token.isPresent()) {
            tokenRepository.delete(token.get());
        }
    }
}
