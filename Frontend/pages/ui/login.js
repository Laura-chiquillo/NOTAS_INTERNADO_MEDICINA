
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
    
  } from 'reactstrap';
 import Link from 'next/link';

  const Forms = () => {
    return (
      <div >
      
      
      <Row className="justify-content-md-center">
      <Col xs="0" md="5">
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-1*/}
          {/* --------------------------------------------------------------------------------*/}

          <Card>
            
            <CardBody>
              <Form>
                <FormGroup>
                  <Label for="exampleEmail">Correo Electrónico</Label>
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
                <Link href={'/ui/vistaHospitales'}><Button>Ingresar como hospital (boton temporal xd)</Button></Link>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
       
      </div>
      
          
    );
  };
  
  
  export default Forms;
  