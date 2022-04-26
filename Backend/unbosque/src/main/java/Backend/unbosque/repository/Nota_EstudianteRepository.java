package Backend.unbosque.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import Backend.unbosque.model.Nota_Estudiante;

@Repository
public interface Nota_EstudianteRepository extends MongoRepository<Nota_Estudiante, Long>{
    
}
