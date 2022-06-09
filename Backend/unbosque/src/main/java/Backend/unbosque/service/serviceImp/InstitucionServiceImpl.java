package Backend.unbosque.service.serviceImp;

import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.function.Function;
import java.util.function.Predicate;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import Backend.unbosque.model.Estudiante;
import Backend.unbosque.model.Institucion;
import Backend.unbosque.repository.InstitucionRepository;
import Backend.unbosque.service.serviceApi.InstitucionService;

@Service
@Transactional
public class InstitucionServiceImpl implements InstitucionService{

    @Autowired
    private InstitucionRepository institucionRepository;

    @Autowired
    private MongoOperations mongoOperations;

    @Override
    public List<Institucion> getInstitucion() {
        List<Institucion> institucion = new ArrayList<>();
        institucionRepository.findAll().forEach(institucion::add);
        return institucion;
    }

    @Override
    public Institucion getInstitucionById(String id) {
        Institucion institucion = institucionRepository.findById(id).get();
        return institucion;
    }

    @Override
    public Institucion createInstitucion(Institucion institucion) {
        return institucionRepository.save(institucion);
    }

    public static <T> Predicate<T> distinctByKey(Function<? super T, Object> keyExtractor) {   
    Map<Object, Boolean> map = new ConcurrentHashMap<>();
    return t -> map.putIfAbsent(keyExtractor.apply(t), Boolean.TRUE) == null;
    }

    @Override
    public void updateInstitucion(String id, Institucion institucion) {
        Institucion upInstitucion = institucionRepository.findById(id).get();

        if (!institucion.getEstudiantes().isEmpty() && ((upInstitucion.getEstudiantes()==null) || upInstitucion.getEstudiantes().isEmpty())) {
            upInstitucion.setEstudiantes(institucion.getEstudiantes());
        }else if(!institucion.getEstudiantes().isEmpty() && !upInstitucion.getEstudiantes().isEmpty()){ 
            upInstitucion.getEstudiantes().addAll(institucion.getEstudiantes());
            List<Estudiante> listaSinRepetidos = upInstitucion.getEstudiantes().stream().filter(distinctByKey(est -> est.getIdEstudiante())).collect(Collectors.toList());
            upInstitucion.setEstudiantes(listaSinRepetidos);
        }

        if (institucion.getCiudad() != null) {
            upInstitucion.getCiudad().setIdCiudad(institucion.getCiudad().getIdCiudad());
        }

        if (institucion.getNombre() != null){
            upInstitucion.setNombre(institucion.getNombre());
        }

        if (institucion.getDireccion() != null){
            upInstitucion.setDireccion(institucion.getDireccion());
        }

        if (institucion.getEstado() != null){
            upInstitucion.setEstado(institucion.getEstado());
        }

        institucionRepository.save(upInstitucion);
    }

    @Override
    public void deleteInstitucion(String id) {
        institucionRepository.deleteById(id);
        
    }

    @Override
    public List<Estudiante> getEstudiantesByInstitucion(String id) {
        return institucionRepository.findById(id).get().getEstudiantes();
    }
}