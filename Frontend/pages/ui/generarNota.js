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
          <h1>Generar Nota</h1>
            
          <CardBody>
            <Form>

            <FormGroup>
                  <img src="/../src/assets/images/users/user3.jpg"
                    className="rounded-circle"
                    width="100"
                    height="100"/>
              </FormGroup>
              
              <FormGroup>
                <Label>Nombres: Jennifer Acosta</Label><br></br>
                <Label>Documento: 10000000</Label><br></br>
                <Label>Semestre actual: 11</Label><br></br>
                <Label>Fecha de inicio actual: 21/02/2022</Label><br></br>
                <Label>Fecha de finalizacion actual: 21/04/2022</Label><br></br>
              </FormGroup>

              <FormGroup>
                <table class="table">
                  <thead>
                    <tr>
                      <th>Practica clinica</th>
                      <th>Pediatria Practica</th>
                      <th>Medicina interna</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr ng-repeat="item in lista">
                      <td contentEditable="true">
                        0,0
                      </td>
                      <td contentEditable="true">
                        0,0
                      </td>
                      <td contentEditable="true">
                        0,0
                      </td>
                    </tr>
                  </tbody>
                  
                </table>
              </FormGroup>
                

              <Link href={'/ui/vistaHospitales'}><Button  color="primary">Guardar</Button></Link>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
};
generarNota.layout = "MenuLayoutH"
export default generarNota;
