package Backend.unbosque.service.serviceImp;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import Backend.unbosque.model.Nota_Estudiante;
import Backend.unbosque.repository.Nota_EstudianteRepository;
import Backend.unbosque.service.serviceApi.Nota_EstudianteService;

@Service
@Transactional
public class Nota_EstudianteServiceImpl implements Nota_EstudianteService{

    @Autowired
    private Nota_EstudianteRepository nota_EstudianteRepository;

    @Override
    public List<Nota_Estudiante> getNota_Estudiante() {
        List<Nota_Estudiante> nota_Estudiante = new ArrayList<>();
        nota_EstudianteRepository.findAll().forEach(nota_Estudiante::add);
        return nota_Estudiante;
    }

    @Override
    public Nota_Estudiante getNota_EstudianteById(Long id) {
        Nota_Estudiante nota_Estudiante = nota_EstudianteRepository.findById(id).get();
        return nota_Estudiante;
    }

    @Override
    public Nota_Estudiante createNota_Estudiante(Nota_Estudiante nota_Estudiante) {
        return nota_EstudianteRepository.save(nota_Estudiante);
    }

    @Override
    public void updateNota_Estudiante(Long id, Nota_Estudiante nota_Estudiante) {
        // TODO Auto-generated method stub
        
    }

    @Override
    public void deleteNota_Estudiante(Long id) {
        nota_EstudianteRepository.deleteById(id);
        
    }
    
}
