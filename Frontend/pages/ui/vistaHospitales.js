import React, { useState } from 'react';
import { Button, ButtonGroup, Card, FormText, FormGroup, Label, Input, CardBody, CardTitle, Row, Col } from 'reactstrap';
import Link from 'next/link';
import { useColors } from '../../hooks/useColor';
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
              <h1>
                Lista de Estudiantes
              </h1>&nbsp;
              <div className="button-group">

                <input placeholder='Buscar'></input>
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
              <li>Nota: Subida</li>
              <Link href={'/ui/generarNota'}>
                <Button className="btnReal" color="secondary" size="lg">
                  Generar nota
                </Button>
                </Link>
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
              <li>Nota: Subida</li>
              <Link href={'/ui/generarNota'}>
                <Button className="btnReal" color="secondary" size="lg">
                  Generar nota
                </Button>
                </Link>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Col xs="0" md="0">
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-3*/}
          {/* --------------------------------------------------------------------------------*/}
          <Card>
            <CardTitle tag="h0" className="border-bottom p-0 mb-0">
            </CardTitle>
            <CardBody className="">
              <div className="button-group">

                <Button className="btnDesc" color="secondary" size="lg">
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
Buttons.layout = "MenuLayoutH"
export default Buttons;
