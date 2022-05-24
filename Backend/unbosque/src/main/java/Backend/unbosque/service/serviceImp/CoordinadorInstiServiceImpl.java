package Backend.unbosque.service.serviceImp;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import Backend.unbosque.model.CoordLogin;
import Backend.unbosque.model.CoordinadorInsti;
import Backend.unbosque.repository.CoordinadorInstiRepository;
import Backend.unbosque.service.serviceApi.CoordinadorInstiService;

@Service
@Transactional
public class CoordinadorInstiServiceImpl implements CoordinadorInstiService{

    @Autowired
    private CoordinadorInstiRepository coordinadorInstiRepository;

    @Autowired
    private MongoOperations mongoOperations;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Override
    public List<CoordinadorInsti> getCoordinadorInstis() {
        List<CoordinadorInsti> coordinadorInstis = new ArrayList<>();
        coordinadorInstiRepository.findAll().forEach(coordinadorInstis::add);
        return coordinadorInstis;
    }

    @Override
    public CoordinadorInsti getCoordinadorInstiById(String id) {
        CoordinadorInsti coordinadorInsti = coordinadorInstiRepository.findById(id).get();
        return coordinadorInsti;
    }

    @Override
    public CoordinadorInsti createCoordinadorInsti(CoordinadorInsti coordinadorInsti) {
        coordinadorInsti.setContraseña(passwordEncoder.encode(coordinadorInsti.getContraseña()));
        return coordinadorInstiRepository.save(coordinadorInsti);
    }

    @Override
    public void updateCoordinadorInsti(String id, CoordinadorInsti coordinadorInsti) {
        // TODO Auto-generated method stub

        CoordinadorInsti upCoordinadorInsti = coordinadorInstiRepository.findById(id).get();

        if (coordinadorInsti.getPrimerNombre() != null){
            upCoordinadorInsti.setPrimerNombre(coordinadorInsti.getPrimerNombre());
        }

        if(coordinadorInsti.getSegundoNombre() != null){
            upCoordinadorInsti.setSegundoNombre(coordinadorInsti.getSegundoNombre());
        }

        if(coordinadorInsti.getPrimerApellido() != null){
            upCoordinadorInsti.setPrimerApellido(coordinadorInsti.getPrimerApellido());
        }

        if(coordinadorInsti.getSegundoApellido() != null){
            upCoordinadorInsti.setSegundoApellido(coordinadorInsti.getSegundoApellido());
        }

        if(coordinadorInsti.getTelefono() != null){
            upCoordinadorInsti.setTelefono(coordinadorInsti.getTelefono());
        }

        if(coordinadorInsti.getCorreo() != null){
            upCoordinadorInsti.setCorreo(coordinadorInsti.getCorreo());
        }

        if(coordinadorInsti.getContraseña() != null){
            upCoordinadorInsti.setContraseña(passwordEncoder.encode(coordinadorInsti.getContraseña()));
        }

        if(coordinadorInsti.getCargo() != null){
            upCoordinadorInsti.setCargo(coordinadorInsti.getCargo());
        }

        coordinadorInstiRepository.save(upCoordinadorInsti);
        
    }

    @Override
    public void deleteCoordinadorInsti(String id) {
        coordinadorInstiRepository.deleteById(id);
        
    }

    @Override
    public void updatePassword(String correo, String contraseña) {
        CoordinadorInsti upPasswordCoordinadorInsti = coordinadorInstiRepository.findByCorreo(correo).get();
        String contEncriptada = passwordEncoder.encode(contraseña);
        upPasswordCoordinadorInsti.setContraseña(contEncriptada);
        coordinadorInstiRepository.save(upPasswordCoordinadorInsti);
    }

    @Override
    public CoordinadorInsti getCoordinadorInstiByCorreo(String correo) {
        CoordinadorInsti coordinadorInsti = coordinadorInstiRepository.findByCorreo(correo).get();
        return coordinadorInsti;
    }

    @Override
    public String verificarCredenciales(CoordLogin coordLogin) {
        CoordinadorInsti user = coordinadorInstiRepository.findByCorreo(coordLogin.getCorreo()).get();
        if (passwordEncoder.matches(coordLogin.getContraseña(), user.getContraseña())) {
            return user.getIdInstitucion();            
        }
        return "";
    }
}
