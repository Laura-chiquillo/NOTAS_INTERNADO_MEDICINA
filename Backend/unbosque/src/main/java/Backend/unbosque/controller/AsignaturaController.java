package Backend.unbosque.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Backend.unbosque.model.Asignatura;
import Backend.unbosque.service.serviceApi.AsignaturaService;

@RestController
@CrossOrigin(origins = {"https://localhost:3000", "https://mondsinc.vercel.app", "http://localhost:3000"})
@RequestMapping({"/asignatura"})
public class AsignaturaController {

    @Autowired
    private AsignaturaService asignaturaService;

    @GetMapping("/todos")
    public ResponseEntity<List<Asignatura>> getAllAsignaturas() {
        List<Asignatura> asignaturas = asignaturaService.getAsignatura();
        return new ResponseEntity<>(asignaturas, HttpStatus.OK);
    }
    
    @GetMapping({"/{id}"})
    public ResponseEntity<Asignatura> getAsignatura(@PathVariable String id) {
        Asignatura asignatura = asignaturaService.getAsignaturaById(id);
        return new ResponseEntity<>(asignatura, HttpStatus.OK);
    }

    @PostMapping("/nuevo")
    public ResponseEntity<Asignatura> saveAsignatura(@RequestBody Asignatura asignatura) {
        Asignatura asig = asignaturaService.createAsignatura(asignatura);
        return new ResponseEntity<>(asig, HttpStatus.CREATED);
    }

    @PatchMapping("/editar/{id}")
    public ResponseEntity<Asignatura> updateAsignatura(@PathVariable String id, @RequestBody Asignatura asignatura) {
        asignaturaService.updateAsignatura(id, asignatura);
        return new ResponseEntity<>(asignaturaService.getAsignaturaById(id), HttpStatus.OK);
    }

    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<Asignatura> deleteAsignatura(@PathVariable String id) {
        asignaturaService.deleteAsignatura(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
