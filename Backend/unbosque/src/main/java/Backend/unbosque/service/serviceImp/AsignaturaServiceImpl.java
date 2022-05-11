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

    //private Long idAsignatura;
    //private String semestreA;
    //private String descripcion;
    //private int creditoMes;
    //private int tiempoMes;
    //private int creditosTotales;
    //private double definitiva;
    @Override
    public void updateAsignatura(Long id, Asignatura asignatura) {
        // TODO Auto-generated method stub

        Asignatura upAsignatura = asignaturaRepository.findById(id).get();

        if(NOSEQUEHACERCONESTEAIUDA)
    }

    @Override
    public void deleteAsignatura(Long id) {
        asignaturaRepository.deleteById(id);
        
    }
    
}
