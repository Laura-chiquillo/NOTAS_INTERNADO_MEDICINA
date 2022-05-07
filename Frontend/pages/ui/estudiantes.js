import React, { useState } from 'react';
import { Button, ButtonGroup, Card, FormText, FormGroup, Label, Input, CardBody, CardTitle, Row, Col } from 'reactstrap';
import Link from 'next/link';
import { useColors } from '../../hooks/useColor';
import Accordion from 'react-bootstrap/Accordion';
import Modal from 'react-bootstrap/Modal';

const Buttons = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [shows, setShows] = useState(false);
  const close = () => setShows(false);
  const handShow = () => setShows(true);

  const { color } = useColors();

  return (
    <div>
      {/* --------------------------------------------------------------------------------*/}
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
                <Button className="btn" onClick={handleShow} style={{ backgroundColor: color, color: "black" }} >
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
                <input placeholder='Buscar'></input>
                <Button className="btn btn-success btn-sm" color="danger">Eliminar</Button>
                <FormGroup>
                  <Label for="exampleSelect"></Label>
                  <Input id="exampleSelect" name="select" type="select">
                    <option>Ordenar por</option>
                    <option>Orden alfabetico</option>
                    <option>Notas subidas</option>
                    <option>Notas no subidas</option>
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
                          <Accordion>
                            <Accordion.Item eventKey="0">
                              <Accordion.Header>Rotación 1
                              </Accordion.Header>
                              <Accordion.Body>
                                <li>Pediatria: 4.8</li>
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                          <Accordion>
                            <Accordion.Item eventKey="0">
                              <Accordion.Header>Rotación 2
                              </Accordion.Header>
                              <Accordion.Body>
                                <li>psicologia: 4.5</li>
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                        </Col>
                      </Row>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
              <Col className="p-1" xs={1}>
                <ButtonGroup aria-label="Basic example">
                  
                    <Button variant="primary" onClick={handShow}>
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
                        <Modal.Title>Modal title</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        I will not close if you click outside me. Don't even try to press
                        escape key.
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={close}>
                          Close
                        </Button>
                        <Button variant="primary">Understood</Button>
                      </Modal.Footer>
                    </Modal>
                
                  <Button variant="secondary">
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
