package Backend.unbosque.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import Backend.unbosque.model.CoordinadorInsti;

@Repository
public interface CoordinadorInstiRepository extends MongoRepository<CoordinadorInsti, String> {
    Optional<CoordinadorInsti> findByCorreo(String correo);
}
