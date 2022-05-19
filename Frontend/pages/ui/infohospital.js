
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
                <table class="table">
                  <thead>
                    <tr>
                      <th>Estudiante</th>
                      <th>Nota</th>
                      <th>Fecha inicial rotacion</th>
                      <th>Fecha final rotacion</th>
                      <th>Rotacion</th>
                      <th>Semestre actual</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr ng-repeat="item in lista">
                        <td>
                        <Link href={'/ui/nota'}>Ricardo Arjona</Link>
                        
                        </td>
                        <td>
                        No reportada
                        </td>
                        <td>
                          ???
                        </td>
                        <td>
                          ???
                        </td>
                        <td>
                          ???
                        </td>
                        <td>
                          11
                        </td>
                    </tr>
                    <tr ng-repeat="item in lista">
                        <td >
                        <Link href={'/ui/nota'}>Jenifer Acosta</Link>
                        </td>
                        <td>
                        Reportada
                        </td>
                        <td>
                          ???
                        </td>
                        <td>
                          ???
                        </td>
                        <td>
                          ???
                        </td>
                        <td>
                          11
                        </td>
                    </tr>
                    <tr ng-repeat="item in lista">
                        <td >
                        <Link href={'/ui/nota'}>Juan Andres Camacho</Link>
                        </td>
                        <td>
                        No reportada
                        </td>
                        <td>
                          ???
                        </td>
                        <td>
                          ???
                        </td>
                        <td>
                          ???
                        </td>
                        <td>
                          11
                        </td>
                    </tr>
                  </tbody>
                  
                </table>
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