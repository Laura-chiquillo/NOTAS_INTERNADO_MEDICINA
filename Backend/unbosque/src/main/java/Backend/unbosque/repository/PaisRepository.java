package Backend.unbosque.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import Backend.unbosque.model.Pais;

@Repository
public interface PaisRepository extends MongoRepository<Pais,String>{
    
}
