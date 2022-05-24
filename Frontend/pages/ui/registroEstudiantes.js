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
import axios from 'axios'
import { getApiEstudiantes, crearApiEstudiante } from '../../api/estudiantes'



const registroEstudiantes = () => {
  const router = useRouter()
  const [listEstudiantes, setListaEstudiantes] = useState([])
 
  /* Llamar la función de la api mostrar estudiante*/
  useEffect(() => {
    getApiEstudiantes().then((Datos) => setListaEstudiantes(Datos)).catch((Error) => {
      alert(Error.toString())
    })
  }, [])
  const [estudianteSeleccionado, setEstudianteSeleccionado] = useState({})

   const nuevoEstudiante =()=>{
      crearApiEstudiante(estudianteSeleccionado).then( () =>{
        router.push("/ui/estudiantes") 
      })
   }
   const actualizarEditEstudiante = (e) => {
    setEstudianteSeleccionado(
      {...estudianteSeleccionado, 
      [e.target.name]: e.target.value}
    )    
  }

const[file,setFile] = useState();
/*const[title,setTitle] = useState();*/
  /* Actualizar el setfile*/
const handleChange = e=>{
setFile(e.target.files[0])
}
const handleSubmit = async(e) =>{
e.preventDefault();
 
const formData = new FormData();
formData.append('file',file );
/* formData.append('title',title );*/
const res = await axios.post('/ui/registroEstudiantes', formData)

console.log(res)
} 
 


  
  
  
  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            Registrar Estudiantes
          </CardTitle>
          <CardBody>
            <Form onChange={actualizarEditEstudiante} onSubmit={handleSubmit}>
            
            <FormGroup>
                            <Label for="exampleFile">Cargar Imagen</Label>
                            <Input id="exampleFile" name="foto" type="file" onChange={handleChange}/>
                  <button className="btn btn-success rounded-0 w-100"> 
                  subir</button>
              </FormGroup>
              
              <FormGroup>
                <Label>Cédula de ciudadanía</Label>
                <Input
                  type="text"
                  id='IPS'
                  name='documento'
                />
              </FormGroup>
              <FormGroup>
                <Label>Nombres</Label>
                <div class="input-group">
                  <Input
                    type="text"
                    id='Nombre1'
                    name='primerNombre'
                  />
                  <span class="input-group-addon">-</span>
                  <Input
                    type="text"
                    id='Nombre2'
                    name='segundoNombre'
                  />
                </div>
              </FormGroup>
              <FormGroup>
                <Label>Apellidos</Label>
                <div class="input-group">
                  <Input
                    type="text"
                    id='Apellido1'
                    name='primerApellido'
                  />
                  <span class="input-group-addon">-</span>
                  <Input
                    type="text"
                    id='Apellido2'
                    name='segundoApellido'
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
                  name="correo"
                  type="email"
                />
              </FormGroup>
              <FormGroup>
                <Label>Semestre</Label>
                <Input
                  type="text"
                  id='Semestre'
                  name='semestreE'
                />
              </FormGroup>
              
        <Button onClick={nuevoEstudiante} color="primary">Guardar</Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
};
registroEstudiantes.layout = "MenuLayout"
export default registroEstudiantes;
