import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
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
import { getApiInstituciones, crearApiInstitucion } from '../../api/instituciones';
import { getApiCoordinador, crearApiCoordinador} from '../../api/coordinador';


const Registro = () => {
  const router = useRouter()
  const [listaInstituciones, setListaInstituciones] = useState([])
 
  useEffect(() => {
    getApiInstituciones().then((Datos) => setListaInstituciones(Datos)).catch((Error) => {
      alert(Error.toString())
    })
  }, [])

  /* nuevo institución */
  const [institucionSeleccionado, setinstitucionSeleccionado] = useState({})

  const nuevaInstitucion = () => {
    crearApiInstitucion(institucionSeleccionado).then((institucion) => {

      nuevoCoordinador(institucion.idInstitucion).then(()=> {
        router.push("/ui/hospitales")
      })
    })
  }
  
  const actualizarInstitucion = (e) => {
    setinstitucionSeleccionado(
      {...institucionSeleccionado, 
      [e.target.name]: e.target.value}
    )    
  }

  /* nuevo coordinador */
  const [coordinadorSeleccionado, setcoordinadorSeleccionado] = useState({})
  
  const nuevoCoordinador = async(idInstitucion) => {
    const coord = {...coordinadorSeleccionado, institucion:{"$ref": "Institucion", "$id": 'ObjectId("'+idInstitucion+'")', idInstitucion}}
    console.log(coord)
    return await crearApiCoordinador(coord)

  }
  
  const actualizarCoordinador = (e) => {
    setcoordinadorSeleccionado(
      {...coordinadorSeleccionado, 
      [e.target.name]: e.target.value}
    )    
  }

  const { color } = useColors();

  return (
    
    <Row>
       <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            Registrar Sitios de Practica
          </CardTitle>
          <CardBody>
            <Form onChange={(e) => {actualizarInstitucion(e); actualizarCoordinador(e)}}>
              <FormGroup>
                <Label>IPS</Label>
                <Input
                  type="text"
                  id='IPS'
                  name='nombre'
                />
              </FormGroup>
              <FormGroup>
                <Label>Nombres</Label>
                <div className="input-group">
                  <Input
                    type="text"
                    id='Nombre1'
                    name='primerNombre'
                  />
                  <span className="input-group-addon">-</span>
                  <Input
                    type="text"
                    id='Nombre2'
                    name='segundoNombre'
                  />
                </div>
              </FormGroup>
              <FormGroup>
                <Label>Apellidos</Label>
                <div className="input-group">
                  <Input
                    type="text"
                    id='Apellido1'
                    name='primerApellido'
                  />
                  <span className="input-group-addon">-</span>
                  <Label></Label>
                  <Input
                  id="Apellido2"
                  name="segundoApellido"
                  type="text"
                />
                </div>
              </FormGroup>
              <FormGroup>
                <Label>Teléfono</Label>
                <Input
                  type="tel"
                  id='Telefono'
                  name='telefono'
                />
              </FormGroup>
              <FormGroup>
                <Label for="eEmail">Correo</Label>
                <Input
                  id="Email"
                  name="correo"
                  type="email"
                />
              </FormGroup>
              <FormGroup>
                <Label>Cargo</Label>
                <Input
                  type="text"
                  id='Cargo'
                  name='cargo'
                />
              </FormGroup>
              <FormGroup>
                <Label>Dirección</Label>
                <Input
                  id="text"
                  name="direccion"
                  type="text"
                />
              </FormGroup>
              
                <Button onClick={()=> {nuevaInstitucion()}} style={{backgroundColor: color, color:"black"}} >Guardar</Button>
                <Link href={'/ui/hospitales'}>
                <Button style={{backgroundColor: color, color:"black"}} >Atrás</Button>
                </Link>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
};
Registro.layout = "MenuLayout";
export default Registro;
