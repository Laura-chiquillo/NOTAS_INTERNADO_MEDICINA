package Backend.unbosque.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import Backend.unbosque.model.Ciudad;

@Repository
public interface CiudadRepository extends MongoRepository<Ciudad,String>{
    
}
