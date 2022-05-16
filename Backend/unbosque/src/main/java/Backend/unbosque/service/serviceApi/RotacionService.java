package Backend.unbosque.service.serviceApi;

import java.util.List;

import Backend.unbosque.model.Rotacion;

public interface RotacionService {

    List<Rotacion> getRotaciones();
    Rotacion getRotacionById(String id);
    Rotacion createRotacion(Rotacion rotacion);
    void updateRotacion(String id, Rotacion rotacion);
    void deleteRotacion(String id);
    
}
