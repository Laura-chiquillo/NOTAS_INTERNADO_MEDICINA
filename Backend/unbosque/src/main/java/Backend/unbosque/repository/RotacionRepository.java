package Backend.unbosque.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import Backend.unbosque.model.Rotacion;

@Repository
public interface RotacionRepository extends MongoRepository<Rotacion, Long>{
    
}
