package Backend.unbosque.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Backend.unbosque.model.Admin;
import Backend.unbosque.service.serviceApi.AdminService;

@RestController
@RequestMapping({"/admin/auth"})
public class AuthAdminController {

    @Autowired
    private AdminService adminService;

    @PostMapping("/login")
    public ResponseEntity<Admin> login(@RequestBody Admin admin) {
        if (adminService.verificarCredenciales(admin))
            return new ResponseEntity<>(admin, HttpStatus.ACCEPTED);
        return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
    }
    
    
}
