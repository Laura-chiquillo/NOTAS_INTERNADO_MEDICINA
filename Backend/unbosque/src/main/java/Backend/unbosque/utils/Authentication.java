package Backend.unbosque.utils;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;

import Backend.unbosque.model.Token;

public class Authentication {
    @Autowired
    private MongoOperations mongoOperations;

    public boolean isLoggedAdmin(String tk) {
        Query findToken = new Query(Criteria.where("token").is(tk)); // WHERE token = tk
        List<Token> token = mongoOperations.find(findToken, Token.class); // Select * From Token Where...
        if (!token.isEmpty() && token.get(0).getRol()=="Admin") return true;
        return false;
    }
    public boolean isLoggedCoordinador(String tk) {
        Query findToken = new Query(Criteria.where("token").is(tk)); // WHERE token = tk
        List<Token> token = mongoOperations.find(findToken, Token.class); // Select * From Token Where...
        if (!token.isEmpty() && token.get(0).getRol()=="Coord") return true;
        return false;
    }
}
