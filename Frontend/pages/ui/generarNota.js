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
            <h1>
              Ingresar nota estudiante
            </h1>
            <CardBody>
              <Form>

              <FormGroup>
                <Label>Nombres y apellidos: Jennifer Acosta</Label><br></br>
                <Label>Documento: 10000000</Label><br></br>
                <Label>Semestre actual: 11</Label><br></br>
                <Label>Fecha de inicio actual: 21/02/2022</Label><br></br>
                <Label>Fecha de finalizacion actual: 21/04/2022</Label><br></br>
                <Label>Asignatura</Label>
                <Input
                  id="Rotacion"
                  name="rotacion"
                  type="text"
                />
                <Label>Rotacion</Label>
                <Input
                  id="Rotacion"
                  name="rotacion"
                  type="text"
                />
                
              </FormGroup>

                <FormGroup>

                    <table class="table" border="2">
                      <thead>
                        <tr>
                          <th>*</th>
                          <th>*</th>
                          <th>Calificaciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr ng-repeat="item in lista">
                        <td border="2">I</td>
                          <td><b>Historia clinica</b><br></br>
                          Presentacion, calidad y evoluciones<br></br>
                          Justificacion de laboratorio con el diagnostico. epicrisis
                          </td>
                          <td contentEditable="true"></td>
                        </tr>

                        <tr ng-repeat="item in lista">
                        <td>II</td>
                          <td><b>Responsabilidad</b><br></br>
                          Asistencia, cumplimiento, colaboracion, trabajo en equipo.<br></br>
                          Trato con el paciente y familiares.
                          </td>
                          <td contentEditable="true"></td>
                          <th></th>
                        </tr>

                        <tr ng-repeat="item in lista">
                        <td>III</td>
                          <td><b>Practica</b><br></br>
                          Urgencias, consulta externa, hospitalizacion, cirugia, sala de partos y otras.
                          </td>
                          <td contentEditable="true"></td>
                          <th></th>
                        </tr>

                        <tr ng-repeat="item in lista">
                        <td>IV</td>
                          <td><b>Conocimientos y actualizaciones cientificas</b><br></br>
                          Seminarios, paneles, exposiciones, club de revistas, conferencias.<br></br>
                          Conocimientos teoricos.
                          </td>
                          <td contentEditable="true"></td>
                          <th></th>
                        </tr>

                        <tr ng-repeat="item in lista">
                        <td>V</td>
                          <td><b>Calificacion</b></td>
                          <td contentEditable="true"></td>
                          <th></th>
                        </tr>

                        <tr ng-repeat="item in lista">
                          <td>VI</td>
                          <td><b>Servicios por los cuales roto</b></td>
                          <td contentEditable="true"></td>
                          <th></th>
                        </tr>

                      </tbody>
                      
                    </table>
                    </FormGroup>


                    <FormGroup>
                      <Label>Observaciones:</Label>
                      <Input
                          type="text"
                          id='observaciones'
                          name='observaciones'
                        />
                    </FormGroup>

                    <FormGroup>
                      <Label>Evaluador 1</Label>
                      <div class="input-group">
                        <Input
                          type="text"
                          id='evaluador1'
                          name='evaluador1'
                        />
                        <span class="input-group-addon">-</span>
                        <Input
                          type="text"
                          id='firma1'
                          name='firma1'
                        />
                      </div>
                    </FormGroup>

                    <FormGroup>
                      <Label>Evaluador 2</Label>
                      <div class="input-group">
                        <Input
                          type="text"
                          id='evaluador2'
                          name='evaluador2'
                        />
                        <span class="input-group-addon">-</span>
                        <Input
                          type="text"
                          id='firma2'
                          name='firma2'
                        />
                      </div>
                    </FormGroup>

                <Link href={'/ui/vistaHospitales'}><Button  color="primary">Guardar</Button></Link>
                <Link href={'/ui/vistaHospitales'}><Button  color="primary">Atras</Button></Link>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  };
  generarNota.layout = "MenuLayoutH"
  export default generarNota;