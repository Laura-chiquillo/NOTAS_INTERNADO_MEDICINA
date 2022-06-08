package Backend.unbosque.controller;

import Backend.unbosque.model.Email;
import Backend.unbosque.service.serviceApi.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController

public class EmailController {
    @Autowired private EmailService emailService;
 
    @PostMapping("/sendMail")
    public String
    sendMail(@RequestBody Email email)
    {
        String status
            = emailService.sendSimpleMail(email);
 
        return status;
    }
 
}
