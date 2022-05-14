package Backend.unbosque.service.serviceApi;

import java.util.List;

import Backend.unbosque.model.Admin;

public interface AdminService {

    List<Admin> getAdmins();    
    Admin getAdminById(Long id);
    Admin createAdmin(Admin admin);
    void updateAdmin(Long id, Admin admin);
    void deleteAdmin(Long id);
    boolean verificarCredenciales(Admin admin);                             
    
}
