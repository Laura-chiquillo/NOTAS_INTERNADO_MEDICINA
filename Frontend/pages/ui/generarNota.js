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
import { getApiMateria, getApiSubMateria, getApiCrearRotacion } from '../../api/notas'
import React, { useEffect, useState, useRef } from 'react';
import SignatureCanvas from "react-signature-canvas";

const generarNota = () => {

  /* Lista de materias */
  const [listMaterias, setListMaterias] = useState([]);
  useEffect(() => {
    getApiMateria()
      .then((Datos) => {
        setListMaterias(Datos)
      })
      .catch((Error) => {
        alert(Error.toString())
      })
  }, [])

  /* Lista de submaterias */
  const [listSubmaterias, setListSubmaterias] = useState([]);
  useEffect(() => {
    getApiSubMateria()
      .then((Datos) => {
        setListSubmaterias(Datos)
      })
      .catch((Error) => {
        alert(Error.toString())
      })
  }, [])

  /* Limpiar tablero de firma */
  const sigCanvas = useRef({});
  const limpiar = () => sigCanvas.current.clear()

  const sigCanvas2 = useRef({});
  const limpiar2 = () => sigCanvas2.current.clear()

  /* Crear rotacion */
  const [rotacion, setRotacion] = useState([])
  useEffect(() => {
    getApiCrearRotacion()
      .then((Datos) => {
        setRotacion(Datos)
      })
      .catch((Error) => {
        alert(Error.toString())
      })
  }, [])
  
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
                <Input id="exampleSelect" name="select" type="select">
                  {
                    listMaterias
                      .map((materia, index) => (
                        <option key={index} value="vacio">{materia?.descripcion}</option>
                      ))
                  }
                </Input>
                <Label>Rotacion</Label>
                <Input id="exampleSelect" name="select" type="select">
                  {
                    listSubmaterias
                      .map((submateria, index) => (
                        <option key={index} value="vacio">{submateria?.descripcion}</option>
                      ))
                  }
                </Input>

              </FormGroup>
              <FormGroup>
                <Row>
                  <Col><Label>Fecha de inicio</Label></Col>
                  <Col><Label>Fecha de fin</Label></Col>
                </Row>
                <div className="input-group">
                  <Input
                    type="Date"
                    id='evaluador1'
                    name='evaluador1'
                  />
                  <span className="input-group-addon">-</span>
                  <Input
                    type="Date"
                    id='firma1'
                    name='firma1'
                  />
                </div>
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
                {/* Firma */}
                <Label>Firma</Label>
                <SignatureCanvas
                  ref={sigCanvas}
                  canvasProps={{
                    style: {
                      width: "100%", height: 50,
                      "border": "0.5px solid #000000"
                    }
                  }} />
                <Button onClick={limpiar}>Limpiar</Button>
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
              <FormGroup>
                {/* Firma */}
                <Label>Firma</Label>
                <SignatureCanvas
                  ref={sigCanvas2}
                  canvasProps={{
                    style: {
                      width: "100%", height: 50,
                      "border": "0.5px solid #000000"
                    }
                  }} />
                <Button onClick={limpiar2}>Limpiar</Button>
              </FormGroup>
              <Link href={'/ui/vistaHospitales'}><Button color="primary">Guardar</Button></Link>
              <Link href={'/ui/vistaHospitales'}><Button color="primary">Atras</Button></Link>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
};
generarNota.layout = "MenuLayoutH"
export default generarNota;