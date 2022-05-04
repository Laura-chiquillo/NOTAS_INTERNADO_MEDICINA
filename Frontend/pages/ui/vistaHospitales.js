import React, { useState } from 'react';
import { Button, ButtonGroup, Card,  FormText,FormGroup, Label,Input, CardBody, CardTitle, Row, Col } from 'reactstrap';
import Link from 'next/link';
import { useColors } from '../../hooks/useColor';


 
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
        <FormGroup>
                <Label for="exampleText"></Label>
                <textarea rows="12" cols="154" ></textarea>
              </FormGroup>
       
        <Col xs="0" md="0">
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-3*/}
          {/* --------------------------------------------------------------------------------*/}
          <Card>
            <CardTitle tag="h0" className="border-bottom p-0 mb-0">
            </CardTitle>
            <CardBody className="">
              <div className="button-group">

              <Link href={'/ui/ListaEstudiantes'}>
                <Button style={{backgroundColor: color, color:"black"}}  size="lg">
                    Ver informes
                </Button>
              </Link>

                <Button className="btnDesc" color="secondary" size="lg">
                 Descargar lista
                </Button>
              <Link href={'/ui/generarNota'}>
                <Button className="btnReal" color="secondary" size="lg">
                    Generar nota
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
Buttons.layout = "MenuLayout"
export default Buttons;
