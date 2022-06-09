import React, { useEffect, useState, useRef } from 'react';
import { Button, ButtonGroup, Card, FormText, FormGroup, Label, Input, CardBody, CardTitle, Row, Col, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { useColors } from '../../hooks/useColor';
import Accordion from 'react-bootstrap/Accordion';
import { Form } from 'react-bootstrap';
import { getApiEstudiantes, editApiEstudiante, crearApiEstudiante, getApiEstudiantesInst } from '../../api/estudiantes'
import Modal from 'react-bootstrap/Modal';
import SignatureCanvas from "react-signature-canvas";
import { getApiMateria, getApiSubMateria, getApiCrearRotacion } from '../../api/notas'
import { getApiInstituciones } from '../../api/instituciones'
import { getApiCoordinadorById } from '../../api/coordinador';

const Buttons = () => {


  /** Numrto de items por pagina */
  const [itemsPagina, setItemsPagina] = useState(5);

  /** Variable que determina la cantidad de paginas de la paginacion */
  const [nPaginacion, setNPaginacion] = useState(0);

  /** esta variable determina el numero de pagina que se esta visualizando
   */

  const [paginaActual, setPaginaActual] = useState(1);

  /* crear la variable que contiene la lista de los estudiantes */
  /* se inicia con una lista vacia*/
  const [listEstudiantes, setListaEstudiantes] = useState([])

  const [idInstitucion, setIdInstitucion] = useState("")

  /** Funciones para paginar */

  const primeraPaginacion = () => {
    setPaginaActual(1);
  }

  const ultimaPaginacion = () => {
    setPaginaActual(nPaginacion);
  }

  const anteriorPaginacion = () => {
    if (paginaActual > 1) {
      setPaginaActual(paginaActual - 1);
    }
  }

  const siguientePaginacion = () => {
    if (paginaActual < nPaginacion) {
      setPaginaActual(paginaActual + 1);
    }
  }

  /* Cada vez que listaEstuantes se actualize, recalculaara el numero de paginas */
  useEffect(() => {
    /** Se determina el numero de paginas a partir de laa cantidad
     * de estudiantes
     * Ejemplo: 20 estudiantes, se mostraran 5 por pagina
     * Resultado: 4 paginas -> 20/5 = 4
     */
    setNPaginacion(Math.ceil(listEstudiantes.length / itemsPagina))
  }, [listEstudiantes])

  /* Llamar la función de la api mostrar estudiante*/
  useEffect(() => {
    getApiEstudiantesInst()
      .then((Datos) => {
        setListaEstudiantes(Datos)

      })
      .catch((Error) => {
        alert(Error.toString())
      })
  }, [])

  /* para la ventana de editar estudiante */
  const [shows, setShows] = useState(false);
  const close = () => setShows(false);
  const { color } = useColors();

  /* Organizar por filtros */
  const nombreAscendente = (nom1, nom2) => {
    if (nom1.primerNombre > nom2.primerNombre) {
      return 1
    } return -1
  }
  const nombreDescendente = (nom1, nom2) => {
    if (nom1.primerNombre > nom2.primerNombre) {
      return -1
    } return 1
  }
  const apellidoAscendente = (apellido1, apellido2) => {
    if (apellido1.primerApellido > apellido2.primerApellido) {
      return 1
    } return -1
  }
  const apellidoDescendente = (apellido1, apellido2) => {
    if (apellido1.primerApellido > apellido2.primerApellido) {
      return -1
    } return 1
  }

  const noOrdenar = (a, b) => 1
  const [ordenarLista, setOrdenar] = useState(() => noOrdenar)
  /* seleccionar el orden */
  const seleccionarOrden = (e) => {
    if (e.target.value == "nombreAscendente") {
      setOrdenar(() => nombreAscendente)
    }
    if (e.target.value == "nombreDescendente") {
      setOrdenar(() => nombreDescendente)
    }
    if (e.target.value == "apellidoAscendente") {
      setOrdenar(() => apellidoAscendente)
    }
    if (e.target.value == "apellidoDescendente") {
      setOrdenar(() => apellidoDescendente)
    }
    if (e.target.value == "vacio") {
      setOrdenar(() => noOrdenar)
    }
  }

  /*Filtro de busqueda por nombre */
  const [busqueda, setBusqueda] = useState("");

  const handleChange = e => {
    setBusqueda(e.target.value);
  }

  /* 
  * -------------------------------------------------
  *Crear de rotación
  * -------------------------------------------------
  */
  const [nuevaRotacion, setNuevaRotacion] = useState({})
  
  const crearInforme = () => {
    /* validar datos vacios */
    if("institucion" in  nuevaRotacion==false==false){
      alert("Debe ingresar la institucion")
      return 
    }

    if("asignatura" in  nuevaRotacion==false){
      alert("Debe ingresar la asignatura")
      return 
    }
    if("subAsignatura" in  nuevaRotacion==false){
      alert("Debe ingresar la rotación")
      return 
    }
    if("notaHistoriaClinica" in  nuevaRotacion==false){
      alert("Debe ingresar la nota Historia Clinica")
      return 
    }
    if("notaResponsabilidad" in  nuevaRotacion==false){
      alert("Debe ingresar la nota Responsabilidad")
      return 
    }    
    if("notaPractica" in  nuevaRotacion==false){
      alert("Debe ingresar la nota Practica")
      return 
    } 
    if("notaCyAC" in  nuevaRotacion==false){
      alert("Debe ingresar la nota Conocimientos y actualizaciones cientificas")
      return 
    } 
    if("notaRotacion" in  nuevaRotacion==false){
      alert("Debe ingresar la nota Calificacion")
      return 
    }
    if("fechaInicio" in  nuevaRotacion==false){
      alert("Debe ingresar la fecha Inicio")
      return 
    }
    if("fechaCierre" in  nuevaRotacion==false){
      alert("Debe ingresar la fecha Cierre")
      return 
    }
    if("evaluador1" in  nuevaRotacion==false){
      alert("Debe ingresar el evaluador")
      return 
    }
    if("firma1" in  nuevaRotacion==false){
      alert("Debe ingresar la firma")
      return 
    }

    /* Guarda toda la información */
    getApiCrearRotacion({
      ...nuevaRotacion,
      firma1: window.btoa(getSigCanvasDataUrl()),
      firma2: window.btoa(getSigCanvas2DataUrl())
    }).then( () => {
      alert("Informe creado")
      handleClose4()
    })
  }

  /* Ventana nueva nota */
  const [show4, setShow4] = useState(false);
  const handleClose4 = () => {
    /* reinicie todo */
    setNuevaRotacion({})
    setShow4(false);
  }

  const handleShow4 = (idEstudiante) => {
    /* selecciona el estudiante y lo guarda dentro de rotación */
    setNuevaRotacion({estudiante:{idEstudiante}})
    setShow4(true);
  }

  /* Lista de institución */
  const [listInstituciones, setListInstituciones] = useState([]);
  useEffect(() => {
    getApiInstituciones()
      .then((Datos) => {
        setListInstituciones(Datos)

      })
      .catch((Error) => {
        alert(Error.toString())
      })
  }, [])

  
  useEffect(() => {
    if (typeof window !== "undefined") {
      const idCoordinador = localStorage.getItem("idUsuario")
      getApiCoordinadorById(idCoordinador)
      .then((Datos) => {
        setIdInstitucion(Datos.institucion.idInstitucion)

      })
      .catch((Error) => {
        alert(Error.toString())
      })
    }
    
  }, [])


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
  const sigCanvas =  useRef(null);
  const limpiar = () => sigCanvas.current.clear()

  const getSigCanvasDataUrl = () => {
    const canvas = sigCanvas.current;
    const image = canvas.toDataURL("image/png");
    return image;
  }

  const sigCanvas2 =  useRef(null);
  const limpiar2 = () => sigCanvas2.current.clear()
  
  const getSigCanvas2DataUrl = () => {
    const canvas2 = sigCanvas2.current;
    const image = canvas2.toDataURL("image/png");
    return image;
  }

  return (
    <div>
      {/* Start Inner Div*/}
      {/* --------------------------------------------------------------------------------*/}
      {/* --------------------------------------------------------------------------------*/}
      {/* Row*/}
      {/* --------------------------------------------------------------------------------*/}
      <Row>
        <Col xs="12" md="15">
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-1*/}
          {/* --------------------------------------------------------------------------------*/}
          <Card>
            <CardTitle tag="h6" className="border-bottom p-0 mb-0">

            </CardTitle>
            <CardBody className="">
              <div className="button-group">
                
                <h1>Lista de estudiantes</h1>

                <Form className="d-flex" onSubmit={(e) => e.preventDefault()}>
                  
                  {/* Buscar */}
                  <input placeholder='Buscar' className='form-control' value={busqueda} onChange={handleChange}></input>
                </Form>
                <FormGroup>
                  <Label for="exampleSelect"></Label>
                  <Input id="exampleSelect" name="select" type="select" onChange={seleccionarOrden}>

                    <option value="vacio">Ordenar por</option>
                    <option value="nombreAscendente">Nombre de la  A-Z</option>
                    <option value="nombreDescendente">Nombre de la Z-A</option>
                    <option value="apellidoAscendente">Apellidos de la A-Z</option>
                    <option value="apellidoDescendente">Apellidos de la Z-A</option>
                  </Input>
                </FormGroup>

              </div>
            </CardBody>
          </Card>
        </Col>

        <CardBody>
          <FormGroup>
            <Label for="exampleText"></Label>
            <Row>
                {/* Mostrar estudiantes */}
                <Accordion>
                  {listEstudiantes
                    .filter((elemento) => elemento.primerApellido.toString().toLowerCase().includes(busqueda.toLowerCase()))
                    .sort((a, b) => ordenarLista(a, b))
                    .filter((est, i) => i >= (paginaActual - 1) * itemsPagina && i < paginaActual * itemsPagina)
                    .map((estudiante, indice) => (
                      <Accordion.Item eventKey={indice} key={indice}>
                        <Accordion.Header>
                          {estudiante?.primerNombre + " "} {estudiante?.segundoNombre + " "} {estudiante?.primerApellido + " "}{estudiante?.segundoApellido + " "}
                        </Accordion.Header>
                        <Accordion.Body>
                          <Row>
                            <Col>
                              <ul>
                                <li> <img src={estudiante.foto}></img> </li>
                                <li>Documento: {estudiante.documento} </li>
                                <li>semestre actual: {estudiante.semestreE} </li>
                                <li>correo: {estudiante.correo} </li>
                                <li>telefono: {estudiante.telefono} </li>
                              </ul>
                              
                              {/* AGREGAR NUEVA NOTA */}
                              <Button className="btn" onClick={() => handleShow4(estudiante.idEstudiante)} style={{ backgroundColor: color, color: "black" }} >
                                      Generar Nota
                                    </Button>
                                    <Modal
                                      show={show4}
                                      size="lg"
                                      onHide={handleClose4}
                                      backdrop="static"
                                      keyboard={false}
                                    >
                                      <Modal.Header closeButton>
                                        <Modal.Title>Nueva nota </Modal.Title>
                                      </Modal.Header>
                                      <Modal.Body>
                                        <FormGroup>
                                          <table className="table" border="2">
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
                                                <td contentEditable="true" onInput={(e) => {
                                                    try {
                                                      let nota = e.currentTarget.textContent
                                                      let nota2 = parseFloat(nota)
                                                      setNuevaRotacion({
                                                        ...nuevaRotacion,
                                                        notaHistoriaClinica: nota2
                                                      })
                                                    } catch (error) {
                                                      console.log(error)
                                                    }
                                                }}></td>
                                              </tr>

                                              <tr ng-repeat="item in lista">
                                                <td>II</td>
                                                <td><b>Responsabilidad</b><br></br>
                                                  Asistencia, cumplimiento, colaboracion, trabajo en equipo.<br></br>
                                                  Trato con el paciente y familiares.
                                                </td>
                                                <td contentEditable="true" onInput={(e) => {
                                                    try {
                                                      let nota = e.currentTarget.textContent
                                                      let nota2 = parseFloat(nota)
                                                      setNuevaRotacion({
                                                        ...nuevaRotacion,
                                                        notaResponsabilidad: nota2
                                                      })
                                                    } catch (error) {
                                                      console.log(error)
                                                    }
                                                }}></td>
                                                <th></th>
                                              </tr>

                                              <tr ng-repeat="item in lista">
                                                <td>III</td>
                                                <td><b>Practica</b><br></br>
                                                  Urgencias, consulta externa, hospitalizacion, cirugia, sala de partos y otras.
                                                </td>
                                                <td contentEditable="true" onInput={(e) => {
                                                    try {
                                                      let nota = e.currentTarget.textContent
                                                      let nota2 = parseFloat(nota)
                                                      setNuevaRotacion({
                                                        ...nuevaRotacion,
                                                        notaPractica: nota2
                                                      })
                                                    } catch (error) {
                                                      console.log(error)
                                                    }
                                                }}></td>
                                                <th></th>
                                              </tr>

                                              <tr ng-repeat="item in lista">
                                                <td>IV</td>
                                                <td><b>Conocimientos y actualizaciones cientificas</b><br></br>
                                                  Seminarios, paneles, exposiciones, club de revistas, conferencias.<br></br>
                                                  Conocimientos teoricos.
                                                </td>
                                                <td contentEditable="true" onInput={(e) => {
                                                    try {
                                                      let nota = e.currentTarget.textContent
                                                      let nota2 = parseFloat(nota)
                                                      setNuevaRotacion({
                                                        ...nuevaRotacion,
                                                        notaCyAC: nota2
                                                      })
                                                    } catch (error) {
                                                      console.log(error)
                                                    }
                                                }}></td>
                                                <th></th>
                                              </tr>

                                              <tr ng-repeat="item in lista">
                                                <td>V</td>
                                                <td><b>Calificacion</b></td>
                                                <td contentEditable="true" onInput={(e) => {
                                                    try {
                                                      let nota = e.currentTarget.textContent
                                                      let nota2 = parseFloat(nota)
                                                      setNuevaRotacion({
                                                        ...nuevaRotacion,
                                                        notaRotacion: nota2
                                                      })
                                                    } catch (error) {
                                                      console.log(error)
                                                    }
                                                }}></td>
                                                <th></th>
                                              </tr>
                                              
                                            </tbody>

                                          </table>
                                        </FormGroup>
                                        <FormGroup>
                                          <Label for="exampleSelect">Institución</Label>

                                          <Input disabled="true" id="exampleSelect" name="select" type="select"  onChange={(e) => setNuevaRotacion({
                                            ...nuevaRotacion,
                                            institucion: {idInstitucion:e.target.value}
                                          })}>
                                            {
                                              listInstituciones
                                                .map((institucion, index) => (
                                                  <option key={index} value={institucion.idInstitucion} selected = {institucion.idInstitucion == idInstitucion}>{institucion?.nombre}</option>
                                                ))
                                            }
                                          </Input>

                                        </FormGroup>
                                        {/* MATERIAS */}
                                        <FormGroup>
                                          <Label for="exampleSelect">Asignatura</Label>
                                          <Input id="exampleSelect" name="select" type="select" onChange={(e) => setNuevaRotacion({
                                            ...nuevaRotacion,
                                            asignatura: {idAsignatura:e.target.value}
                                          })} >
                                            {
                                              listMaterias
                                                .map((materia, index) => (
                                                  <option key={index} value={materia.idAsignatura}>{materia?.descripcion}</option>
                                                ))
                                            }
                                          </Input>
                                        </FormGroup>

                                        {/* SUB ASIGNATURAS */}
                                        <FormGroup>
                                          <Label for="exampleSelect">Rotación</Label>
                                          <Input id="exampleSelect" name="select" type="select" onChange={(e) => setNuevaRotacion({
                                            ...nuevaRotacion,
                                            subAsignatura: {idSubAsignatura:e.target.value}
                                          })}>
                                            {
                                              listSubmaterias
                                                .map((submateria, index) => (
                                                  <option key={index} value={submateria.idSubAsignatura}>{submateria?.descripcion}</option>
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
                                              id='inicio'
                                              name='inicio'
                                              onChange={(e) => setNuevaRotacion({
                                                ...nuevaRotacion,
                                                fechaInicio:e.target.value
                                              })}
                                            />
                                            <span className="input-group-addon">-</span>
                                            <Input
                                              type="Date"
                                              id='fin'
                                              name='fin'
                                              onChange={(e) => setNuevaRotacion({
                                                ...nuevaRotacion,
                                                fechaCierre:e.target.value
                                              })}
                                            />
                                          </div>
                                        </FormGroup>
                                        <FormGroup>
                                          <Label>Observaciones</Label>
                                          <Input
                                            type="text"
                                            id='observaciones'
                                            name='observaciones'
                                            onChange={(e) => setNuevaRotacion({
                                              ...nuevaRotacion,
                                              observaciones:e.target.value
                                            })}
                                          />
                                        </FormGroup>

                                        <FormGroup>
                                          <Label>Evaluador 1</Label>
                                          <div className="input-group">
                                            <Input
                                              type="text"
                                              id='evaluador1'
                                              name='evaluador1'
                                              onChange={(e) => setNuevaRotacion({
                                                ...nuevaRotacion,
                                                evaluador1:e.target.value
                                              })}
                                            />
                                          </div>
                                        </FormGroup>
                                       
                                        <FormGroup>
                                            {/* Firma */}
                                            <Label>Firma</Label>
                                            <SignatureCanvas 
                                            ref={sigCanvas}
                                            canvasProps={{                                              
                                              style:{
                                                width: "100%", height:50,
                                                "border":"0.5px solid #000000"} }} />
                                            <Button onClick={limpiar}>Limpiar</Button>
                                        </FormGroup>

                                        <FormGroup>
                                          <Label>Evaluador 2</Label>
                                          <div className="input-group">
                                            <Input
                                              type="text"
                                              id='evaluador2'
                                              name='evaluador2'
                                              onChange={(e) => setNuevaRotacion({
                                                ...nuevaRotacion,
                                                evaluador2:e.target.value
                                              })}
                                            />
                                          </div>
                                        </FormGroup>
                                        <FormGroup>
                                            {/* Firma */}
                                            <Label>Firma</Label>
                                            <SignatureCanvas 
                                            ref={sigCanvas2}
                                            canvasProps={{                                              
                                              style:{
                                                width: "100%", height:50,
                                                "border":"0.5px solid #000000"} }} />
                                            <Button onClick={limpiar2}>Limpiar</Button>
                                        </FormGroup>
                                      </Modal.Body>
                                      <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose4}>
                                          Cancelar
                                        </Button>
                                        <Button onClick={crearInforme} variant="primary">
                                          Guardar
                                        </Button>
                                      </Modal.Footer>
                                    </Modal>


                            </Col>
                          </Row>
                        </Accordion.Body>
                      </Accordion.Item>
                    ))}
                  <Row>
                    <Pagination>
                      <PaginationItem>
                        <PaginationLink first onClick={primeraPaginacion} style={{ backgroundColor: "rgb(242, 247, 248)", color: color }} />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink previous onClick={anteriorPaginacion} style={{ backgroundColor: "rgb(242, 247, 248)", color: color }} />
                      </PaginationItem>

                      <PaginationItem>
                        <PaginationLink next onClick={siguientePaginacion} style={{ backgroundColor: "rgb(242, 247, 248)", color: color }} />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink last onClick={ultimaPaginacion} style={{ backgroundColor: "rgb(242, 247, 248)", color: color }} />
                      </PaginationItem>
                      <PaginationItem></PaginationItem>
                    </Pagination>
                  </Row>
                </Accordion>

              
            </Row>
          </FormGroup>
        </CardBody>

      </Row>
      {/* --------------------------------------------------------------------------------*/}
      {/* Row*/}
      {/* --------------------------------------------------------------------------------*/}

      {/* --------------------------------------------------------------------------------*/}
      {/* End Inner Div*/}
      {/* --------------------------------------------------------------------------------*/}
    </div>
  );
};
Buttons.layout = "MenuLayoutH"
export default Buttons;
