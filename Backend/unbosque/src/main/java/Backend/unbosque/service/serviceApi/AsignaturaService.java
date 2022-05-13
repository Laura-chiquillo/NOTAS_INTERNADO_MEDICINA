package Backend.unbosque.service.serviceApi;

import java.util.List;

import Backend.unbosque.model.Asignatura;

public interface AsignaturaService {

    List<Asignatura> getAsignatura();    
    Asignatura getAsignaturaById(Long id);
    Asignatura createAsignatura(Asignatura asignatura);
    void updateAsignatura(Long id, Asignatura asignatura);
    void deleteAsignatura(Long id);
    
}
