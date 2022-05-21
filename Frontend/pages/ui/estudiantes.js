import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Card, FormText, FormGroup, Label, Input, CardBody, CardTitle, Row, Col, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import Link from 'next/link';
import { useColors } from '../../hooks/useColor';
import Accordion from 'react-bootstrap/Accordion';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import { getApiEstudiantes, editApiEstudiante, agregarApiEstudiante } from '../../api/estudiantes'
import * as XLSX from "xlsx";

const Buttons = () => {

  /** Numrto de items por pagina */
  const [itemsPagina, setItemsPagina] = useState(5);

  /** Variable que determina la cantidad de paginas de la paginacion */
  const [nPaginacion, setNPaginacion] = useState(0);

  /** Juan David Alberto Quintero Gaona ama mas a Laura Daniela Chiquillo Leon que
   * Laura Daniela Chiquillo Leon ama mas a Juan David Alberto Quintero Gaona
   * Ademas esta variable determina el numero de pagina que se esta visualizando
   */
  
  const [paginaActual, setPaginaActual] = useState(1);

  /* crear la variable que contiene la lista de los estudiantes */
  /* se inicia con una lista vacia*/
  const [listEstudiantes, setListaEstudiantes] = useState([])

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
    getApiEstudiantes()
    .then((Datos) => {
      setListaEstudiantes(Datos)

    })
    .catch((Error) => {
      alert(Error.toString())
    })
  }, [])

  /* editar estudiante */
  const [estudianteSeleccionado, setEstudianteSeleccionado] = useState({})

  const editarEstudiante = () => {
    editApiEstudiante(estudianteSeleccionado).then((est) => {
      /* cambiar el estudiante */
      const nuevaLista = listEstudiantes.map((i) => i.idEstudiante == est.idEstudiante? est:i)
      setListaEstudiantes(nuevaLista)
      close()
    })
  }
  
  const actualizarEditEstudiante = (e) => {
    setEstudianteSeleccionado(
      {...estudianteSeleccionado, 
      [e.target.name]: e.target.value}
    )    
  }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  /* para la ventana de editar estudiante */ 
  const [shows, setShows] = useState(false);
  const close = () => setShows(false);
  const handShow = (est) => {
    setEstudianteSeleccionado(est)
    setShows(true)
  };

  /* para la ventana de editar notas */
  const [show2, setShows2] = useState(false);
  const close2 = () => setShows2(false);
  const handShow2 = () => setShows2(true);
  const { color } = useColors();

  /*Para subir un archivo excel y pasar a JSON */
  const [jsonExcel, setJsonExcel] = useState(0)

  const readExcel = (file) => {

    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;

        const wb = XLSX.read(bufferArray, { type: "buffer" });
        /*La posición 0 es la primera hoja del excel*/
        const wsname = wb.SheetNames[0];

        const ws = wb.Sheets[wsname];

        const data = XLSX.utils.sheet_to_json(ws);

        resolve(data);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const guardarDatos = () => {
    readExcel(jsonExcel).then((d) => {
      const estud = {};
      const subirDatos = d.map((n) => {
        console.log(n)
        estud.documento = n["Documento"],
        estud.primerNombre = n["PrimerNombre"],
        estud.segundoNombre = n["Segundo Nombre"]  || " ",
        estud.primerApellido = n["Primer Apellido"],
        estud.segundoApellido = n["Segundo Apellido"]  || " ",
        estud.semestreE = n["Semestre"],
        estud.correo = n["Correo"],
        estud.telefono = n["Telefono"],
        agregarApiEstudiante(estud)
        handleClose()
      });
    });

  };

  /* Organizar por filtros */
  
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
                <Form className="d-flex">

                  <Button className="btn" onClick={handleShow} style={{ backgroundColor: color, color: "black" }} >
                    +
                  </Button>
                  <Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Header closeButton>
                      <Modal.Title>Agregar Estudiantes</Modal.Title>
                    </Modal.Header>
                    <Card>
                      <CardBody>

                        <Row>
                          <FormGroup>
                            <Label for="exampleFile">Cargar Archivo</Label>
                            <Input id="exampleFile" name="file" type="file" onChange={(e) => {
          setJsonExcel(e.target.files[0]) 
        }} />
                          </FormGroup>
                        </Row>
                        <Link href={'/ui/registroEstudiantes'}><Button color="primary">Ingresar Datos Estudiantes</Button></Link>
                      </CardBody>
                    </Card>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                      </Button>
                      <Button variant="primary" onClick={guardarDatos} >
                        Guardar
                      </Button>
                    </Modal.Footer>
                  </Modal>
                  <FormText>
                    Agregar estudiantes
                  </FormText>&nbsp;
                  <input placeholder='Buscar' className='form-control'></input>
                </Form>
                <FormGroup>
                  <Label for="exampleSelect"></Label>
                  <Input id="exampleSelect" name="select" type="select">

                    <option>Ordenar por</option>
                    <option>Nombre de la  A-Z</option>
                    <option>Nombre de la Z-A</option>
                    <option>Apellidos de la A-Z</option>
                    <option>Apellidos de la Z-A</option>
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
              <Col md={11} xs={10}>
                {/* Mostrar estudiantes */}
                <Accordion>
                  {listEstudiantes
                  .filter( (est, i) => i >= (paginaActual - 1) * itemsPagina && i < paginaActual * itemsPagina)
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
                          </Col>
                          <Col>
                            {/*  Notas */}
                            <Row>
                              <Col>
                                <Accordion>
                                  <Accordion.Item eventKey="0">
                                    <Accordion.Header>
                                      {estudiante.idAsignatura}
                                    </Accordion.Header>
                                    <Accordion.Body>
                                      <li>Pediatria: 4.8</li>
                                    </Accordion.Body>
                                  </Accordion.Item>
                                </Accordion>
                              </Col>
                              <Col className="p-1" md={3}>
                                <ButtonGroup aria-label="Basic example">

                                  <Button style={{ backgroundColor: color, color: "black" }} onClick={handShow2}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                                      <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                                    </svg>
                                  </Button>

                                  <Modal
                                    show={show2}
                                    onHide={close2}
                                    backdrop="static"
                                    keyboard={false}
                                  >
                                    <Modal.Header closeButton>
                                      <Modal.Title>Editar Nota</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                      <Form>
                                        <FormGroup>
                                          <Label>Nota</Label>
                                          <Input
                                            type="text"
                                            id='IPS'
                                            name='ips'
                                          />
                                        </FormGroup>
                                      </Form>
                                    </Modal.Body>
                                    <Modal.Footer>
                                      <Button variant="secondary" onClick={close2}>
                                        Cancelar
                                      </Button>
                                      <Button variant="primary">
                                        Guardar
                                      </Button>
                                    </Modal.Footer>
                                  </Modal>

                                  <Button className="btn" onClick={handleShow} style={{ backgroundColor: color, color: "black" }} >
                                    +
                                  </Button>
                                </ButtonGroup>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Accordion.Body>
                    </Accordion.Item>
                  ))}
                  <Row>
                    <Pagination>
                      <PaginationItem>
                        <PaginationLink first onClick={primeraPaginacion} style={{ backgroundColor: "rgb(242, 247, 248)", color: color }}/>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink previous onClick={anteriorPaginacion} style={{ backgroundColor: "rgb(242, 247, 248)", color: color }} />
                      </PaginationItem>

                      <PaginationItem>
                        <PaginationLink next onClick={siguientePaginacion} style={{ backgroundColor: "rgb(242, 247, 248)", color: color }} />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink last onClick={ultimaPaginacion}  style={{ backgroundColor: "rgb(242, 247, 248)", color: color }}/>
                      </PaginationItem>
                      <PaginationItem></PaginationItem>
                    </Pagination>
                  </Row>
                </Accordion>
              </Col>

              <Col className="p-1" xs={1}>
                {listEstudiantes
                .filter( (est, i) => i >= (paginaActual - 1) * itemsPagina && i < paginaActual * itemsPagina)
                .map((estudiante, indice) => (
                  <ButtonGroup className='my-2' aria-label="Basic example" key={indice}>

                    <Button style={{ backgroundColor: color, color: "black" }} onClick={() => handShow(estudiante) }>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                      </svg>
                    </Button>

                    <Button style={{ backgroundColor: color, color: "black" }}>
                      <input type="checkbox"></input>
                    </Button>
                  </ButtonGroup>
                ))}

                {/* editar estudiante */}
                <Modal
                  show={shows}
                  onHide={close}
                  backdrop="static"
                  keyboard={false}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Editar estudiante</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    
                    {/* formulario */}
                    <Form onChange={actualizarEditEstudiante}>
                      <FormGroup>
                        <Label>Cédula de ciudadanía</Label>
                        <Input defaultValue={estudianteSeleccionado?.documento}
                          type="text"
                          name='documento'
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label>Nombres</Label>
                        <div className="input-group">
                          <Input defaultValue={estudianteSeleccionado?.primerNombre}
                            type="text"
                            name='primerNombre'
                          />
                          <span className="input-group-addon">-</span>
                          <Input defaultValue={estudianteSeleccionado?.segundoNombre}
                            type="text"
                            name='segundoNombre'
                          />
                        </div>
                      </FormGroup>
                      <FormGroup>
                        <Label>Apellidos</Label>
                        <div className="input-group">
                          <Input defaultValue={estudianteSeleccionado?.primerApellido}
                            type="text"
                            name='primerApellido'
                          />
                          <span className="input-group-addon">-</span>
                          <Input defaultValue={estudianteSeleccionado?.segundoApellido}
                            type="text"
                            name='segundoApellido'
                          />
                        </div>
                      </FormGroup>
                      <FormGroup>
                        <Label>Teléfono</Label>
                        <Input defaultValue={estudianteSeleccionado?.telefono}
                          name="telefono"
                          type="number"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="eEmail">Correo</Label>
                        <Input defaultValue={estudianteSeleccionado?.correo}
                          name="correo"
                          type="email"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label>Semestre</Label>
                        <Input defaultValue={estudianteSeleccionado?.semestreE}
                          type="text"
                          name='semestreE'
                        />
                      </FormGroup>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={close}>
                      Cancelar
                    </Button>
                    <Button onClick={editarEstudiante}  variant="primary">
                      Guardar
                    </Button>
                  </Modal.Footer>
                </Modal>



              </Col>
            </Row>
          </FormGroup>
        </CardBody>

        <Col xs="0" md="0">
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-3*/}
          {/* --------------------------------------------------------------------------------*/}
          <Card>
            <CardTitle tag="h1" className="border-bottom p-0 mb-0">
            </CardTitle>
            <CardBody className="">
              <div className="button-group">
                <Link href={'/ui/ListaEstudiantes'}>
                  <Button style={{ backgroundColor: color, color: "black" }} size="lg">Ver informes</Button>
                </Link>
                <Button className="btn" color="secondary" size="lg">
                  Descargar lista
                </Button>
              </div>
            </CardBody>
          </Card>
        </Col>
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
Buttons.layout = "MenuLayout"
export default Buttons;
