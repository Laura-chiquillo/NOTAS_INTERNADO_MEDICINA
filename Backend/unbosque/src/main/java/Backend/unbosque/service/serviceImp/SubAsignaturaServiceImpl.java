package Backend.unbosque.service.serviceImp;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import Backend.unbosque.model.SubAsignatura;
import Backend.unbosque.repository.SubAsignaturaRepository;
import Backend.unbosque.service.serviceApi.SubAsignaturaService;

@Service
@Transactional
public class SubAsignaturaServiceImpl implements SubAsignaturaService{

    @Autowired
    private SubAsignaturaRepository subAsignaturaRepository;

    @Override
    public List<SubAsignatura> getSubAsignaturas() {
        List<SubAsignatura> subAsignaturas = new ArrayList<>();
        subAsignaturaRepository.findAll().forEach(subAsignaturas::add);
        return subAsignaturas;
    }

    @Override
    public SubAsignatura getSubAsignaturaById(String id) {
        SubAsignatura subAsignatura = subAsignaturaRepository.findById(id).get();
        return subAsignatura;
    }

    @Override
    public SubAsignatura createSubAsignatura(SubAsignatura subAsignatura) {
        return subAsignaturaRepository.insert(subAsignatura);
    }

    @Override
    public void updateSubAsignatura(String id, SubAsignatura subAsignatura) {
        SubAsignatura upSubAsignatura = subAsignaturaRepository.findById(id).get();

        if (subAsignatura.getDescripcion() != "") {
            upSubAsignatura.setDescripcion(subAsignatura.getDescripcion());
        }

        subAsignaturaRepository.save(upSubAsignatura);
    }

    @Override
    public void deleteSubAsignatura(String id) {
        subAsignaturaRepository.deleteById(id);
        
    }
    
}
