import React, { useState } from 'react';
import { Button, Card, FormGroup, Label, CardBody, CardTitle, Row, Col } from 'reactstrap';
import Link from 'next/link';
import { useColors } from '../../hooks/useColor';
import Accordion from 'react-bootstrap/Accordion';


const Lista = () => {

  const { color } = useColors();

  return (
    <div>
      <Row>
        <Col xs="12" md="15">
          <Card>
            <CardTitle tag="h6" className="border-bottom p-0 mb-0">

            </CardTitle>
            <CardBody className="">
              <div className="button-group">
              <input placeholder='Buscar' className='form-control'></input>
              </div>
            </CardBody>
          </Card>
        </Col>
        <CardBody>
          <FormGroup>
            <Label for="exampleText"></Label>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Jenifer Acosta
                </Accordion.Header>
                <Accordion.Body>
                  <li>Documento: 10000000</li>
                  <li>semestre actual: 11</li>
                  <li>Hospital actual: curitas del saber</li>
                  <li>fecha inicio actual: 21/02/22</li>
                  <li>Fecha finalización actual: 21/04/2022</li>
                  <li>Nota: Registrada</li>
                  <button>Generar Nota</button>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Juan Andres Perez</Accordion.Header>
                <Accordion.Body>
                  <li>Documento: 10000000</li>
                  <li>semestre actual: 12</li>
                  <li>Hospital actual: curitas del saber</li>
                  <li>fecha inicio actual: 21/02/22</li>
                  <li>Fecha finalización actual: 21/04/2022</li>
                  <li>Nota: Registrada</li>
                  <button>Generar Nota</button>
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
                
                  <Button style={{ backgroundColor: color, color: "black" }} size="lg">
                      Descargar Lista
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

export default Lista;
