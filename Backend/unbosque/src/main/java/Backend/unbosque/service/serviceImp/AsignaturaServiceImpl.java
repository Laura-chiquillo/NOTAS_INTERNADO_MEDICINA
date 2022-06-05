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
    public Asignatura getAsignaturaById(String id) {
        Asignatura asignatura = asignaturaRepository.findById(id).get();
        return asignatura;
    }

    @Override
    public Asignatura createAsignatura(Asignatura asignatura) {
        return asignaturaRepository.insert(asignatura);
    }

    @Override
    public void updateAsignatura(String id, Asignatura asignatura) {
        Asignatura upAsignatura = asignaturaRepository.findById(id).get();

        if (asignatura.getSemestreA() != null){
            upAsignatura.setSemestreA(asignatura.getSemestreA());
        }

        if (asignatura.getDescripcion() != null){
            upAsignatura.setDescripcion(asignatura.getDescripcion());
        }

        if (asignatura.getCreditoMes() != 0){
            upAsignatura.setCreditoMes(asignatura.getCreditoMes());
        }

        if (asignatura.getTiempoMes() != 0){
            upAsignatura.setTiempoMes(asignatura.getTiempoMes());
        }

        if (asignatura.getCreditosTotales() != 0){
            upAsignatura.setCreditosTotales(asignatura.getCreditosTotales());
        }

        asignaturaRepository.save(upAsignatura);

    }

    @Override
    public void deleteAsignatura(String id) {
        asignaturaRepository.deleteById(id);
        
    }
    
}