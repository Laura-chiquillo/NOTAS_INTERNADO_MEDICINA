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
    public Rotacion getRotacionById(String id) {
        Rotacion rotaciones = rotacionRepository.findById(id).get();
        return rotaciones;
    }

    @Override
    public Rotacion createRotacion(Rotacion rotacion) {
        return rotacionRepository.insert(rotacion);
    }

    @Override
    public void updateRotacion(String id, Rotacion rotacion) {
        Rotacion upRotacion = rotacionRepository.findById(id).get();

        if (rotacion.getEstudiante() != null) {
            upRotacion.getEstudiante().setIdEstudiante(rotacion.getEstudiante().getIdEstudiante());
        }

        if (rotacion.getInstitucion() != null) {
            upRotacion.getInstitucion().setIdInstitucion((rotacion.getInstitucion().getIdInstitucion()));
        }

        if (rotacion.getAsignatura() != null) {
            upRotacion.getAsignatura().setIdAsignatura(((rotacion.getAsignatura().getIdAsignatura())));
        }

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

        rotacionRepository.save(upRotacion);
    }

    @Override
    public void deleteRotacion(String id) {
        rotacionRepository.deleteById(id);
        
    }
    
}
