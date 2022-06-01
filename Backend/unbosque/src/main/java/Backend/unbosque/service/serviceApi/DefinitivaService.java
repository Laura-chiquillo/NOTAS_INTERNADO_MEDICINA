package Backend.unbosque.service.serviceApi;

import java.util.List;

import Backend.unbosque.model.Definitiva;

public interface DefinitivaService {

    List<Definitiva> getDefinitivas();    
    Definitiva getDefinitivaById(String id);
    Definitiva createDefinitiva(Definitiva definitiva);
    void updateDefinitiva(String id, Definitiva definitiva);
    void deleteDefinitiva(String id);
}
