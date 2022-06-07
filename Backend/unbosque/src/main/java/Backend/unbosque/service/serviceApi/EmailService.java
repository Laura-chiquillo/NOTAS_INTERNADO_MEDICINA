package Backend.unbosque.service.serviceApi;

import Backend.unbosque.model.Email;

public interface EmailService {
    
    String sendSimpleMail(Email email);
    
}
