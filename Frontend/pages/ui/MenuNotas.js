
import Nav from 'react-bootstrap/Nav'

import { useColors } from '../../hooks/useColor';

const MenuNotas = () => {

  return (
    <Nav justify variant="tabs" defaultActiveKey="/home">
  <Nav.Item>
  <Nav.Link href="/ui/ListaEstudiantes">Rotacion Mes Hospital </Nav.Link>
  </Nav.Item>
  <Nav.Item>
  <Nav.Link href="/ui/ListaEstudiantes">Notas de sala</Nav.Link>
  </Nav.Item>
  <Nav.Item>
  <Nav.Link href="/ui/ListaEstudiantes">Notas Meraki</Nav.Link>
  </Nav.Item>
  <Nav.Item>
  <Nav.Link href="/ui/ListaEstudiantes">Saber Pro</Nav.Link>
  </Nav.Item>
</Nav>
    
     
  );
};
MenuNotas.layout = "MenuLayout"
export default MenuNotas;
