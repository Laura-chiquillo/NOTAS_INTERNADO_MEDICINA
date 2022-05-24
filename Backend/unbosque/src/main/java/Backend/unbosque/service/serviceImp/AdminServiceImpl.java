package Backend.unbosque.service.serviceImp;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import Backend.unbosque.model.Admin;
import Backend.unbosque.model.AdminLogin;
import Backend.unbosque.repository.AdminRepository;
import Backend.unbosque.service.serviceApi.AdminService;

@Service
@Transactional
public class AdminServiceImpl implements AdminService{

    @Autowired
    private AdminRepository adminRepository;

    @Autowired
    private MongoOperations mongoOperations;

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
        return adminRepository.insert(admin);
    }

    @Override
    public void updateAdmin(String id, Admin admin) {
        // TODO Auto-generated method stub
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
            upAdmin.setContraseña(admin.getContraseña());
        }

        adminRepository.save(upAdmin);
    }

    @Override
    public void deleteAdmin(String id) {
        adminRepository.deleteById(id);
        
    }

    @Override
    public boolean verificarCredenciales(AdminLogin adminLogin) {
        Query findUser = new Query(Criteria.where("correo").is(adminLogin.getCorreo()).and("contraseña").is(adminLogin.getContraseña()));
        List<Admin> user = mongoOperations.find(findUser, Admin.class);
        return !user.isEmpty();
    }

    @Override
    public void updatePassword(String correo, String contraseña) {
        Admin upPasswordAdmin = adminRepository.findByCorreo(correo).get();
        upPasswordAdmin.setContraseña(contraseña);
        adminRepository.save(upPasswordAdmin);
        
    }

    @Override
    public Admin getAdminByCorreo(String correo) {
        Admin admin = adminRepository.findByCorreo(correo).get();
        return admin;
    }
    
}