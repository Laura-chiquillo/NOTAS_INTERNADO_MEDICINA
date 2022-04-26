package Backend.unbosque.service.serviceImp;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import Backend.unbosque.model.Notas;
import Backend.unbosque.repository.Notas_Repository;
import Backend.unbosque.service.serviceApi.NotasService;

@Service
@Transactional
public class NotasServiceImpl implements NotasService{

    @Autowired
    private Notas_Repository notas_Repository;

    @Override
    public List<Notas> getNotas() {
        List<Notas> notas = new ArrayList<>();
        notas_Repository.findAll().forEach(notas::add);
        return notas;
    }

    @Override
    public Notas getNotas(Long id) {
        Notas notas = notas_Repository.findById(id).get();
        return notas;
    }

    @Override
    public Notas createNotas(Notas notas) {
        return notas_Repository.insert(notas);
    }

    @Override
    public void updateNotas(Long id, Notas notas) {
        // TODO Auto-generated method stub
        
    }

    @Override
    public void deleteNotas(Long id) {
        notas_Repository.deleteById(id);
        
    }
    
}
