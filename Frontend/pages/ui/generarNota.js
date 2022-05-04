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
const generarNota = () => {

  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            Generar Nota
          </CardTitle>
          <CardBody>
            <Form>
              <FormGroup>
                <Label>Nombres estudiante</Label>
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
                <Label>Apellidos estudiante</Label>
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
                <Label>Nombre del hospital</Label>
                <Input
                  type="text"
                  id='Semestre'
                  name='Semestre'
                />
              </FormGroup>

              <FormGroup>
                <Label>Rotacion</Label>
                <Input id="exampleSelect" name="select" type="select">
                  <option>Rotacion</option>
                  <option>Cirugia general</option>
                  <option>Pediatria</option>
                  <option>Ginecologia</option>
                </Input>
              </FormGroup>
              
              <FormGroup>
                <Label>Historia clinica (0-100 pts)</Label>
                <Input
                  type="number"
                  id='historia'
                  name='historia'
                />
              </FormGroup>

              <FormGroup>
                <Label>Responsabilidad (0-100 pts)</Label>
                <Input
                  type="number"
                  id='responsabilidad'
                  name='responsabilidad'
                />
              </FormGroup>

              <FormGroup>
                <Label>Practica (0-200 pts)</Label>
                <Input
                  type="number"
                  id='practica'
                  name='practica'
                />
              </FormGroup>

              <FormGroup>
                <Label>Conocimientos y actualizaciones cientificas (0-100 pts)</Label>
                <Input
                  type="number"
                  id='cac'
                  name='cac'
                />
              </FormGroup>

              <FormGroup>
                <Label>Calificacion (0-500 pts)</Label>
                <Input
                  type="number"
                  id='calificacion'
                  name='calificacion'
                />
              </FormGroup>

              <FormGroup>
                <Label>Observaciones</Label>
                <Input
                  type="text"
                  id='observaciones'
                  name='observaciones'
                />
              </FormGroup>

              
              <br></br><Label>Evaluador 1</Label><br></br>
              <FormGroup>
                  <Label>Nombres</Label>
                  <div class="input-group">
                  <Input
                    type="text"
                    id='NombreE1-1'
                    name='nombreE1-1'
                  />
                  <span class="input-group-addon">-</span>
                  <Input
                    type="text"
                    id='NombreE1-2'
                    name='nombreE1-2'
                  />
                  </div>
              </FormGroup>
                
              <FormGroup>
                <Label>Apellidos</Label>
                <div class="input-group">
                  <Input
                    type="text"
                    id='ApellidoE1-1'
                    name='apellidoE1-1'
                  />
                  <span class="input-group-addon">-</span>
                  <Input
                    type="text"
                    id='ApellidoE1-2'
                    name='ApellidoE1-2'
                  />
                </div>
              </FormGroup>

              <br></br><Label>Evaluador 2</Label><br></br>
              <FormGroup>
                  <Label>Nombres</Label>
                  <div class="input-group">
                  <Input
                    type="text"
                    id='NombreE2-1'
                    name='nombreE2-1'
                  />
                  <span class="input-group-addon">-</span>
                  <Input
                    type="text"
                    id='NombreE2-2'
                    name='nombreE2-2'
                  />
                  </div>
              </FormGroup>
                
              <FormGroup>
                <Label>Apellidos</Label>
                <div class="input-group">
                  <Input
                    type="text"
                    id='ApellidoE2-1'
                    name='apellidoE2-1'
                  />
                  <span class="input-group-addon">-</span>
                  <Input
                    type="text"
                    id='ApellidoE2-2'
                    name='ApellidoE2-2'
                  />
                </div>
              </FormGroup>

              <Link href={'/ui/vistaHospitales'}><Button  color="primary">Guardar</Button></Link>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
};
generarNota.layout = "MenuLayout"
export default generarNota;
