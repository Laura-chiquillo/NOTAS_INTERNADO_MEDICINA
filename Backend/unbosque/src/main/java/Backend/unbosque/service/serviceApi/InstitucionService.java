package Backend.unbosque.service.serviceApi;

import java.util.List;

import Backend.unbosque.model.Institucion;

public interface InstitucionService {

    List<Institucion> getInstitucion();
    Institucion getInstitucionById(String id);
    Institucion createInstitucion(Institucion institucion);
    void updateInstitucion(String id, Institucion institucion);
    void deleteInstitucion(String id);
    
}
