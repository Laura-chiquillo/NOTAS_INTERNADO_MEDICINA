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
const registroEstudiantes = () => {

  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            Registrar Estudiantes
          </CardTitle>
          <CardBody>
            <Form>
              <FormGroup>
                <Label>Cédula de ciudadanía</Label>
                <Input
                  type="text"
                  id='IPS'
                  name='ips'
                />
              </FormGroup>
              <FormGroup>
                <Label>Nombres</Label>
                <div className="input-group">
                  <Input
                    type="text"
                    id='Nombre1'
                    name='nombre1'
                  />
                  <span className="input-group-addon">-</span>
                  <Input
                    type="text"
                    id='Nombre2'
                    name='nombre2'
                  />
                </div>
              </FormGroup>
              <FormGroup>
                <Label>Apellidos</Label>
                <div className="input-group">
                  <Input
                    type="text"
                    id='Apellido1'
                    name='apellido1'
                  />
                  <span className="input-group-addon">-</span>
                  <Input
                    type="text"
                    id='Apellido2'
                    name='Apellido2'
                  />
                </div>
              </FormGroup>
              <FormGroup>
                <Label>Teléfono</Label>
                <Input
                  id="Telefono"
                  name="telefono"
                  type="number"
                />
              </FormGroup>
              <FormGroup>
                <Label for="eEmail">Correo</Label>
                <Input
                  id="Email"
                  name="email"
                  type="email"
                />
              </FormGroup>
              <FormGroup>
                <Label>Semestre</Label>
                <Input
                  type="text"
                  id='Semestre'
                  name='Semestre'
                />
              </FormGroup>
              <FormGroup>
                <Label>Dirección</Label>
                <Input
                  type="text"
                  id='direcion'
                  name='direccion'
                />
              </FormGroup>
              <Link href={'/ui/estudiantes'}><Button  color="primary">Guardar</Button></Link>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
};
registroEstudiantes.layout = "MenuLayout"
export default registroEstudiantes;
