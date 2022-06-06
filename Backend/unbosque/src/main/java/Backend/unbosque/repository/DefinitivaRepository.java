package Backend.unbosque.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import Backend.unbosque.model.Definitiva;

@Repository
public interface DefinitivaRepository extends MongoRepository<Definitiva, String> {
    
}
