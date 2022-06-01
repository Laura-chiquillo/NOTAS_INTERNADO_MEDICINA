package Backend.unbosque.service.serviceImp;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import Backend.unbosque.model.Ciudad;
import Backend.unbosque.repository.CiudadRepository;
import Backend.unbosque.service.serviceApi.CiudadService;

@Service
@Transactional
public class CiudadServiceImpl implements CiudadService{

    @Autowired
    private CiudadRepository ciudadRepository;

    @Override
    public List<Ciudad> getCiudades() {
        List<Ciudad> ciudades = new ArrayList<>();
        ciudadRepository.findAll().forEach(ciudades::add);
        return ciudades;
    }

    @Override
    public Ciudad getCiudadById(String id) {
        Ciudad ciudad = ciudadRepository.findById(id).get();
        return ciudad;
    }

    @Override
    public Ciudad createCiudad(Ciudad ciudad) {
        return ciudadRepository.insert(ciudad);
    }

    @Override
    public void updateCiudad(String id, Ciudad ciudad) {
        Ciudad upCiudad = ciudadRepository.findById(id).get();

        if (ciudad.getDescripcion() != null) {
            upCiudad.setDescripcion(ciudad.getDescripcion());
        }

        if (ciudad.getPais().getIdPais() != null) {
            upCiudad.getPais().setIdPais(ciudad.getPais().getIdPais());
        }

        ciudadRepository.save(upCiudad);
    }

    @Override
    public void deleteCiudad(String id) {
        ciudadRepository.deleteById(id);
        
    }
    
}
