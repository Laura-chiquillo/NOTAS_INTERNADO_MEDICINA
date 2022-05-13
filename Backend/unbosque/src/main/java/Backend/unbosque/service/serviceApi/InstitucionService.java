package Backend.unbosque.service.serviceApi;

import java.util.List;

import Backend.unbosque.model.Institucion;

public interface InstitucionService {

    List<Institucion> getInstitucion();
    Institucion getInstitucionById(Long id);
    Institucion createInstitucion(Institucion institucion);
    void updateInstitucion(Long id, Institucion institucion);
    void deleteInstitucion(Long id);
    
}
