package Backend.unbosque.service.serviceApi;

import java.util.List;

import Backend.unbosque.model.CoordLogin;
import Backend.unbosque.model.CoordinadorInsti;

public interface CoordinadorInstiService {

    List<CoordinadorInsti> getCoordinadorInstis();
    CoordinadorInsti getCoordinadorInstiById(String id);
    CoordinadorInsti createCoordinadorInsti(CoordinadorInsti coordinadorInsti);
    void updateCoordinadorInsti(String id, CoordinadorInsti coordinadorInsti);
    void deleteCoordinadorInsti(String id);
    void updatePassword(String id, String contraseña);
    CoordinadorInsti getCoordinadorInstiByCorreo(String correo);
    String verificarCredenciales(CoordLogin coordLogin);
    
}