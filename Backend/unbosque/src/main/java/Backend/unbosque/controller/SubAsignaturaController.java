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

import Backend.unbosque.model.SubAsignatura;
import Backend.unbosque.service.serviceApi.SubAsignaturaService;

@RestController
@CrossOrigin(origins = {"https://localhost:3000", "http://localhost:3000"})
@RequestMapping({"/subAsignatura"})
public class SubAsignaturaController {

    @Autowired
    private SubAsignaturaService subAsignaturaService;

    @GetMapping("/todos")
    public ResponseEntity<List<SubAsignatura>> getAllSubAsignaturas() {
        List<SubAsignatura> subAsignaturas = subAsignaturaService.getSubAsignaturas();
        return new ResponseEntity<>(subAsignaturas, HttpStatus.OK);
    }

    @GetMapping({"/{id}"})
    public ResponseEntity<SubAsignatura> getSubAsignatura(@PathVariable String id) {
        SubAsignatura subAsignatura = subAsignaturaService.getSubAsignaturaById(id);
        return new ResponseEntity<>(subAsignatura, HttpStatus.OK);
    }

    @PostMapping("/nuevo")
    public ResponseEntity<SubAsignatura> saveSubAsignatura(@RequestBody SubAsignatura subAsignatura) {
        SubAsignatura subAsig = subAsignaturaService.createSubAsignatura(subAsignatura);
        return new ResponseEntity<>(subAsig, HttpStatus.CREATED);
    }

    @PatchMapping("/editar/{id}")
    public ResponseEntity<SubAsignatura> updateSubAsignatura(@PathVariable String id, @RequestBody SubAsignatura subAsignatura) {
        subAsignaturaService.updateSubAsignatura(id, subAsignatura);
        return new ResponseEntity<>(subAsignaturaService.getSubAsignaturaById(id), HttpStatus.OK);
    }

    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<SubAsignatura> deleteDefinitiva(@PathVariable String id) {
        subAsignaturaService.deleteSubAsignatura(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    
}
