package Backend.unbosque.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import Backend.unbosque.model.CoordinadorInsti;

@Repository
public interface CoordinadorInstiRepository extends MongoRepository<CoordinadorInsti, Long> {
    
}
