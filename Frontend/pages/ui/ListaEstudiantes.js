
import React, { useEffect, useRef, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  Card,
  FormGroup,
  Input,
  Label,
  Col, CardTitle, CardBody,
  Pagination, PaginationItem, PaginationLink,Row
} from "reactstrap";
import Link from "next/link";
import {
  DropdownButton,
  ButtonGroup,
  Dropdown,
  Spinner 
} from 'react-bootstrap';
import { getApiRotacion } from '../../api/notas'
import { useColors } from '../../hooks/useColor';
import { utils, writeFile } from 'xlsx';




const ListaEstudiantes = () => {

  const { color } = useColors();
  const [ListaRotacion, setListaRotacion] = useState([])
  const [cargando, setCargando] = useState(true)

  /** Numrto de items por pagina */
  const [itemsPagina, setItemsPagina] = useState(5);

  /** Variable que determina la cantidad de paginas de la paginacion */
  const [nPaginacion, setNPaginacion] = useState(0);

  /** esta variable determina el numero de pagina que se esta visualizando
   */

  const [paginaActual, setPaginaActual] = useState(1);

  
  /* se inicia con una lista vacia*/
  

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
    setNPaginacion(Math.ceil(ListaRotacion.length / itemsPagina))
  }, [ListaRotacion])
  /* Llamar la función de la api mostrar rotacion*/
  useEffect(() => {
    getApiRotacion()
      .then((datos) => {
        setListaRotacion(datos)
        setCargando(false)
      })
      .catch((Error) => {
        alert(Error.toString())
      })
  }, [])

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

  /*tabla excel*/
  const descargarExcel = () => {
    const tabla = document.getElementById("tabla");
    console.log(tabla)
    var workbook = utils.table_to_book(tabla);
    writeFile(workbook, "Informe.xlsb");
  }
  
  /*PDF*/
  const savePdf = async () => {
    const pdf = (await import('html2pdf.js')).default
    const table = document.getElementById("tabla")
    const opt = {
      margin: 1,
      filename: 'Informe.pdf',
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    pdf(table, opt)
  }

  if (cargando) {
    return <div><Spinner animation="border" /></div>
  }
  return (

    <>

      <Container>

        <br />
        <br />



        {/* Buscar */}
        <input placeholder='Buscar' className='form-control' value={busqueda} onChange={handleChange}></input>

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



        <Table id='tabla'>

          <thead>

            <tr>
              <th>No</th>
              <th>Documento</th>
              <th>Nombres</th>
              <th>Apellidos</th>
              <th>Promedio</th>
              <th>Sitio de Practica</th>
              <th>Nota</th>
              <th>Fecha Inicio</th>
              <th>Fecha Cierre</th>
            </tr>
          </thead>

          <tbody>
            {ListaRotacion
              .filter((elemento) => elemento.estudiante.primerNombre.toString().toLowerCase().includes(busqueda.toLowerCase()))
              .sort((a, b) => ordenarLista(a, b))
              .filter((est, i) => i >= (paginaActual - 1) * itemsPagina && i < paginaActual * itemsPagina)
              .map((estudiantes, indice) => (
                <tr eventKey={indice} key={indice}>
                  <td>{indice}</td>
                  <td>{estudiantes.estudiante.documento}</td>
                  <td>{estudiantes?.estudiante.primerNombre + " "}{estudiantes?.estudiante.segundoNombre + " "}</td>
                  <td>{estudiantes.estudiante.primerApellido + " "}{estudiantes?.estudiante.segundoApellido + " "}</td>
                  <td>{estudiantes.estudiante.promedio}</td>
                  <td>{estudiantes.institucion.nombre}</td>
                  <td>{estudiantes.notaRotacion}</td>
                  <td>{estudiantes.evaluador1}</td>
                  <td>{estudiantes.fechaInicio}</td>
                  <td>{estudiantes.fechaCierre}</td>
                  <td>
                  </td>
                 <td>
                  </td>
                </tr>
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
          </tbody>

        </Table>

        <Col xs="0" md="0">
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-3*/}
          {/* --------------------------------------------------------------------------------*/}
          <Card>
            <CardTitle tag="h0" className="border-bottom p-0 mb-0">
            </CardTitle>
            <CardBody className="">
              <div className="button-group">
                {/* Descargar PDF y excel */}
                <ButtonGroup>
                  <DropdownButton as={ButtonGroup} title="Descargar lista" className="btn btn-lg p-0" id="bg-nested-dropdown">
                    <Dropdown.Item eventKey="1" onClick={savePdf}> PDF</Dropdown.Item>
                    <Dropdown.Item eventKey="2" onClick={descargarExcel}>EXCEL</Dropdown.Item>
                  </DropdownButton>
                </ButtonGroup>
                <Link href={'/ui/estudiantes'}>
                  <Button style={{ backgroundColor: color, color: "black" }} className="btn" color="primary" >
                    Atrás
                  </Button>
                </Link>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Container>



    </>

  );
}

ListaEstudiantes.layout = "MenuLayout"
export default ListaEstudiantes;