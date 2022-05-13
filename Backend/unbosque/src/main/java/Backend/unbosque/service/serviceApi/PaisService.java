package Backend.unbosque.service.serviceApi;

import java.util.List;

import Backend.unbosque.model.Pais;

public interface PaisService {

    List<Pais> getPais();
    Pais getPaisById(Long id);
    Pais createPais(Pais pais);
    void updatePais(Long id, Pais pais);
    void deletePais(Long id);
    
}
