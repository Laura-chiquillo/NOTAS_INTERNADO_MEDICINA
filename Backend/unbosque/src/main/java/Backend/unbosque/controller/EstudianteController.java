package Backend.unbosque.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Backend.unbosque.model.Estudiante;
import Backend.unbosque.service.serviceApi.EstudianteService;

@RestController
@RequestMapping({"/estudiante"})
public class EstudianteController {
    
    @Autowired
    private EstudianteService estudianteService;

    @GetMapping("/todos")
    public ResponseEntity<List<Estudiante>> getAllEstudiantes() {
        List<Estudiante> estudiantes = estudianteService.getEstudiantes();
        return new ResponseEntity<>(estudiantes, HttpStatus.OK);
    }

    @GetMapping({"/{id}"})
    public ResponseEntity<Estudiante> getEstudiante(@PathVariable String id) {
        Estudiante estudiante = estudianteService.getEstudianteById(id);
        return new ResponseEntity<>(estudiante, HttpStatus.OK);
    }

    @PostMapping("/nuevo")
    public ResponseEntity<Estudiante> saveEstudiante(@RequestBody Estudiante estudiante) {
        Estudiante est = estudianteService.createEstudiante(estudiante);
        return new ResponseEntity<>(est, HttpStatus.CREATED);
    }

    @PatchMapping("/editar/{id}")
    public ResponseEntity<Estudiante> updateEstudiante(@PathVariable String id, @RequestBody Estudiante estudiante) {
        estudianteService.updateEstudiante(id, estudiante);
        return new ResponseEntity<>(estudianteService.getEstudianteById(id), HttpStatus.OK);
    }

    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<Estudiante> deleteEstudiante(@PathVariable String id) {
        estudianteService.deleteEstudiante(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
