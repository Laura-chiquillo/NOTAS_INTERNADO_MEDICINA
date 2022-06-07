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
  Row, Col, CardTitle, CardBody,
} from "reactstrap";
import Link from "next/link";
import MenuNotas from "./MenuNotas";
import { 
  DropdownButton,
  ButtonGroup,
  Dropdown} from 'react-bootstrap';




const data = [
  { No: 1, Cedula: "9120928122", Nombres: "Naruto", Apellido: "Naruto", Promedio: "4.4", SitioPractica: "Los Cobos", Nota: "4.4", Mes: "Febrero" },
  { No: 2, Cedula: "9120928122", Nombres: "Alejandro", Apellido: "Ruiz", Promedio: "4.4", SitioPractica: "Los Cobos", Nota: "4.4", Mes: "Febrero" },
  { No: 3, Cedula: "9120928122", Nombres: "Alejandro", Apellido: "Ruiz", Promedio: "4.4", SitioPractica: "Los Cobos", Nota: "4.4", Mes: "Febrero" },
  { No: 4, Cedula: "9120928122", Nombres: "Alejandro", Apellido: "Ruiz", Promedio: "4.4", SitioPractica: "Los Cobos", Nota: "4.4", Mes: "Febrero" },
  { No: 5, Cedula: "9120928122", Nombres: "Alejandro", Apellido: "Ruiz", Promedio: "4.4", SitioPractica: "Los Cobos", Nota: "4.4", Mes: "Febrero" },

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

  constructor (props) {
    super(props);
    this.tabla = React.createRef();
  }

  render() {

    return (

      <>
        <Container>
          <MenuNotas></MenuNotas>
          <br />

          <br />
          <br />

          <Table ref={this.tabla}>
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
                    <Button className="btn" color="secondary" >
                      Ver Graficas
                    </Button>
                  </Link>
                  <Link href={'/ui/estudiantes'}>
                    <Button className="btn" color="primary" >
                      Atrás
                    </Button>
                  </Link>
                  {/* Descargar PDF y excel */}
                  <ButtonGroup >
                    <DropdownButton as={ButtonGroup} title="Descargar lista" className="btn btn-lg p-0" id="bg-nested-dropdown">
                      <Dropdown.Item eventKey="1"> PDF</Dropdown.Item>
                      <Dropdown.Item eventKey="2">EXCEL</Dropdown.Item>
                    </DropdownButton>
                  </ButtonGroup>
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