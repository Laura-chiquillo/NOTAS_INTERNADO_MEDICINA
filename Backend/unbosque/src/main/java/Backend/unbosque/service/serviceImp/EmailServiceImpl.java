package Backend.unbosque.service.serviceImp;

import Backend.unbosque.model.Email;
import Backend.unbosque.service.serviceApi.EmailService;

import java.io.File;
import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service

public class EmailServiceImpl implements EmailService {

    @Autowired private JavaMailSender javaMailSender;
 
    @Value("${spring.mail.username}") private String sender;

    @Override
    public String sendSimpleMail(Email email) {
 
 
        try {
 
            SimpleMailMessage mailMessage
                = new SimpleMailMessage();
 
            mailMessage.setFrom("notasinternadomedicinaueb@gmail.com");
            mailMessage.setTo(email.getRecipient());
            mailMessage.setText(email.getMsgBody());
            mailMessage.setSubject(email.getSubject());
 
            javaMailSender.send(mailMessage);
            return "Mail Sent Successfully...";
        }
 
        catch (Exception e) {
            return "Error while Sending Mail";
        }
    }
}
    
