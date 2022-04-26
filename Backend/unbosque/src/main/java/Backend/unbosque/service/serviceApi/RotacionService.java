package Backend.unbosque.service.serviceApi;

import java.util.List;

import Backend.unbosque.model.Rotacion;

public interface RotacionService {

    List<Rotacion> getRotaciones();
    Rotacion getRotacionById(Long id);
    Rotacion createRotacion(Rotacion rotacion);
    void updateRotacion(Long id, Rotacion rotacion);
    void deleteRotacion(Long id);
    
}
