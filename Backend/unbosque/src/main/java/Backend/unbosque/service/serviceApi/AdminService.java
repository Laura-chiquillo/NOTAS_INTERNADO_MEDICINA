package Backend.unbosque.service.serviceApi;

import java.util.List;

import Backend.unbosque.model.Admin;
import Backend.unbosque.model.AdminLogin;

public interface AdminService {

    List<Admin> getAdmins();    
    Admin getAdminById(String id);
    Admin createAdmin(Admin admin);
    void updateAdmin(String id, Admin admin);
    void deleteAdmin(String id);
    boolean verificarCredenciales(AdminLogin adminLogin);                             
    
}
