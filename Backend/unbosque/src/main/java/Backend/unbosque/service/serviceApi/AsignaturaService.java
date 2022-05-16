package Backend.unbosque.service.serviceApi;

import java.util.List;

import Backend.unbosque.model.Asignatura;

public interface AsignaturaService {

    List<Asignatura> getAsignatura();    
    Asignatura getAsignaturaById(String id);
    Asignatura createAsignatura(Asignatura asignatura);
    void updateAsignatura(String id, Asignatura asignatura);
    void deleteAsignatura(String id);
    
}
