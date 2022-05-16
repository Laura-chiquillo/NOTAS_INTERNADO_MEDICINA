package Backend.unbosque.service.serviceApi;

import java.util.List;

import Backend.unbosque.model.Estudiante;

public interface EstudianteService {

    List<Estudiante> getEstudiantes();
    Estudiante getEstudianteById(String id);
    Estudiante createEstudiante(Estudiante estudiante);
    void updateEstudiante(String id, Estudiante estudiante);
    void deleteEstudiante(String id);
    
}
