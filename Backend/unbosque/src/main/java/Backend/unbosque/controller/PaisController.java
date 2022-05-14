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

import Backend.unbosque.model.Pais;
import Backend.unbosque.service.serviceApi.PaisService;

@RestController
@RequestMapping({"/pais"})
public class PaisController {

    @Autowired
    private PaisService paisService;

    @GetMapping("/todos")
    public ResponseEntity<List<Pais>> getAllPaises(){
        List<Pais> paises = paisService.getPais();
        return new ResponseEntity<>(paises, HttpStatus.OK);
    }

    @GetMapping({"/{id}"})
    public ResponseEntity<Pais> getPais(@PathVariable String id){
        Pais pais = paisService.getPaisById(id);
        return new ResponseEntity<>(pais, HttpStatus.OK);
    }

    @PostMapping("/nuevo")
    public ResponseEntity<Pais> savePais(@RequestBody Pais pais) {
        Pais p = paisService.createPais(pais);
        return new ResponseEntity<>(p, HttpStatus.CREATED);
    }

    @PatchMapping("/editar/{id}")
    public ResponseEntity<Pais> updatePais(@PathVariable String id, @RequestBody Pais pais) {
        paisService.updatePais(id, pais);
        return new ResponseEntity<>(paisService.getPaisById(id), HttpStatus.OK);
    }

    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<Pais> deletePais(@PathVariable String id) {
        paisService.deletePais(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    
}
