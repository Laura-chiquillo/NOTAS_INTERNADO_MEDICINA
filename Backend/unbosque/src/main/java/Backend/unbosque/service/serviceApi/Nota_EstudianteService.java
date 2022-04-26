package Backend.unbosque.service.serviceApi;

import java.util.List;

import Backend.unbosque.model.Nota_Estudiante;

public interface Nota_EstudianteService {

    List<Nota_Estudiante> getNota_Estudiante();
    Nota_Estudiante getNota_EstudianteById(Long id);
    Nota_Estudiante createNota_Estudiante(Nota_Estudiante nota_Estudiante);
    void updateNota_Estudiante(Long id, Nota_Estudiante nota_Estudiante);
    void deleteNota_Estudiante(Long id);
    
}
