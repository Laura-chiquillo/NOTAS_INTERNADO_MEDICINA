package Backend.unbosque.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import Backend.unbosque.model.SubAsignatura;

@Repository
public interface SubAsignaturaRepository extends MongoRepository<SubAsignatura, String>{
    
}
