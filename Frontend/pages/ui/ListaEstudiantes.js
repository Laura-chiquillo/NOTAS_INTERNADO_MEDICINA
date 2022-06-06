
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
  Row, Col,CardTitle, CardBody,
} from "reactstrap";
import { Form } from 'react-bootstrap';
import Link from "next/link";
import MenuNotas from "./MenuNotas";
import { getApiRotacion } from '../../api/rotacion'

const ListaEstudiantes = () => {




  const [listRotacion, setListaRotacion] = useState([])

  

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


    
    );
  }

ListaEstudiantes.layout = "MenuLayout"
export default ListaEstudiantes;