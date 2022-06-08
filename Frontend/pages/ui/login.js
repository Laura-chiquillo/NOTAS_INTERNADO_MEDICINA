import {
  Card,
  Row,
  Col,
  CardTitle,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,

} from 'reactstrap';
import Link from 'next/link';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { apiLoginAdmin, apiLoginCoordinador } from '../../api/login';
import { getApiAdmin } from '../../api/admin';
import { getApiCoordinador } from '../../api/coordinador';
import { useRouter } from 'next/router'

const Forms = () => {

  /* Cambiar contraseña */
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  /* pedir codigo */
  const [shows, setShows] = useState(false);
  const handleCloses = () => setShows(false);
  const handleShows = () => setShows(true);
  const abrirModal = () => {
    handleClose()
    handleShows()
  }

  /* Cambiar la contraseña */
  const [shows2, setShows2] = useState(false);
  const handleCloses2 = () => setShows2(false);
  const handleShows2 = () => setShows2(true);
  const abrirModal2 = () => {
    handleCloses()
    handleShows2()
  }

  const [userSeleccionado, setUserSeleccionado] = useState({})

  const router = useRouter()

  const actualizarUser = (e) => {
    setUserSeleccionado(
      {
        ...userSeleccionado,
        [e.target.name]: e.target.value
      }
    )
  }
  
  const login = () => { 

    if("correo" in userSeleccionado==false){
      alert("¡Ingrese un correo!")
      return
    }
    if("contraseña" in userSeleccionado==false){
      alert("¡Ingrese una contraseña!")
      return
    }

    getApiAdmin(userSeleccionado.correo).then((fulfilled) => {
      console.log("Admin")
      console.log(userSeleccionado)
      apiLoginAdmin(userSeleccionado).then(() => {
        router.push('/ui/estudiantes')
      })
      return
    }).catch((error) => {
      console.log(error)
    })
    

    getApiCoordinador(userSeleccionado.correo).then((fulfilled) => {
      console.log("Coordinador")
      console.log(userSeleccionado)
      apiLoginCoordinador(userSeleccionado).then(() => {
        router.push('/ui/vistaHospitales')
      })
      return
    }).catch((error) => {
      console.log(error)
    })
  }

  return (
    <div >


      <Row className="justify-content-md-center">
        <Col xs="0" md="5">
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-1*/}
          {/* --------------------------------------------------------------------------------*/}

          <Card >

            <CardBody>
              <Form className='rounded p-4 p-sm-3 ' onChange={actualizarUser}>
                <FormGroup>
                  <Label for="exampleEmail">Correo Electrónico</Label>
                  <Input
                    id="exampleEmail"
                    name="correo"
                    placeholder="Introducir correo"
                    type="email"
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Contraseña</Label>
                  <Input
                    id="examplePassword"
                    name="contraseña"
                    placeholder="Introducir contraseña"
                    type="password"
                    
                  />
                </FormGroup>
                <Button onClick={login}>Ingresar</Button>

                {/* Contraseña */}
                <Button variant="primary" onClick={handleShow}>
                  ¿Olvidaste tu contraseña?
                </Button>

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Cambiar contraseña</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form>
                      <FormGroup>
                        <Label>Ingrese su correo electronico</Label>
                        <Input
                          id="exampleEmail"
                          name="email"
                          placeholder="Introducir correo"
                          type="email"
                        />
                      </FormGroup>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Cancelar
                    </Button>
                    <Button variant="primary" onClick={abrirModal}>
                      Continuar
                    </Button>
                  </Modal.Footer>
                </Modal>

                {/* confirmar codigo */}
                <Modal show={shows} onHide={handleCloses}>
                  <Modal.Header closeButton>
                    <Modal.Title>Cambiar contraseña</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form>
                      <FormGroup>
                        <Label>La nueva contraseña ha sido enviada a su correo</Label>
                      </FormGroup>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloses}>
                      Terminar
                    </Button>
                  </Modal.Footer>
                </Modal>
                
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>

    </div>


  );
};


export default Forms;