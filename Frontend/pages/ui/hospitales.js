import React, { useState } from 'react';
import { Button, ButtonGroup, Card,  FormText,FormGroup, Label,Input, CardBody, CardTitle, Row, Col } from 'reactstrap';
import Link from 'next/link';


 
const Buttons = () => {
  const [cSelected, setCSelected] = useState([]);
  const [rSelected, setRSelected] = useState(null);

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
            <Link href={'/ui/estudiantes'}><Button className="btn" color="primary">
                  Lista estudiantes
                </Button></Link>
                <Link href={'/ui/hospitales'}><Button className="btn" color="primary">
                  Lista hospitales
                </Button></Link>
            <CardBody className="">
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
                <textarea rows="13.5" cols="165" ></textarea>
              </FormGroup>
       
        <Col xs="12" md="6">
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-3*/}
          {/* --------------------------------------------------------------------------------*/}
          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            </CardTitle>
            <CardBody className="">
              <div className="button-group">
                <Button className="btn" color="primary" size="lg">
                  Ver informes 
                </Button>
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

export default Buttons;
