package Backend.unbosque.service.serviceImp;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import Backend.unbosque.model.Definitiva;
import Backend.unbosque.repository.DefinitivaRepository;
import Backend.unbosque.service.serviceApi.DefinitivaService;

@Service
@Transactional
public class DefinitivaServiceImpl implements DefinitivaService{
    
    @Autowired
    private DefinitivaRepository definitivaRepository;

    @Override
    public List<Definitiva> getDefinitivas() {
        List<Definitiva> definitivas = new ArrayList<>();
        definitivaRepository.findAll().forEach(definitivas::add);
        return definitivas;
    }

    @Override
    public Definitiva getDefinitivaById(String id) {
        Definitiva definitiva = definitivaRepository.findById(id).get();
        return definitiva;
    }

    @Override
    public Definitiva createDefinitiva(Definitiva definitiva) {
        return definitivaRepository.insert(definitiva);
    }

    @Override
    public void updateDefinitiva(String id, Definitiva definitiva) {
        Definitiva upDefinitiva = definitivaRepository.findById(id).get();

        if (!definitiva.getNotas().isEmpty() && upDefinitiva.getNotas().isEmpty()) {
            upDefinitiva.setNotas(definitiva.getNotas());
        }else if (!definitiva.getNotas().isEmpty() && !upDefinitiva.getNotas().isEmpty()) {
            upDefinitiva.getNotas().addAll(definitiva.getNotas());
        }
    
        if (definitiva.getNotaDefinitiva() != 0) {
            upDefinitiva.setNotaDefinitiva(definitiva.getNotaDefinitiva());
        }
        
        definitivaRepository.save(upDefinitiva);
    }

    @Override
    public void deleteDefinitiva(String id) {
        definitivaRepository.deleteById(id);
        
    }
    
}
