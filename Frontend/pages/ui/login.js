
import {
    Card,
    Row,
    Col,
    CardTitle,
    CardBody,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormText,
  } from 'reactstrap';
 import Link from 'next/link';

  const Forms = () => {
    return (
      <div >   
      {/* --------------------------------------------------------------------------------*/}
      {/* Start Inner Div*/}
      {/* --------------------------------------------------------------------------------*/}
      {/* --------------------------------------------------------------------------------*/}
      {/* Row*/}
      {/* --------------------------------------------------------------------------------*/}
      <Row>
      <Col xs="0" md="5">
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-1*/}
          {/* --------------------------------------------------------------------------------*/}

          <Card>
            <CardTitle tag="h6" className="border-bottom p-0 mb-0">
            </CardTitle>
            <CardBody>
              <Form>
                <FormGroup>
                  <Label for="exampleEmail">Correo Electronico</Label>
                  <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="Introducir correo"
                    type="email"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Contraseña</Label>
                  <Input
                    id="examplePassword"
                    name="password"
                    placeholder="Introducir contraseña"
                    type="password"
                  />
                </FormGroup>          
                <Link href={'/ui/estudiantes'}><Button>Ingresar</Button></Link>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
           
           </div>
    );
  };
  
  
  export default Forms;
  