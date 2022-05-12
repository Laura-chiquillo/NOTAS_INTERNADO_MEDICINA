import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Card,
  ModalFooter,
  Row, Col,CardTitle, CardBody,
} from "reactstrap";
import Link from "next/link";
import MenuNotas from "./MenuNotas";

const data = [
  { id: "1",
  Cedula: "10931039",
  Nombres: "Juan",
  Apellido: "Abadia",
  SitiodePractica: "Los cobos",
  NotaDefinitiva:"4.6",
  ochenta:"4.4",
  Curso:"4.3",
  PALSACLS:"4.7",
  setenta:"4.5",
  SaberPro:"3.8",
  treinta:"4.3",
  Definitiva:"4.1",
  veinte:"4.3",
  Definitiva100 :"4.4",
},
 
];

class NotasFinales extends React.Component {
  
  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
        id: "",
        Cedula: "",
        Nombres: "",
        Apellido: "",
        SitiodePractica: "",
        NotaDefinitiva:"",
        ochenta:"",
        Curso:"",
        PALSACLS:"",
        setenta:"",
        SaberPro:"",
        treinta:"",
        Definitiva:"",
        veinte:"",
        Definitiva100 :"",
      
    },
  };

  

  render() {
    
    return (
      
      <>
        <Container>
        <MenuNotas></MenuNotas>
        <br />
          
          <br />
          <br />
          
          <Table text-align ="center" >
            <thead>
              <tr>
                <th>ID</th>
                <th>Cedula</th>
                <th>Nombres</th>
                <th>Apellido</th>
                <th>Sitio de Practica</th>
                <th>Nota Definitiva</th>
                <th>80%</th>
                <th>Curso</th>
                <th>PALS ACLS</th>
                <th>70%</th>
                <th>Saber Pro</th>
                <th>30%</th>
                <th>Definitiva</th>
                <th>20%</th>
                <th>Definitiva 100%</th>
                
                
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.No}>
                  <td>{dato.id}</td>
                  <td>{dato. Cedula}</td>
                  <td>{dato.Nombres}</td>
                  <td>{dato.Apellido}</td>
                  <td>{dato.SitiodePractica}</td>
                  <td>{dato.NotaDefinitiva}</td>
                  <td>{dato.ochenta}</td>
                  <td>{dato.Curso}</td>
                  <td>{dato.PALSACLS}</td>
                  <td>{dato.setenta}</td>
                  <td>{dato.SaberPro}</td>
                  <td>{dato.treinta}</td>
                  <td>{dato.Definitiva}</td>
                  <td>{dato.veinte}</td>
                  <td>{dato.Definitiva100}</td>
                  
                  <td>
                   
                  </td>
                </tr>
              ))}
            </tbody>
            
          </Table>
          
          <Col xs="0" md="0">
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-3*/}
          {/* --------------------------------------------------------------------------------*/}
          <Card>
          <CardTitle tag="h0" className="border-bottom p-0 mb-0">
            </CardTitle>
            <CardBody className="">
              <div className="button-group">
                <Link href={'/ui/graficas'}>
                <Button className="btn" color="primary" size="lg">
                  Ver Graficas
                </Button>
                </Link>
                <Button className="btn" color="secondary" size="lg">
                 Descargar lista
                </Button>
              </div>
            </CardBody>
          </Card>
        </Col>
        </Container>


      </>
      
    );
  }
}
NotasFinales.layout = "MenuLayout"
export default NotasFinales;