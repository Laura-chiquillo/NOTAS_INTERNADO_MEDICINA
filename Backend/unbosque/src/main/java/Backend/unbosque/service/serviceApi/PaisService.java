package Backend.unbosque.service.serviceApi;

import java.util.List;

import Backend.unbosque.model.Pais;

public interface PaisService {

    List<Pais> getPais();
    Pais getPaisById(String id);
    Pais createPais(Pais pais);
    void updatePais(String id, Pais pais);
    void deletePais(String id);
    
}
