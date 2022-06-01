package Backend.unbosque.service.serviceImp;

import java.util.ArrayList;
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
        List<Estudiante> estudiantes = new ArrayList<>();
        estudianteRepository.findAll().forEach(estudiantes::add);
        return estudiantes;
    }
    
    @Override
    public Estudiante getEstudianteById(String id) {
        Estudiante estudiante = estudianteRepository.findById(id).get();
        return estudiante;
    }

    @Override
    public Estudiante createEstudiante(Estudiante estudiante) {
        estudiante.setEstado(true);
        return estudianteRepository.save(estudiante);
    }

    @Override
    public void updateEstudiante(String id, Estudiante estudiante) {
        Estudiante upEstudiante =estudianteRepository.findById(id).get();

        if (estudiante.getInstitucion() != null) {
            upEstudiante.setInstitucion(estudiante.getInstitucion());
        }

        if(estudiante.getFoto() != null){
            upEstudiante.setFoto(estudiante.getFoto());
        }

        if (estudiante.getPrimerNombre() != null){
            upEstudiante.setPrimerNombre(estudiante.getPrimerNombre());
        }

        if(estudiante.getSegundoNombre() != null){
            upEstudiante.setSegundoNombre(estudiante.getSegundoNombre());
        }

        if(estudiante.getPrimerApellido() != null){
            upEstudiante.setPrimerApellido(estudiante.getPrimerApellido());
        }

        if(estudiante.getSegundoApellido() != null){
            upEstudiante.setSegundoApellido(estudiante.getSegundoApellido());
        }

        if(estudiante.getPromedio() != 0.0){
            upEstudiante.setPromedio(estudiante.getPromedio());
        }

        if(estudiante.getSemestreE() != null){
            upEstudiante.setSemestreE(estudiante.getSemestreE());
        }

        if(estudiante.getCorreo() != null){
            upEstudiante.setCorreo(estudiante.getCorreo());
        }

        if(estudiante.getTelefono() != null){
            upEstudiante.setTelefono(estudiante.getTelefono());
        }

        if (!estudiante.isEstado()){
            upEstudiante.setEstado(estudiante.isEstado());
        }

        if (estudiante.isEstado()) {
            upEstudiante.setEstado(estudiante.isEstado());
        }
        
        estudianteRepository.save(upEstudiante);
    }

    @Override
    public void deleteEstudiante(String id) {
        estudianteRepository.deleteById(id);
        
    }
}