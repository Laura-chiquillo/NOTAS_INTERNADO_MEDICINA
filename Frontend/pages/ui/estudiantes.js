import React, { useState } from 'react';
import { Button, ButtonGroup, Card, FormText, FormGroup, Label, Input, CardBody, CardTitle, Row, Col } from 'reactstrap';
import Link from 'next/link';
import { useColors } from '../../hooks/useColor';
import Accordion from 'react-bootstrap/Accordion';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';

const Buttons = () => {
  
  /* crear la variable que contiene la lista de los estudiantes */
  /* se inicia con una lista vacia*/ 
  const [listEstudiantes, setListaEstudiantes] = useState([])

  /* Llamar la api en una función */ 

  

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  {/* para la ventana de editar estudiante */ }
  const [shows, setShows] = useState(false);
  const close = () => setShows(false);
  const handShow = () => setShows(true);

  {/* para la ventana de editar notas */ }
  const [show2, setShows2] = useState(false);
  const close2 = () => setShows2(false);
  const handShow2 = () => setShows2(true);
  const { color } = useColors();

  return (
    <div>
      {/* Start Inner Div*/}
      {/* --------------------------------------------------------------------------------*/}
      {/* --------------------------------------------------------------------------------*/}
      {/* Row*/}
      {/* --------------------------------------------------------------------------------*/}
      <Row>
        <Col xs="12" md="15">
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-1*/}
          {/* --------------------------------------------------------------------------------*/}
          <Card>
            <CardTitle tag="h6" className="border-bottom p-0 mb-0">

            </CardTitle>
            <CardBody className="">
              <div className="button-group">
              <Form className="d-flex">
              
                <Button className="btn"  onClick={handleShow} style={{backgroundColor: color, color:"black"}} >
                  +
                </Button>
                <Modal show={show} onHide={handleClose} animation={false}>
                  <Modal.Header closeButton>
                    <Modal.Title>Agregar Estudiantes</Modal.Title>
                  </Modal.Header>
                  <Card>
                    <CardBody>

                      <Row>
                        <FormGroup>
                          <Label for="exampleFile">Cargar Archivo</Label>
                          <Input id="exampleFile" name="file" type="file" />
                        </FormGroup>
                      </Row>
                      <Link href={'/ui/registroEstudiantes'}><Button color="primary">Ingresar Datos Estudiantes</Button></Link>
                    </CardBody>
                  </Card>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Cerrar
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                      Guardar
                    </Button>
                  </Modal.Footer>
                </Modal>
                <FormText>
                  Agregar estudiantes 
                  </FormText>&nbsp;
                  <input placeholder='Buscar' className='form-control'></input>
                <Button className="btn btn-success btn-sm" color="danger">Eliminar</Button>
                </Form>
                <FormGroup>
                  <Label for="exampleSelect"></Label>
                  <Input id="exampleSelect" name="select" type="select">
                    <option>Ordenar por</option>
                    <option>Orden alfabetico</option>
                    <option>Notas registradas</option>
                    <option>Notas no registradas</option>
                    <option>Mes</option>
                  </Input>
                </FormGroup>

              </div>
            </CardBody>
          </Card>
        </Col>
        <CardBody>
          <FormGroup>
            <Label for="exampleText"></Label>
            <Row>
              <Col md={11} xs={10}>
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      Jennifer acosta
                    </Accordion.Header>
                    <Accordion.Body>
                      <Row>
                        <Col>
                          <ul>
                            <li>Documento: 10000000</li>
                            <li>semestre actual: 11</li>
                            <li>Hospital actual: curitas del saber</li>
                            <li>fecha inicio actual: 21/02/22</li>
                            <li>Fecha finalización actual: 21/04/2022</li>
                          </ul>
                        </Col>
                        <Col>
                        {/*  Notas */}
                          <Row>
                            <Col>
                              <Accordion>
                                <Accordion.Item eventKey="0">
                                  <Accordion.Header> Asignatura 1
                                  </Accordion.Header>
                                  <Accordion.Body>
                                    <li>Pediatria: 4.8</li>
                                  </Accordion.Body>
                                </Accordion.Item>
                              </Accordion>
                            </Col>
                            <Col className="p-1" xs={2}>
                              <ButtonGroup aria-label="Basic example">

                                <Button style={{ backgroundColor: color, color: "black" }} onClick={handShow2}>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                                  </svg>
                                </Button>

                                <Modal
                                  show={show2}
                                  onHide={close2}
                                  backdrop="static"
                                  keyboard={false}
                                >
                                  <Modal.Header closeButton>
                                    <Modal.Title>Editar Nota</Modal.Title>
                                  </Modal.Header>
                                  <Modal.Body>
                                    <Form>
                                      <FormGroup>
                                        <Label>Nota</Label>
                                        <Input
                                          type="text"
                                          id='IPS'
                                          name='ips'
                                        />
                                      </FormGroup>
                                    </Form>
                                  </Modal.Body>
                                  <Modal.Footer>
                                    <Button variant="secondary" onClick={close2}>
                                      Cancelar
                                    </Button>
                                    <Button variant="primary">
                                      Guardar
                                    </Button>
                                  </Modal.Footer>
                                </Modal>

                                <Button className="btn" onClick={handleShow} style={{ backgroundColor: color, color: "black" }} >
                                  +
                                </Button>
                              </ButtonGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <Accordion>
                                <Accordion.Item eventKey="0">
                                  <Accordion.Header> Asignatura 2
                                  </Accordion.Header>
                                  <Accordion.Body>
                                    <li>Cirugía: 4.8</li>
                                  </Accordion.Body>
                                </Accordion.Item>
                              </Accordion>
                            </Col>
                            <Col className="p-1" xs={2}>
                              <ButtonGroup aria-label="Basic example">

                                <Button style={{ backgroundColor: color, color: "black" }} onClick={handShow2}>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                                  </svg>
                                </Button>

                                <Modal
                                  show={show2}
                                  onHide={close2}
                                  backdrop="static"
                                  keyboard={false}
                                >
                                  <Modal.Header closeButton>
                                    <Modal.Title>Editar Nota</Modal.Title>
                                  </Modal.Header>
                                  <Modal.Body>
                                    <Form>
                                      <FormGroup>
                                        <Label>Nota</Label>
                                        <Input
                                          type="text"
                                          id='IPS'
                                          name='ips'
                                        />
                                      </FormGroup>
                                    </Form>
                                  </Modal.Body>
                                  <Modal.Footer>
                                    <Button variant="secondary" onClick={close2}>
                                      Cancelar
                                    </Button>
                                    <Button variant="primary">
                                      Guardar
                                    </Button>
                                  </Modal.Footer>
                                </Modal>

                                <Button className="btn" onClick={handleShow} style={{ backgroundColor: color, color: "black" }} >
                                  +
                                </Button>
                              </ButtonGroup>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
              <Col className="p-1" xs={1}>
                <ButtonGroup aria-label="Basic example">

                  <Button style={{ backgroundColor: color, color: "black" }} onClick={handShow}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                      <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                    </svg>
                  </Button>

                  <Modal
                    show={shows}
                    onHide={close}
                    backdrop="static"
                    keyboard={false}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Editar estudiante</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form>
                        <FormGroup>
                          <Label>Cédula de ciudadanía</Label>
                          <Input
                            type="text"
                            id='IPS'
                            name='ips'
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label>Nombres</Label>
                          <div class="input-group">
                            <Input
                              type="text"
                              id='Nombre1'
                              name='nombre1'
                            />
                            <span class="input-group-addon">-</span>
                            <Input
                              type="text"
                              id='Nombre2'
                              name='nombre2'
                            />
                          </div>
                        </FormGroup>
                        <FormGroup>
                          <Label>Apellidos</Label>
                          <div class="input-group">
                            <Input
                              type="text"
                              id='Apellido1'
                              name='apellido1'
                            />
                            <span class="input-group-addon">-</span>
                            <Input
                              type="text"
                              id='Apellido2'
                              name='Apellido2'
                            />
                          </div>
                        </FormGroup>
                        <FormGroup>
                          <Label>Teléfono</Label>
                          <Input
                            id="Telefono"
                            name="telefono"
                            type="number"
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label for="eEmail">Correo</Label>
                          <Input
                            id="Email"
                            name="email"
                            type="email"
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label>Semestre</Label>
                          <Input
                            type="text"
                            id='Semestre'
                            name='Semestre'
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label>Dirección</Label>
                          <Input
                            type="text"
                            id='direcion'
                            name='direccion'
                          />
                        </FormGroup>
                      </Form>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={close}>
                        Cancelar
                      </Button>
                      <Button variant="primary">
                        Guardar
                      </Button>
                    </Modal.Footer>
                  </Modal>

                  <Button style={{ backgroundColor: color, color: "black" }}>
                    <input type="checkbox"></input>
                  </Button>
                </ButtonGroup>
              </Col>
            </Row>
          </FormGroup>
        </CardBody>

        <Col xs="0" md="0">
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-3*/}
          {/* --------------------------------------------------------------------------------*/}
          <Card>
            <CardTitle tag="h1" className="border-bottom p-0 mb-0">
            </CardTitle>
            <CardBody className="">
              <div className="button-group">
                <Link href={'/ui/ListaEstudiantes'}>
                  <Button style={{ backgroundColor: color, color: "black" }} size="lg">Ver informes</Button>
                </Link>
                <Button className="btn" color="secondary" size="lg">
                  Descargar lista
                </Button>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
      {/* --------------------------------------------------------------------------------*/}
      {/* Row*/}
      {/* --------------------------------------------------------------------------------*/}

      {/* --------------------------------------------------------------------------------*/}
      {/* End Inner Div*/}
      {/* --------------------------------------------------------------------------------*/}
    </div>
  );
};
Buttons.layout = "MenuLayout"
export default Buttons;
