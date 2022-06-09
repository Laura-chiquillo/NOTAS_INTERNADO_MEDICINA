
import React, { useState, useEffect } from 'react';
import { Button, Card, FormGroup, Label, CardBody, CardTitle, Row, Col } from 'reactstrap';
import Link from 'next/link';
import { useColors } from '../../hooks/useColor';
import Accordion from 'react-bootstrap/Accordion';
import { getApiInstituciones } from '../../api/instituciones';

const InfoHospital = () => {

  const { color } = useColors();

  /* Lista Hospitales */
  const [instituciones, setInstituciones] = useState([]);

  useEffect(() => {
    getApiInstituciones().then(data => {
      setInstituciones(data);
      console.log(data);
    })
      .catch((Error) => {
        alert(Error.toString())
      })
  }, [])

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
              {
                instituciones.map((institucion, index) => (
                <Accordion.Item eventKey={index} key={index}>
                <Accordion.Header>
                  {institucion?.nombre}
                </Accordion.Header>
                <Accordion.Body>
                  <table class="table">
                    <thead>
                      <tr>
                        <th>Estudiante</th>
                        <th>Documento</th>
                        <th>teléfono</th>
                        <th>Correo</th>
                        <th>Semestre actual</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                        {
                          institucion.estudiantes?.map((estudiante) => (
                        <tr>
                          <td>
                              <p>{estudiante?.primerNombre + " "} {estudiante?.segundoNombre + " "} {estudiante?.primerApellido + " "}{estudiante?.segundoApellido + " "}</p>
                          </td>
                          <td>
                              <p>{estudiante?.documento}</p>
                          </td>
                          <td>
                              <p>{estudiante?.telefono}</p>
                          </td>
                          <td>
                              <p>{estudiante?.correo}</p>
                          </td>
                          <td>
                              <p>{estudiante?.semestreE}</p>
                          </td>
                        </tr>
                          ))}
                    </tbody>

                  </table>
                </Accordion.Body>
              </Accordion.Item>
                ))
              }
              
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
                    Atrás
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