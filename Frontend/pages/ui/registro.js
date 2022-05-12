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
import { useColors } from '../../hooks/useColor';

const Registro = () => {
  const { color } = useColors();

  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            Registrar hospital
          </CardTitle>
          <CardBody>
            <Form>
              <FormGroup>
                <Label>IPS</Label>
                <Input
                  type="text"
                  id='IPS'
                  name='ips'
                />
              </FormGroup>
              <FormGroup>
                <Label>Nombres</Label>
                <div class="input-group">
                  <Input
                    type="text"
                    id='Nombre1'
                    name='nombre1'
                  />
                  <span class="input-group-addon">-</span>
                  <Input
                    type="text"
                    id='Nombre2'
                    name='nombre2'
                  />
                </div>
              </FormGroup>
              <FormGroup>
                <Label>Apellidos</Label>
                <div class="input-group">
                  <Input
                    type="text"
                    id='Apellido1'
                    name='apellido1'
                  />
                  <span class="input-group-addon">-</span>
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
                <Label>Cargo</Label>
                <Input
                  type="text"
                  id='Cargo'
                  name='Cargo'
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
              <Link href={'/ui/hospitales'}>
                <Button style={{backgroundColor: color, color:"black"}} >Guardar</Button>
                </Link>
                <Link href={'/ui/hospitales'}>
                <Button style={{backgroundColor: color, color:"black"}} >Atras</Button>
                </Link>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
};
Registro.layout = "MenuLayout"
export default Registro;
