package Backend.unbosque.service.serviceImp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import Backend.unbosque.model.Estudiante;
import Backend.unbosque.repository.EstudianteRepository;
import Backend.unbosque.service.serviceApi.EstudianteService;

@Service
@Transactional
public class EstudianteServiceImpl implements EstudianteService{

    @Autowired
    private EstudianteRepository estudianteRepository;

    @Override
    public List<Estudiante> getEstudiantes() {
        // TODO Auto-generated method stub
        return null;
    }
    
    @Override
    public Estudiante getEstudianteById(Long id) {
        Estudiante estudiante = estudianteRepository.findById(id).get();
        return estudiante;
    }

    @Override
    public Estudiante createEstudiante(Estudiante estudiante) {
        return estudianteRepository.save(estudiante);
    }

    @Override
    public void updateEstudiante(Long id, Estudiante estudiante) {
        // TODO Auto-generated method stub
        
    }

    @Override
    public void deleteEstudiante(Long id) {
        estudianteRepository.deleteById(id);
        
    }
    
}
