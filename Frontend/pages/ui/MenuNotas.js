
import Nav from 'react-bootstrap/Nav'
import {FormControl,Form, Button} from 'react-bootstrap';
const MenuNotas = () => {

  

  return (
    
    <Nav justify variant="tabs" defaultActiveKey="/home">
  <Nav.Item>
  <Nav.Link href="/ui/ListaEstudiantes">Rotacion Mes Hospital </Nav.Link>
  </Nav.Item>
  <Nav.Item>
  <Nav.Link href="/ui/NotasFinales">Notas de sala</Nav.Link>
  </Nav.Item>
  <Nav.Item>
  <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Buscador"
        />
        <Button variant="outline-success">Buscador</Button>
      </Form>
        </Nav.Item>
</Nav>


    
     
  );
};
MenuNotas.layout = "MenuLayout"
export default MenuNotas;
