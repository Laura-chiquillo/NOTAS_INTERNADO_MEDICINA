
import React, { useState, useEffect } from 'react';
import { Button, ButtonGroup, Card, FormText, FormGroup, Label, Input, CardBody, CardTitle, Row, Col, Pagination, PaginationItem, PaginationLink, List } from 'reactstrap';
import Link from 'next/link';
import { useColors } from '../../hooks/useColor';
import { Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Accordion from 'react-bootstrap/Accordion';
import { getApiInstituciones, editApiInstitucion , eliminarApiInstitucion} from '../../api/instituciones';
import { editApiEstudiante, getApiEstudiantes} from '../../api/estudiantes'
import { ListItem } from '@material-ui/core';


const Buttons = () => {

  /* Agregar UN estudiante a la institucion */
  const agregarEstudianteInstitucion = (estudiante) => {
    setinstitucionSeleccionado ((prev)=>{ 
      console.log(prev.estudiantes)
      let listaEstudiantes = []
      if(prev.estudiantes != null){
        listaEstudiantes = [...prev.estudiantes]
      } 
        console.log(estudiante)
        listaEstudiantes.push(estudiante)
      
      return {
        ...prev, 
        estudiantes: listaEstudiantes.map((est)=>({idEstudiante:est.idEstudiante}))
      }

    })

  }

  /* Quitar UN estudiante de la institucion */
  const quitarEstudianteInstitucion =(estudiante) =>{
    setinstitucionSeleccionado((prev)=>{
      let listaEstudiantes = []
      if(prev.estudiantes != null){
        listaEstudiantes = [...prev.estudiantes]
      }
      return ({
        ...prev,
        estudiantes: listaEstudiantes.filter((est)=> est.idEstudiante !== estudiante.idEstudiante)
      })
    })
  }

  /* seleccionar estudiante para agregar */
  const agregarEstudianteSeleccionado = (event, estudiante) => {
    const isSelected = event.target.checked;
    if (isSelected) {   
      agregarEstudianteInstitucion(estudiante)
    } else {
      quitarEstudianteInstitucion(estudiante)
    }
  }

  /* crear la variable que contiene la lista de los estudiantes */
  /* se inicia con una lista vacia*/
  const [listEstudiantes, setListaEstudiantes] = useState([])

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

  /* mostrar lista */

  const [listaInstituciones, setListaInstituciones] = useState([])
  const [actualizarListaInstituciones, setActualizarListaInstituciones] = useState(false)
  
  useEffect(() => {
    getApiInstituciones().then((Datos) => setListaInstituciones(Datos)).catch((Error) => {
      alert(Error.toString())
    })
    /* se ejecuta cada vez que se elimine una institución */
  }, [actualizarListaInstituciones])

  /* editar institución */
  const [institucionSeleccionado, setinstitucionSeleccionado] = useState({})

  const editarinstitucion = () => {
    editApiInstitucion(institucionSeleccionado).then((inst) => {
      const nuevaLista = listaInstituciones.map((i) => i.idInstitucion == inst.idInstitucion ? inst : i)
      setListaInstituciones(nuevaLista)
      close()
    })
  }

  const actualizarInstitucion = (e) => {
    setinstitucionSeleccionado(
      {
        ...institucionSeleccionado,
        [e.target.name]: e.target.value
      }
    )
  }


  const [shows, setShows] = useState(false);
  const close = () => setShows(false);
  const handShow = (inst) => {
    setinstitucionSeleccionado(inst)
    setShows(true)
  };

  const { color } = useColors();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleAgregarEst = () => {
    editApiInstitucion(institucionSeleccionado).then(()=>{
      setShow1(false) 
      setinstitucionSeleccionado({...institucionSeleccionado,estudiantes:[]})
    })
  };

  const handleShow1 = (institucion) => {
    setinstitucionSeleccionado(institucion)
    setShow1(true)
  };

  /* Paginación */
  const [itemsPagina, setItemsPagina] = useState(5);
  const [nPaginacion, setNPaginacion] = useState(0);
  const [paginaActual, setPaginaActual] = useState(1);

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
  useEffect(() => {
    setNPaginacion(Math.ceil(listaInstituciones.length / itemsPagina))
  }, [listaInstituciones])

  /* Organizar por filtros */
  const nombreAscendente = (nom1, nom2) => {
    if (nom1.nombre > nom2.nombre) {
      return 1
    } return -1
  }
  const nombreDescendente = (nom1, nom2) => {
    if (nom1.nombre > nom2.nombre) {
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
    if (e.target.value == "vacio") {
      setOrdenar(() => noOrdenar)
    }
  }

  /*Filtro de busqueda por nombre */
  const [busqueda, setBusqueda] = useState("");

  const handleChange = e => {
    setBusqueda(e.target.value);
  }

  /*Filtro de busqueda estudiante */
  const [busquedaE, setBusquedaE] = useState("");

  const handleChangeE = e => {
    setBusquedaE(e.target.value);
  }
    /* Eliminar institución */
    const [eliminarInst, setEliminarInst] = useState([]);
    /* se ingresan los que se van a eliminar */
    const eliminarInstituciones = () => {
      eliminarInst.map((i) => {
        
        /* llama el back para eliminar la institución */
        eliminarApiInstitucion(i).then((inst) => {
          setEliminarInst(inst)
        })
      })
      /* vacia los seleccionados */
      setEliminarInst([])
      /* Fuerza la actuaización*/
      setActualizarListaInstituciones((!actualizarListaInstituciones))
    }
    /* seleccionar instituciones para eliminar */
    const agregarSeleccionado = (event, institucion) => {
      console.log(institucion) 
      const isSelected = event.target.checked;
      if (isSelected) {   
      setEliminarInst(eliminarInst.concat(institucion)
      )
      } else {
        setEliminarInst(eliminarInst.filter(i => i.idInstitucion !== institucion.idInstitucion))
      }    
    }


  return (
    <div>
      {/* --------------------------------------------------------------------------------*/}
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
                <Form className="d-flex" onSubmit={(e)=>  e.preventDefault()}>
                <Link href={'/ui/registro'}>
                  <Button className="btn" onClick={""} style={{ backgroundColor: color, color: "black" }}>
                    +
                  </Button> 
                  </Link>              
                  <FormText>
                    Ingresar sitios de Practica
                  </FormText>&nbsp;
                  {/*Buscar */}
                  <input placeholder='Buscar' className='form-control' value={busqueda} onChange={handleChange}></input>
                  {/* Eliminar */}
                  <Button className="btn btn-success btn-sm" color="danger" onClick={() => {
                    {/* ventana de aceptar o cancelar, && -> si es verdadero se ejecuta la función */}
                    confirm("¿Esta seguro de eliminar la(s) insitucion(es) seleccionada(s)?") && eliminarInstituciones()
                  }}>Eliminar</Button>
                </Form>
                <FormGroup>
                  <Label for="exampleSelect"></Label>
                  <Input id="exampleSelect" name="select" type="select" onChange={seleccionarOrden}>
                    <option value="vacio">Ordenar por</option>
                    <option value="nombreAscendente">Nombre de la  A-Z</option>
                    <option value="nombreDescendente">Nombre de la Z-A</option>
                  </Input>
                </FormGroup>

              </div>
            </CardBody>
          </Card>
        </Col>

        <CardBody>
          <FormGroup>
            <Label for="exampleText"></Label>
            {/* Lista */}
            <Row>
              <Col>
                <Accordion>
                  {listaInstituciones
                    .filter((elemento)=>elemento.nombre.toString().toLowerCase().includes(busqueda.toLowerCase()))
                    .sort((a, b) => ordenarLista(a, b))
                    .filter((est, i) => i >= (paginaActual - 1) * itemsPagina && i < paginaActual * itemsPagina)
                    .map((institucion, indice) => (
                      <Accordion.Item eventKey={indice} key={indice}>
                        <Accordion.Header>
                          {institucion?.nombre}
                        </Accordion.Header>
                        <Accordion.Body>

                          <Button variant="primary" onClick={()=>handleShow1(institucion)}>
                            Agregar lista de estudiante
                          </Button>
                          <Modal show={show1} onHide={handleClose1}>
                            <Modal.Header closeButton>
                              <Modal.Title>Lista estudiantes</Modal.Title>
                            </Modal.Header>
                            {/*Buscar */}
                              <input placeholder='Buscar' className='form-control' value={busquedaE} onChange={handleChangeE}></input>
                            <Modal.Body>

                                  {/* Mostrar estudiantes */}
                                  
                                    {listEstudiantes
                                      .filter((elemento)=>elemento.primerApellido.toString().toLowerCase().includes(busquedaE.toLowerCase()))
                                      .sort((a, b) => ordenarLista(a, b))
                                      .map((estudiante, indice) => (

                                        <ListItem eventKey={indice} key={indice}>

                                          <Button style={{ backgroundColor: color, color: "black" }}>
                                            <input type="checkbox" onChange={(event) => {agregarEstudianteSeleccionado(event, estudiante)}} ></input>
                                          </Button>
                                          
                                          {estudiante?.primerNombre + " "} {estudiante?.segundoNombre + " "} {estudiante?.primerApellido + " "}{estudiante?.segundoApellido + " "}
                                          
                                        </ListItem>
                                      ))}

                                    <Modal.Footer>

                                      <Button variant="secondary" onClick={handleClose1}>
                                        Cancelar
                                      </Button>

                                      <Button variant="primary" onClick={handleAgregarEst}>
                                        Guardar
                                      </Button>

                                    </Modal.Footer>
                                      
                            </Modal.Body>
                            
                          </Modal>
                          <li>Dirección:{institucion.direccion}</li>
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
              </Col>
              {/* editar */}
              <Col className="p-1" xs={1}>
                {listaInstituciones
                  .filter((elemento)=>elemento.nombre.toString().toLowerCase().includes(busqueda.toLowerCase()))
                  .sort((a, b) => ordenarLista(a, b))
                  .filter((est, i) => i >= (paginaActual - 1) * itemsPagina && i < paginaActual * itemsPagina)
                  .map((institucion, indice) => (
                    <ButtonGroup className='my-2' aria-label="Basic example" key={indice}>
                      <Button style={{ backgroundColor: color, color: "black" }} onClick={() => handShow(institucion)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                          <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                        </svg>
                      </Button>
                      <Button style={{ backgroundColor: color, color: "black" }}>
                            <input type="checkbox" onChange={(event) => {agregarSeleccionado(event, institucion)}} ></input>
                      </Button>
                    </ButtonGroup>
                  ))}
                {/* editar institución */}
                <Modal
                  show={shows}
                  onHide={close}
                  backdrop="static"
                  keyboard={false}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Editar institución</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>

                    {/* formulario */}
                    <Form onChange={actualizarInstitucion}>
                      
                      <FormGroup>
                        <Label>Nombre de la institución</Label>
                        <Input defaultValue={institucionSeleccionado?.nombre}
                          type="text"
                          name='nombre'
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label>Dirección</Label>
                        <Input defaultValue={institucionSeleccionado?.direccion}
                          type="text"
                          name='direccion'
                        />
                      </FormGroup>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={close}>
                      Cancelar
                    </Button>
                    <Button onClick={editarinstitucion} variant="primary">
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
            <CardTitle tag="h0" className="border-bottom p-0 mb-0">
            </CardTitle>
            <CardBody className="">
              <div className="button-group">
                <Link href={'/ui/infohospital'}>
                  <Button style={{ backgroundColor: color, color: "black" }} size="lg">Ver informes</Button>
                </Link>
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
