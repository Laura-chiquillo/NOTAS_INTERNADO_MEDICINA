package Backend.unbosque.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Backend.unbosque.model.Admin;
import Backend.unbosque.model.AdminLogin;
import Backend.unbosque.service.serviceApi.AdminService;

@RestController
@CrossOrigin(origins = {"https://localhost:3000", "http://localhost:3000"})
@RequestMapping({"/admin"})
public class AdminController {

    @Autowired
    private AdminService adminService;
    
    @GetMapping("/todos")
    public ResponseEntity<List<Admin>> getAllAdmins(){
        List<Admin> admins = adminService.getAdmins();
        return new ResponseEntity<>(admins, HttpStatus.OK);
    }

    @GetMapping({"/{id}"})
    public ResponseEntity<Admin> getAdmin(@PathVariable(value = "id") String id){
        Admin admin = adminService.getAdminById(id);
        return new ResponseEntity<>(admin, HttpStatus.OK);
    }

    @PostMapping("/nuevo")
    public ResponseEntity<Admin> saveAdmin(@RequestBody Admin admin) {
        Admin ad = adminService.createAdmin(admin);
        return new ResponseEntity<>(ad, HttpStatus.CREATED);
    }

    @PatchMapping("/editar/{id}")
    public ResponseEntity<Admin> updateAdmin(@PathVariable String id, @RequestBody Admin admin) {
        adminService.updateAdmin(id, admin);
        return new ResponseEntity<>(adminService.getAdminById(id), HttpStatus.OK);
    }

    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<Admin> deleteAdmin(@PathVariable String id) {
        adminService.deleteAdmin(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    @GetMapping("/loginAdmin")
    public ResponseEntity<AdminLogin> loginAdmin(@PathVariable(value="correo") String correo, @PathVariable(value="contraseña") String contraseña) {
        AdminLogin adminLogin = new AdminLogin(correo, contraseña);
        if (adminService.verificarCredenciales(adminLogin)) {
            return new ResponseEntity<>(adminLogin, HttpStatus.OK);
        }

        return new ResponseEntity<>(adminLogin, HttpStatus.NO_CONTENT);
    }
}