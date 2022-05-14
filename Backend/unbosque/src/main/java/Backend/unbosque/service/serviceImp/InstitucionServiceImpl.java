package Backend.unbosque.service.serviceImp;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import Backend.unbosque.model.Institucion;
import Backend.unbosque.repository.InstitucionRepository;
import Backend.unbosque.service.serviceApi.InstitucionService;

@Service
@Transactional
public class InstitucionServiceImpl implements InstitucionService{

    @Autowired
    private InstitucionRepository institucionRepository;

    @Override
    public List<Institucion> getInstitucion() {
        List<Institucion> institucion = new ArrayList<>();
        institucionRepository.findAll().forEach(institucion::add);
        return institucion;
    }

    @Override
    public Institucion getInstitucionById(Long id) {
        Institucion institucion = institucionRepository.findById(id).get();
        return institucion;
    }

    @Override
    public Institucion createInstitucion(Institucion institucion) {
        return institucionRepository.save(institucion);
    }

    @Override
    public void updateInstitucion(Long id, Institucion institucion) {
        // TODO Auto-generated method stub
        
        Institucion upInstitucion = institucionRepository.findById(id).get();

        if (institucion.getNombre() != null){
            upInstitucion.setNombre(institucion.getNombre());
        }

        if (institucion.getDireccion() != null){
            upInstitucion.setDireccion(institucion.getDireccion());
        }

        if (institucion.getEstado() != null){
            upInstitucion.setEstado(institucion.getEstado());
        }

        institucionRepository.save(upInstitucion);
    }

    @Override
    public void deleteInstitucion(Long id) {
        institucionRepository.deleteById(id);
        
    }
    
}
