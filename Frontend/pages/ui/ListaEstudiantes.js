
import React, { useEffect, useState } from 'react';
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
  Label,
  FormControl,
  Input,
  ModalFooter,
  Row, Col, CardTitle, CardBody,
} from "reactstrap";
import { Form } from 'react-bootstrap';
import Link from "next/link";
import MenuNotas from "./MenuNotas";
<<<<<<< HEAD
import { getApiRotacion } from '../../api/rotacion'

const ListaEstudiantes = () => {
=======
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
>>>>>>> Laura



<<<<<<< HEAD

  const [listRotacion, setListaRotacion] = useState([])
=======
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
>>>>>>> Laura

  constructor (props) {
    super(props);
    this.tabla = React.createRef();
  }

<<<<<<< HEAD
  /* Llamar la función de la api mostrar estudiante*/
  useEffect(() => {
    getApiRotacion()
      .then((Datos) => {
        setListaRotacion(Datos)

      })
      .catch((Error) => {
        alert(Error.toString())
      })
  }, [])

  /* editar estudiante */
  const [estudianteSeleccionado, setEstudianteSeleccionado] = useState({})

 

  const actualizarEditEstudiante = (e) => {
    setEstudianteSeleccionado(
      {
        ...estudianteSeleccionado,
        [e.target.name]: e.target.value
      }
    )
  }



     return (
      
     
        <Container>
    
        <br />
          
          <br />
          <br />
          
          <Table  >
=======
  render() {

    return (

      <>
        <Container>
          <MenuNotas></MenuNotas>
          <br />

          <br />
          <br />

          <Table ref={this.tabla}>
>>>>>>> Laura
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
              {listRotacion.map((estudiante,indice) => (
                <tr eventKey={indice} key={indice}>
                  <td>{estudiante.documento}</td>
                  <td>{estudiante?.primerNombre + " "}{estudiante?.segundoNombre + " "}</td>
                  <td>{estudiante.primerApellido + " "}{estudiante?.segundoApellido + " "}</td>
                  <td>{estudiante.promedio}</td>
                  <td>{estudiante.institucion}</td>
                  <td>{estudiante.nota}</td>
                  <td>{estudiante.mes}</td>
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


<<<<<<< HEAD
    
=======
      </>

>>>>>>> Laura
    );
  }

ListaEstudiantes.layout = "MenuLayout"
export default ListaEstudiantes;