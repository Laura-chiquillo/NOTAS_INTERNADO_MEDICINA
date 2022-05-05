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
import Link from 'next/link';
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
            <Button color="primary">Guardar</Button>
            <Link href={'/ui/registroEstudiantes'}><Button color="primary">Ingresar Datos Estudiantes</Button></Link>
          </CardBody>
        </Card>

      </Col>
    </Row>
  );
};
About.layout = "MenuLayout"
export default About;
