package Backend.unbosque; 

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories
public class UnbosqueApplication {

	public static void main(String[] args) {
		SpringApplication.run(UnbosqueApplication.class, args);
	}

}
