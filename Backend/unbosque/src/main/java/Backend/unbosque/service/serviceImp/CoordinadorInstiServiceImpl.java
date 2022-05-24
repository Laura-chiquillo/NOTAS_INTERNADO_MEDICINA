package Backend.unbosque.service.serviceImp;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
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
            upCoordinadorInsti.setContraseña(coordinadorInsti.getContraseña());
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
        upPasswordCoordinadorInsti.setContraseña(contraseña);
        coordinadorInstiRepository.save(upPasswordCoordinadorInsti);
    }

    @Override
    public CoordinadorInsti getCoordinadorInstiByCorreo(String correo) {
        CoordinadorInsti coordinadorInsti = coordinadorInstiRepository.findByCorreo(correo).get();
        return coordinadorInsti;
    }

    @Override
    public String verificarCredenciales(CoordLogin coordLogin) {
        Query findUser = new Query(Criteria.where("correo").is(coordLogin.getCorreo()).and("contraseña").is(coordLogin.getContraseña()));
        List<CoordinadorInsti> user = mongoOperations.find(findUser, CoordinadorInsti.class);
        if (!user.isEmpty()) return user.get(0).getIdCoordinador();
        return "";
    }
}
