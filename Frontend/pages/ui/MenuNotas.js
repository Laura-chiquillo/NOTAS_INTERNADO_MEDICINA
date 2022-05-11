
import Nav from 'react-bootstrap/Nav'
import {FormControl,Form, Button} from 'react-bootstrap';
import { ButtonGroup, Card, FormText, FormGroup, Label, Input, CardBody, CardTitle, Row, Col } from 'reactstrap';
import { useState } from 'react';

const MenuNotas = (ListaEstudiantes) => {

const [search,setSearch]= useState("")

  return (
    
    <Nav justify variant="tabs" defaultActiveKey="/home">
  <Nav.Item>
  <Nav.Link href="/ui/ListaEstudiantes">Rotacion Mes Hospital </Nav.Link>
  </Nav.Item>
  <Nav.Item>
  <Nav.Link href="/ui/NotasFinalescopy">Notas de sala</Nav.Link>
  </Nav.Item>
  <Nav.Item>
  <Form className="d-fl ex">
        <FormControl
         
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Buscador"
        />
       
      </Form>     
        </Nav.Item>
  <Nav.Item>
        <Input id="exampleSelect" name="select" type="select">
                    <option>Ordenar por</option>
                    <option>Orden alfabetico</option>
                    <option>Orden alfabetico inverso</option>
                  </Input>
                  </Nav.Item>
</Nav>


    
     
  );
};
MenuNotas.layout = "MenuLayout"
export default MenuNotas;

