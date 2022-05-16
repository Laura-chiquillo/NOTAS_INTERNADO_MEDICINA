package Backend.unbosque.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import Backend.unbosque.model.Admin;

@Repository
public interface AdminRepository extends MongoRepository<Admin, String> {

    
}