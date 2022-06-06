package Backend.unbosque.service.serviceApi;

import java.util.List;

import Backend.unbosque.model.Ciudad;

public interface CiudadService {

    List<Ciudad> getCiudades();
    Ciudad getCiudadById(String id);
    Ciudad createCiudad(Ciudad ciudad);
    void updateCiudad(String id, Ciudad ciudad);
    void deleteCiudad(String id);
    
}
