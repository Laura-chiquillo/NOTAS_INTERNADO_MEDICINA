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
  { No: 1, Cedula: "9120928122", Nombres: "Naruto", Apellido:  "Naruto" , Promedio: "4.4", SitioPractica: "Los Cobos", Nota: "4.4",Mes:"Febrero" },
  { No: 2, Cedula: "9120928122", Nombres: "Alejandro", Apellido:  "Ruiz" , Promedio: "4.4", SitioPractica: "Los Cobos", Nota: "4.4",Mes:"Febrero" },
  { No: 3, Cedula: "9120928122", Nombres: "Alejandro", Apellido:  "Ruiz" , Promedio: "4.4", SitioPractica: "Los Cobos", Nota: "4.4",Mes:"Febrero" },
  { No: 4, Cedula: "9120928122", Nombres: "Alejandro", Apellido:  "Ruiz" , Promedio: "4.4", SitioPractica: "Los Cobos", Nota: "4.4",Mes:"Febrero" },
  { No: 5, Cedula: "9120928122", Nombres: "Alejandro", Apellido:  "Ruiz" , Promedio: "4.4", SitioPractica: "Los Cobos", Nota: "4.4",Mes:"Febrero" },

];


class ListaEstudiantes extends React.Component {
  
  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      id: "",
      Cedula: "",
      Nombres: "",
      Apellido: "",
      Promedio: "",
      SitioPractica: "",
      Nota: "",
      Mes: "",
      
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
          
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Cedula</th>
                <th>Nombres</th>
                <th>Apellido</th>
                <th>Promedio</th>
                <th>Sitio de Practica</th>
                <th>Nota</th>
                <th>Mes</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.No}>
                  <td>{dato.No}</td>
                  <td>{dato.Cedula}</td>
                  <td>{dato.Nombres}</td>
                  <td>{dato.Apellido}</td>
                  <td>{dato.Promedio}</td>
                  <td>{dato.SitioPractica}</td>
                  <td>{dato.Nota}</td>
                  <td>{dato.Mes}</td>
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
ListaEstudiantes.layout = "MenuLayout"
export default ListaEstudiantes;