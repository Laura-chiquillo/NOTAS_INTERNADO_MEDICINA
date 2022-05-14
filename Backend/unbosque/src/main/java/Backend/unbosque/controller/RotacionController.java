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

import Backend.unbosque.model.Rotacion;
import Backend.unbosque.service.serviceApi.RotacionService;

@RestController
@RequestMapping({"/rotacion"})
public class RotacionController {

    @Autowired
    private RotacionService rotacionService;

    @GetMapping("/todos")
    public ResponseEntity<List<Rotacion>> getAllRotaciones(){
        List<Rotacion> rotaciones = rotacionService.getRotaciones();
        return new ResponseEntity<>(rotaciones, HttpStatus.OK);
    }

    @GetMapping({"/{id}"})
    public ResponseEntity<Rotacion> getRotacion(@PathVariable String id){
        Rotacion rotacion = rotacionService.getRotacionById(id);
        return new ResponseEntity<>(rotacion, HttpStatus.OK);
    }

    @PostMapping("/nuevo")
    public ResponseEntity<Rotacion> saveRotacion(@RequestBody Rotacion rotacion) {
        Rotacion rot = rotacionService.createRotacion(rotacion);
        return new ResponseEntity<>(rot, HttpStatus.CREATED);
    }

    @PatchMapping("/editar/{id}")
    public ResponseEntity<Rotacion> updateRotacion(@PathVariable String id, @RequestBody Rotacion rotacion) {
        rotacionService.updateRotacion(id, rotacion);
        return new ResponseEntity<>(rotacionService.getRotacionById(id), HttpStatus.OK);
    }

    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<Rotacion> deleteRotacion(@PathVariable String id) {
        rotacionService.deleteRotacion(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    
}
