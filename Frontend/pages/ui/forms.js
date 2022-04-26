import React from "react";
import {
  Row,
  Col,
  CardTitle,
  CardBody,
  Button,
  FormGroup,
  Label,
  Card,
  Input,
  FormText,
  CardSubtitle,
} from "reactstrap";

const About = () => {
  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardBody>

            <Row>
               <FormGroup>
              <Label for="exampleFile">Cargar Archivo</Label>
              <Input id="exampleFile" name="file" type="file" />
            </FormGroup>
            </Row>
            <Button className="btn" color="primary" >
               Ingresar Datos Estudiantes
               <Input type="checkbox" /> <Label check></Label>
               </Button>
          </CardBody>
        </Card>
        
      </Col>
    </Row>
  );
};

export default About;
