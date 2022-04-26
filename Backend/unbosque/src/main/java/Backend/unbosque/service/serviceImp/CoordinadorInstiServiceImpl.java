package Backend.unbosque.service.serviceImp;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import Backend.unbosque.model.CoordinadorInsti;
import Backend.unbosque.repository.CoordinadorInstiRepository;
import Backend.unbosque.service.serviceApi.CoordinadorInstiService;

@Service
@Transactional
public class CoordinadorInstiServiceImpl implements CoordinadorInstiService{

    @Autowired
    private CoordinadorInstiRepository coordinadorInstiRepository;

    @Override
    public List<CoordinadorInsti> getCoordinadorInstis() {
        List<CoordinadorInsti> coordinadorInstis = new ArrayList<>();
        coordinadorInstiRepository.findAll().forEach(coordinadorInstis::add);
        return coordinadorInstis;
    }

    @Override
    public CoordinadorInsti getCoordinadorInstiById(Long id) {
        CoordinadorInsti coordinadorInsti = coordinadorInstiRepository.findById(id).get();
        return coordinadorInsti;
    }

    @Override
    public CoordinadorInsti createCoordinadorInsti(CoordinadorInsti coordinadorInsti) {
        return coordinadorInstiRepository.save(coordinadorInsti);
    }

    @Override
    public void updateCoordinadorInsti(Long id, CoordinadorInsti coordinadorInsti) {
        // TODO Auto-generated method stub
        
    }

    @Override
    public void deleteCoordinadorInsti(Long id) {
        coordinadorInstiRepository.deleteById(id);
        
    }
    
}
