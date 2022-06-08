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

import Backend.unbosque.model.Definitiva;
import Backend.unbosque.service.serviceApi.DefinitivaService;

@RestController
@CrossOrigin(origins = {"https://localhost:3000", "http://localhost:3000"})
@RequestMapping({"/definitiva"})
public class DefinitivaController {

    @Autowired
    private DefinitivaService definitivaService;

    @GetMapping("/todos")
    public ResponseEntity<List<Definitiva>> getAllDefinitivas() {
        List<Definitiva> definitivas = definitivaService.getDefinitivas();
        return new ResponseEntity<>(definitivas, HttpStatus.OK);
    }

    @GetMapping({"/{id}"})
    public ResponseEntity<Definitiva> getDefinitiva(@PathVariable String id) {
        Definitiva definitiva = definitivaService.getDefinitivaById(id);
        return new ResponseEntity<>(definitiva, HttpStatus.OK);
    }
    
    @PostMapping("/nuevo")
    public ResponseEntity<Definitiva> updateDefinitiva(@RequestBody Definitiva definitiva) {
        Definitiva def = definitivaService.createDefinitiva(definitiva);
        return new ResponseEntity<>(def, HttpStatus.CREATED);
    }

    @PatchMapping("/editar/{id}")
    public ResponseEntity<Definitiva> updateDefinitiva(@PathVariable String id, @RequestBody Definitiva definitiva){
        definitivaService.updateDefinitiva(id, definitiva);
        return new ResponseEntity<>(definitivaService.getDefinitivaById(id), HttpStatus.OK);
    }

    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<Definitiva> deleteDefinitiva(@PathVariable String id) {
        definitivaService.deleteDefinitiva(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}