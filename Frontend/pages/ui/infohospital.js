
import React, { useState } from 'react';
import { Button, ButtonGroup, Card, FormText, FormGroup, Label, Input, CardBody, CardTitle, Row, Col } from 'reactstrap';
import Link from 'next/link';
import { useColors } from '../../hooks/useColor';
import Accordion from 'react-bootstrap/Accordion';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'reactstrap';

const InfoHospital = () => {

  const { color } = useColors();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      {/* --------------------------------------------------------------------------------*/}
      {/* Start Inner Div*/}
      {/* --------------------------------------------------------------------------------*/}
      {/* --------------------------------------------------------------------------------*/}
      {/* Row*/}
      {/* --------------------------------------------------------------------------------*/}
      <Row>

        <CardBody>
          <FormGroup>
            <Label for="exampleText"></Label>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Curitas del saber
                </Accordion.Header>
                <Accordion.Body>
                  <li>1. Ricardo Arjona <br></br> 
                  Nota: No reportada <br></br>
                  Fecha inicial rotación: <br></br>
                  Fecha final rotación: <br></br>
                  Rotacion:  <br></br>
                  Semestre actual:  <br></br>
                  </li>
                </Accordion.Body>
                <Accordion.Body>
                  <li>2. Jenifer Acosta <br></br>
                   Nota: Reportada<br></br>
                  Fecha inicial rotación: <br></br>
                  Fecha final rotación: <br></br>
                  Rotacion:  <br></br>
                  Semestre actual:  <br></br>
                 </li>
                </Accordion.Body>
                <Accordion.Body>
                  <li>3. Juan Andres Camacho <br></br>
                   Nota: No Reportada<br></br>
                  Fecha inicial rotación: <br></br>
                  Fecha final rotación: <br></br>
                  Rotacion:  <br></br>
                  Semestre actual:  <br></br>
                 </li>
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
              <Link href={'/ui/hospitales'}>
                  <Button style={{ backgroundColor: color, color: "black" }} size="lg">
                      Atras
                      </Button>
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
InfoHospital.layout = "MenuLayout"
export default InfoHospital;