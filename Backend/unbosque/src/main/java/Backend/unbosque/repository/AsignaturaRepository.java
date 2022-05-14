package Backend.unbosque.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import Backend.unbosque.model.Asignatura;

@Repository
public interface AsignaturaRepository extends MongoRepository<Asignatura, String>{
    
}
