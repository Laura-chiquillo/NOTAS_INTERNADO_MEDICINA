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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import Backend.unbosque.model.CoordinadorInsti;
import Backend.unbosque.service.serviceApi.CoordinadorInstiService;

@RestController
@CrossOrigin(origins = {"https://localhost:3000", "http://localhost:3000"})
@RequestMapping({"/coordinadorIPS"})
public class CoordinadorInstiController {

    @Autowired
    private CoordinadorInstiService coordinadorInstiService;

    @GetMapping("/todos")
    public ResponseEntity<List<CoordinadorInsti>> getAllCoordinadores() {
        List<CoordinadorInsti> coordinadores = coordinadorInstiService.getCoordinadorInstis();
        return new ResponseEntity<>(coordinadores, HttpStatus.OK);
    }
    @GetMapping({"/{id}"})
    public ResponseEntity<CoordinadorInsti> getCoordinador(@PathVariable String id) {
        CoordinadorInsti coordinadorInsti = coordinadorInstiService.getCoordinadorInstiById(id);
        return new ResponseEntity<>(coordinadorInsti, HttpStatus.OK);
    }

    @PostMapping("/nuevo")
    public ResponseEntity<CoordinadorInsti> saveCoordinador(@RequestBody CoordinadorInsti coordinadorInsti) {
        CoordinadorInsti coordinador = coordinadorInstiService.createCoordinadorInsti(coordinadorInsti);
        return new ResponseEntity<>(coordinador, HttpStatus.CREATED);
    }

    @PatchMapping("/editar/{id}")
    public ResponseEntity<CoordinadorInsti> updateCoordinador(@PathVariable String id, @RequestBody CoordinadorInsti coordinadorInsti) {
        coordinadorInstiService.updateCoordinadorInsti(id, coordinadorInsti);
        return new ResponseEntity<>(coordinadorInstiService.getCoordinadorInstiById(id), HttpStatus.OK);
    }
    @PatchMapping("/editar/contrasena/{id}")
    public ResponseEntity<CoordinadorInsti> updatePassword(@PathVariable String id, @RequestParam String contraseña) {
        coordinadorInstiService.updatePassword(id, contraseña);
        return new ResponseEntity<>(coordinadorInstiService.getCoordinadorInstiById(id), HttpStatus.OK);
    }

    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<CoordinadorInsti> deleteCoordinador(@PathVariable String id) {
        coordinadorInstiService.deleteCoordinadorInsti(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }   
}