package Backend.unbosque.service.serviceImp;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import Backend.unbosque.model.Asignatura;
import Backend.unbosque.repository.AsignaturaRepository;
import Backend.unbosque.service.serviceApi.AsignaturaService;

@Service
@Transactional
public class AsignaturaServiceImpl implements AsignaturaService{

    @Autowired
    private AsignaturaRepository asignaturaRepository;

    @Override
    public List<Asignatura> getAsignatura() {
        List<Asignatura> asignaturas = new ArrayList<>();
        asignaturaRepository.findAll().forEach(asignaturas::add);
        return asignaturas;
    }

    @Override
    public Asignatura getAsignaturaById(Long id) {
        Asignatura asignatura = asignaturaRepository.findById(id).get();
        return asignatura;
    }

    @Override
    public Asignatura createAsignatura(Asignatura asignatura) {
        return asignaturaRepository.insert(asignatura);
    }

    @Override
    public void updateAsignatura(Long id, Asignatura asignatura) {
        // TODO Auto-generated method stub
        
    }

    @Override
    public void deleteAsignatura(Long id) {
        asignaturaRepository.deleteById(id);
        
    }
    
}
