package Backend.unbosque.service.serviceApi;

import java.util.List;

import Backend.unbosque.model.CoordinadorInsti;

public interface CoordinadorInstiService {

    List<CoordinadorInsti> getCoordinadorInstis();
    CoordinadorInsti getCoordinadorInstiById(Long id);
    CoordinadorInsti createCoordinadorInsti(CoordinadorInsti coordinadorInsti);
    void updateCoordinadorInsti(Long id, CoordinadorInsti coordinadorInsti);
    void deleteCoordinadorInsti(Long id);
    
}