package Backend.unbosque.service.serviceImp;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import Backend.unbosque.model.Admin;
import Backend.unbosque.repository.AdminRepository;
import Backend.unbosque.service.serviceApi.AdminService;

@Service
@Transactional
public class AdminServiceImpl implements AdminService{

    @Autowired
    private AdminRepository adminRepository;

    @Override
    public List<Admin> getAdmins() {
        List<Admin> admins = new ArrayList<>();
        adminRepository.findAll().forEach(admins::add);
        return admins;
    }

    @Override
    public Admin getAdminById(Long id) {
        Admin admin = adminRepository.findById(id).get();
        return admin;
    }

    @Override
    public Admin createAdmin(Admin admin) {
        return adminRepository.insert(admin);
    }
    
    @Override
    public void updateAdmin(Long id, Admin admin) {
        // TODO Auto-generated method stub
        
    }

    @Override
    public void deleteAdmin(Long id) {
        adminRepository.deleteById(id);
        
    }
    
}