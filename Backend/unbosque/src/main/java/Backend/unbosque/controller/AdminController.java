package Backend.unbosque.controller;

import java.security.SecureRandom;
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
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import Backend.unbosque.model.Admin;
import Backend.unbosque.model.AdminLogin;
import Backend.unbosque.security.AuthenticationService;
import Backend.unbosque.security.Token;
import Backend.unbosque.service.serviceApi.AdminService;

@RestController
@CrossOrigin(origins = {"https://localhost:3000", "http://localhost:3000"})
@RequestMapping({"/admin"})
public class AdminController {

    @Autowired
    private AdminService adminService;

    @Autowired 
    private AuthenticationService authService;

    @GetMapping("/todos")
    public ResponseEntity<List<Admin>> getAllAdmins(@RequestHeader("authorization") String tk){
        if(authService.isLoggedAdmin(tk)) {
            List<Admin> admins = adminService.getAdmins();
            return new ResponseEntity<>(admins, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.FORBIDDEN);
    }

    @GetMapping({"/correo/{correo}"})
    public ResponseEntity<Admin> getAdminByCorreo(@PathVariable(value = "correo") String correo){
        Admin admin = adminService.getAdminByCorreo(correo);
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

    @PatchMapping("/editar/contrasena/{correo}")
    public ResponseEntity<Admin> updatePassword(@PathVariable String correo, @RequestParam String contraseña) {
        adminService.updatePassword(correo, contraseña);
        return new ResponseEntity<>(adminService.getAdminByCorreo(correo), HttpStatus.OK);
    }

    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<Admin> deleteAdmin(@PathVariable String id/*, @RequestHeaders headers*/) {
        /* Pseudocodigo de como proteger las rutas
        token = headers["Authorization"].split(" ")[1];
        user_id = mongo.getUserIdByToken(token);
        if (Admin.buscar(id=user_id)) {
*/
            adminService.deleteAdmin(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//        }
//       return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
    }
    @PostMapping("/loginAdmin")
    public ResponseEntity<Token> loginAdmin(@RequestBody AdminLogin adminLogin) {
        String id = adminService.verificarCredenciales(adminLogin);
        if (id != "") {
            SecureRandom random = new SecureRandom();
            byte bytes[] = new byte[20];
            random.nextBytes(bytes);
            String tk = bytes.toString();

            Token token = new Token(tk, id, "Admin");
            token = authService.createToken(token);
            return new ResponseEntity<>(token, HttpStatus.OK);
        }
        return new ResponseEntity<>(null, HttpStatus.I_AM_A_TEAPOT);
    }
    @PostMapping("/logoutAdmin")
    public ResponseEntity<String> logoutAdmin(@RequestHeader("authorization") String tk) {
        authService.deleteToken(tk);
        return new ResponseEntity<>("OK", HttpStatus.OK);
    }
    @GetMapping({"/{id}"})
    public ResponseEntity<Admin> getAdmin(@PathVariable(value = "id") String id){
        Admin admin = adminService.getAdminById(id);
        return new ResponseEntity<>(admin, HttpStatus.OK);
    }

}