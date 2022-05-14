package Backend.unbosque.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import Backend.unbosque.model.Estudiante;

@Repository
public interface EstudianteRepository extends MongoRepository<Estudiante, String>{
    
}
