package Backend.unbosque.service.serviceImp;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import Backend.unbosque.model.Admin;
import Backend.unbosque.model.AdminLogin;
import Backend.unbosque.repository.AdminRepository;
import Backend.unbosque.service.serviceApi.AdminService;

@Service
@Transactional
public class AdminServiceImpl implements AdminService{

    @Autowired
    private AdminRepository adminRepository;

    private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder(16);

    @Override
    public List<Admin> getAdmins() {
        List<Admin> admins = new ArrayList<>();
        adminRepository.findAll().forEach(admins::add);
        return admins;
    }

    @Override
    public Admin getAdminById(String id) {
        Admin admin = adminRepository.findById(id).get();
        return admin;
    }

    @Override
    public Admin createAdmin(Admin admin) {
        admin.setContraseña(passwordEncoder.encode(admin.getContraseña()));
        return adminRepository.insert(admin);
    }

    @Override
    public void updateAdmin(String id, Admin admin) {
        Admin upAdmin = adminRepository.findById(id).get();

        if(admin.getPrimerNombre() != null){
            upAdmin.setPrimerNombre(admin.getPrimerNombre());
        }

        if(admin.getSegundoNombre() != null){
            upAdmin.setSegundoNombre(admin.getSegundoNombre());
        }

        if(admin.getPrimerApellido() != null){
            upAdmin.setPrimerApellido(admin.getPrimerApellido());
        }

        if(admin.getSegundoApellido() != null){
            upAdmin.setSegundoApellido(admin.getSegundoApellido());
        }

        if(admin.getCorreo() != null){
            upAdmin.setCorreo(admin.getCorreo());
        }

        if(admin.getContraseña() != null){
            String contEncriptada = passwordEncoder.encode(admin.getContraseña());
            upAdmin.setContraseña(contEncriptada);
        }

        adminRepository.save(upAdmin);
    }

    @Override
    public void deleteAdmin(String id) {
        adminRepository.deleteById(id);
        
    }

    @Override
    public String verificarCredenciales(AdminLogin adminLogin) {
        Admin user = adminRepository.findByCorreo(adminLogin.getCorreo()).get();
        if (passwordEncoder.matches(adminLogin.getContraseña(), user.getContraseña())) {
            return user.getIdAdmin();            
        }
        return "";
    }

    @Override
    public void updatePassword(String correo, String contraseña) {
        Admin upPasswordAdmin = adminRepository.findByCorreo(correo).get();
        String contEncriptada = passwordEncoder.encode(contraseña);
        upPasswordAdmin.setContraseña(contraseña);
        adminRepository.save(upPasswordAdmin);
        
    }

    @Override
    public Admin getAdminByCorreo(String correo) {
        Admin admin = adminRepository.findByCorreo(correo).get();
        return admin;
    }
    
}