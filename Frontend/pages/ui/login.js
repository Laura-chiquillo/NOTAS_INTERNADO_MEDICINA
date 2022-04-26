
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
  
  const Forms = () => {
    return (
      <Row> 
        <Col>
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-1*/}
          {/* --------------------------------------------------------------------------------*/}
          <Card>
            
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
                
                <Button onclick = './ui/forms.js'>Ingresar</Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  };
  
  export default Forms;
  