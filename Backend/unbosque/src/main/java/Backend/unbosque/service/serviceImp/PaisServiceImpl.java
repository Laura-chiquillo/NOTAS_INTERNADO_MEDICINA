package Backend.unbosque.service.serviceImp;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import Backend.unbosque.model.Pais;
import Backend.unbosque.repository.PaisRepository;
import Backend.unbosque.service.serviceApi.PaisService;

@Service
@Transactional
public class PaisServiceImpl  implements PaisService{

    @Autowired
    private PaisRepository paisRepository;

    @Override
    public List<Pais> getPais() {
        List<Pais> pais = new ArrayList<>();
        paisRepository.findAll().forEach(pais::add);
        return pais;
    }

    @Override
    public Pais getPaisById(String id) {
        Pais pais = paisRepository.findById(id).get();
        return pais;
    }

    @Override
    public Pais createPais(Pais pais) {
        return paisRepository.insert(pais);
    }

    @Override
    public void updatePais(String id, Pais pais) {
        Pais upPais = paisRepository.findById(id).get();

        if (pais.getDescripcion() != null){
            upPais.setDescripcion(pais.getDescripcion());
        }
        paisRepository.save(upPais);
    }

    @Override
    public void deletePais(String id) {
        paisRepository.deleteById(id);
        
    }
    
}
