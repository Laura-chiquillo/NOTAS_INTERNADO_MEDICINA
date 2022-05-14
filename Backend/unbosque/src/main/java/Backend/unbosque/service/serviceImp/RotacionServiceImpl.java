package Backend.unbosque.service.serviceImp;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import Backend.unbosque.model.Rotacion;
import Backend.unbosque.repository.RotacionRepository;
import Backend.unbosque.service.serviceApi.RotacionService;

@Service
@Transactional
public class RotacionServiceImpl implements RotacionService{

    @Autowired
    private RotacionRepository rotacionRepository;

    @Override
    public List<Rotacion> getRotaciones() {
        List<Rotacion> rotaciones = new ArrayList<>();
        rotacionRepository.findAll().forEach(rotaciones::add);
        return rotaciones;
    }

    @Override
    public Rotacion getRotacionById(Long id) {
        Rotacion rotaciones = rotacionRepository.findById(id).get();
        return rotaciones;
    }

    @Override
    public Rotacion createRotacion(Rotacion rotacion) {
        return rotacionRepository.insert(rotacion);
    }

    @Override
    public void updateRotacion(Long id, Rotacion rotacion) {
        // TODO Auto-generated method stub
        Rotacion upRotacion = rotacionRepository.findById(id).get();

        if (rotacion.getNota() != 0){
            upRotacion.setNota(rotacion.getNota());
        }

        if (rotacion.getMes() != null){
            upRotacion.setMes(rotacion.getMes());
        }

        if (rotacion.getFechaInicio() != null){
            upRotacion.setFechaInicio(rotacion.getFechaInicio());
        }

        if (rotacion.getFechaCierre() != null){
            upRotacion.setFechaCierre(rotacion.getFechaCierre());
        }
    }

    @Override
    public void deleteRotacion(Long id) {
        rotacionRepository.deleteById(id);
        
    }
    
}
