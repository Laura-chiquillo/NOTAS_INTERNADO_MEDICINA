
import React, { useState } from 'react';
import { Button, Card, FormText, FormGroup, Label, Input, CardBody, CardTitle, Row, Col } from 'reactstrap';
import Link from 'next/link';
import { useColors } from '../../hooks/useColor';
import {Form} from 'react-bootstrap';
import Modal  from 'react-bootstrap/Modal';
import Accordion from 'react-bootstrap/Accordion';
const Buttons = () => {

  const [cSelected, setCSelected] = useState([]);
  const [rSelected, setRSelected] = useState(null);
  const { color } = useColors();
  const onRadioBtnClick = (vSelected) => {
    setRSelected(vSelected);
  };

  const onCheckboxBtnClick = (selected) => {
    const index = cSelected.indexOf(selected);
    if (index < 0) {
      cSelected.push(selected);
    } else {
      cSelected.splice(index, 1);
    }
    setCSelected([...cSelected]);
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);


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
              <Form className="d-flex">
              
                <Button className="btn"onClick={handleShow} style={{backgroundColor: color, color:"black"}}>
                  +
                </Button>
                <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Insertar Sitios de Practica</Modal.Title>
        </Modal.Header>
        <Card>
          <CardBody>

            <Row>
               <FormGroup>
              <Label for="exampleFile">Cargar Archivo</Label>
              <Input id="exampleFile" name="file" type="file" />
            </FormGroup>
            </Row>
             <Link href={'/ui/registro'}><Button color="primary">Ingresar Datos de Sitios de Practica</Button></Link>
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
                  Ingresar sitios de Practica
                  </FormText>&nbsp;
                  <input placeholder='Buscar' className='form-control' ></input>
             
                <Button className="btn btn-success btn-sm" color="danger">Eliminar</Button>
                </Form>
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
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Curitas del saber
                </Accordion.Header>
                <Accordion.Body>
                  
                  <Button variant="primary" onClick={handleShow1}>
                    Agregar lista de estudiante
                  </Button>

                  <Modal show={show1} onHide={handleClose1}>
                    <Modal.Header closeButton>
                      <Modal.Title>Lista estudiantes</Modal.Title>
                    </Modal.Header>
                    <div>
                    <input placeholder='Buscar'></input>
                    </div>
                    <Modal.Body>
                        <div className="topping">
                          <input type="checkbox" id="topping" name="topping" value="Paneer" />Andrea Camacho
                        </div>
                        <div className="topping">
                          <input type="checkbox" id="topping" name="topping" value="Paneer" />Juan Andres Jaramillo
                        </div>
                        <div className="topping">
                          <input type="checkbox" id="topping" name="topping" value="Paneer" />Camila Perez
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose1}>
                        Cancelar
                      </Button>
                      <Button variant="primary" onClick={handleClose1}>
                        Guardar
                      </Button>
                    </Modal.Footer>
                  </Modal>



                  <li>Nombre apellido: Alfredo Camacho</li>
                  <li>Telefono: 3001345765</li>
                  <li>Correo: Curitas@IPS.com</li>
                  <li>Cargo: Coordinador</li>
                  <li>Dirección: Calle 13 # 23 -51</li>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </FormGroup>
        </CardBody>
        <Col xs="0" md="0">
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-3*/}
          {/* --------------------------------------------------------------------------------*/}
          <Card>
            <CardTitle tag="h0" className="border-bottom p-0 mb-0">
            </CardTitle>
            <CardBody className="">
              <div className="button-group">
                <Link href={'/ui/infohospital'}>
                  <Button style={{ backgroundColor: color, color: "black" }} size="lg">Ver informes</Button>
                </Link>
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
