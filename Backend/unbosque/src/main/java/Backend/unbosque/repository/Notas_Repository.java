package Backend.unbosque.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import Backend.unbosque.model.Notas;

@Repository
public interface Notas_Repository extends MongoRepository<Notas, Long>{
    
}
