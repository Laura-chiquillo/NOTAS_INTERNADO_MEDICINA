package Backend.unbosque.service.serviceApi;

import java.util.List;

import Backend.unbosque.model.SubAsignatura;

public interface SubAsignaturaService {
    
    List<SubAsignatura> getSubAsignaturas();    
    SubAsignatura getSubAsignaturaById(String id);
    SubAsignatura createSubAsignatura(SubAsignatura subAsignatura);
    void updateSubAsignatura(String id, SubAsignatura subAsignatura);
    void deleteSubAsignatura(String id);
}
