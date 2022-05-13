package Backend.unbosque.service.serviceApi;

import java.util.List;

import Backend.unbosque.model.Estudiante;

public interface EstudianteService {

    List<Estudiante> getEstudiantes();
    Estudiante getEstudianteById(Long id);
    Estudiante createEstudiante(Estudiante estudiante);
    void updateEstudiante(Long id, Estudiante estudiante);
    void deleteEstudiante(Long id);
    
}
