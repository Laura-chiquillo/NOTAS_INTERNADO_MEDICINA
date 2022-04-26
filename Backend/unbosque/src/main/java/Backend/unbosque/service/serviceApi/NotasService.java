package Backend.unbosque.service.serviceApi;

import java.util.List;

import Backend.unbosque.model.Notas;

public interface NotasService {

    List<Notas> getNotas();
    Notas getNotas(Long id);
    Notas createNotas(Notas notas);
    void updateNotas(Long id, Notas notas);
    void deleteNotas(Long id);
    
}
