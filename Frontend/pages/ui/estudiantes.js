import React, { useState } from 'react';
import { Button, ButtonGroup,Form, Card,  FormText,FormGroup, Label,Input, CardBody, CardTitle, Row, Col } from 'reactstrap';
import Link from 'next/link';
import { useColors } from '../../hooks/useColor';
import Modal  from 'react-bootstrap/Modal';

 
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
              <Link href={'/ui/MenuNotas'}>
                <Button style={{backgroundColor: color, color:"black"}}  size="lg">Ver informes</Button>
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
