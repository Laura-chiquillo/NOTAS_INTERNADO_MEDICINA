package Backend.unbosque.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import Backend.unbosque.model.Institucion;

@Repository
public interface InstitucionRepository extends MongoRepository<Institucion, Long>{
    
}
