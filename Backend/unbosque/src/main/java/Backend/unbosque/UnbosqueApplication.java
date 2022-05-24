package Backend.unbosque; 

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import Backend.unbosque.repository.AdminRepository;

@SpringBootApplication
@EnableMongoRepositories
public class UnbosqueApplication {

	@Autowired
	AdminRepository admin;

	public static void main(String[] args) {
		SpringApplication.run(UnbosqueApplication.class, args);
	
	}
}