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

import Backend.unbosque.model.Ciudad;
import Backend.unbosque.service.serviceApi.CiudadService;

@RestController
@CrossOrigin(origins = {"https://localhost:3000", "http://localhost:3000"})
@RequestMapping({"/ciudad"})
public class CiudadController {
    
    @Autowired
    private CiudadService ciudadService;

    @GetMapping("/todos")
    public ResponseEntity<List<Ciudad>> getAllCiudades(){
        List<Ciudad> ciudades = ciudadService.getCiudades();
        return new ResponseEntity<>(ciudades, HttpStatus.OK);
    }

    @GetMapping({"/{id}"})
    public ResponseEntity<Ciudad> getCiudad(@PathVariable String id){
        Ciudad pais = ciudadService.getCiudadById(id);
        return new ResponseEntity<>(pais, HttpStatus.OK);
    }

    @PostMapping("/nuevo")
    public ResponseEntity<Ciudad> saveCiudad(@RequestBody Ciudad ciudad) {
        Ciudad p = ciudadService.createCiudad(ciudad);
        return new ResponseEntity<>(p, HttpStatus.CREATED);
    }

    @PatchMapping("/editar/{id}")
    public ResponseEntity<Ciudad> updateCiudad(@PathVariable String id, @RequestBody Ciudad ciudad) {
        ciudadService.updateCiudad(id, ciudad);
        return new ResponseEntity<>(ciudadService.getCiudadById(id), HttpStatus.OK);
    }

    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<Ciudad> deleteCiudad(@PathVariable String id) {
        ciudadService.deleteCiudad(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
