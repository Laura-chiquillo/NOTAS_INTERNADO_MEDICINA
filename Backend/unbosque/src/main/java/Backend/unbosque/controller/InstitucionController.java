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

import Backend.unbosque.model.Institucion;
import Backend.unbosque.service.serviceApi.InstitucionService;

@RestController
@CrossOrigin(origins = {"https://localhost:3000", "https://mondsinc.vercel.app", "http://localhost:3000"})
@RequestMapping({"/institucion"})
public class InstitucionController {

    @Autowired
    private InstitucionService institucionService;

    @GetMapping("/todos")
    public ResponseEntity<List<Institucion>> getAllInstituciones(){
        List<Institucion> instituciones = institucionService.getInstitucion();
        return new ResponseEntity<>(instituciones, HttpStatus.OK);
    }

    @GetMapping({"/{id}"})
    public ResponseEntity<Institucion> getInstitucion(@PathVariable String id){
        Institucion institucion = institucionService.getInstitucionById(id);
        return new ResponseEntity<>(institucion, HttpStatus.OK);
    }

    @PostMapping("/nuevo")
    public ResponseEntity<Institucion> saveInstitucion(@RequestBody Institucion institucion) {
        Institucion insti = institucionService.createInstitucion(institucion);
        return new ResponseEntity<>(insti, HttpStatus.CREATED);
    }

    @PatchMapping("/editar/{id}")
    public ResponseEntity<Institucion> updateInstitucion(@PathVariable String id, @RequestBody Institucion institucion) {
        institucionService.updateInstitucion(id, institucion);
        return new ResponseEntity<>(institucionService.getInstitucionById(id), HttpStatus.OK);
    }

    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<Institucion> deleteInstitucion(@PathVariable String id) {
        institucionService.deleteInstitucion(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    
}
