import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Card,
  ModalFooter,
  Row, Col,CardTitle, CardBody,
} from "reactstrap";
import Link from "next/link";

const data = [
  { No: 1, Cedula: "9120928122", Nombres: "Naruto", Apellido:  "Naruto" , Promedio: "4.4", SitioPractica: "Los Cobos", Nota: "4.4",Mes:"Febrero" },
  { No: 2, Cedula: "9120928122", Nombres: "Alejandro", Apellido:  "Ruiz" , Promedio: "4.4", SitioPractica: "Los Cobos", Nota: "4.4",Mes:"Febrero" },
  { No: 3, Cedula: "9120928122", Nombres: "Alejandro", Apellido:  "Ruiz" , Promedio: "4.4", SitioPractica: "Los Cobos", Nota: "4.4",Mes:"Febrero" },
  { No: 1, Cedula: "9120928122", Nombres: "Alejandro", Apellido:  "Ruiz" , Promedio: "4.4", SitioPractica: "Los Cobos", Nota: "4.4",Mes:"Febrero" },
  { No: 1, Cedula: "9120928122", Nombres: "Alejandro", Apellido:  "Ruiz" , Promedio: "4.4", SitioPractica: "Los Cobos", Nota: "4.4",Mes:"Febrero" },
  
];

class ListaEstudiantes extends React.Component {
  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      id: "",
      Cedula: "",
      Nombres: "",
      Apellido: "",
      Promedio: "",
      SitioPractica: "",
      Nota: "",
      Mes: "",
      
    },
  };

  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  editar = (dato) => {
    var contador = 0;
    var arreglo = this.state.data;
    arreglo.map((registro) => {
      if (dato.id == registro.No) {
        arreglo[contador].Cedula = dato.Cedula;
        arreglo[contador].Nombres= dato.Nombres;
        arreglo[contador].Apellido= dato.Apellido;
        arreglo[contador].Promedio = dato.promedio;
        arreglo[contador].SitioPractica= dato.SitioPractica;
        arreglo[contador].Nota = dato.Nota;
        arreglo[contador].Mes = dato.Mes;
      }
      contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };

  eliminar = (dato) => {
    var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento "+dato.id);
    if (opcion == true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map((registro) => {
        if (dato.id == registro.No) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: arreglo, modalActualizar: false });
    }
  };

  insertar= ()=>{
    var valorNuevo= {...this.state.form};
    valorNuevo.id=this.state.data.length+1;
    var lista= this.state.data;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data: lista });
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    
    return (
      <>
        <Container>
        <br />
          
          <br />
          <br />
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Cedula</th>
                <th>Nombres</th>
                <th>Apellido</th>
                <th>Promedio</th>
                <th>Sitio de Practica</th>
                <th>Nota</th>
                <th>Mes</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.No}>
                  <td>{dato.No}</td>
                  <td>{dato.Cedula}</td>
                  <td>{dato.Nombres}</td>
                  <td>{dato.Apellido}</td>
                  <td>{dato.Promedio}</td>
                  <td>{dato.SitioPractica}</td>
                  <td>{dato.Nota}</td>
                  <td>{dato.Mes}</td>
                  <td>
                   
                  </td>
                </tr>
              ))}
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
                <Link href={'/ui/graficas'}>
                <Button className="btn" color="primary" size="lg">
                  Ver Graficas
                </Button>
                </Link>
                <Button className="btn" color="secondary" size="lg">
                 Descargar lista
                </Button>
              </div>
            </CardBody>
          </Card>
        </Col>
        </Container>

        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
           <div><h3>Editar Registro</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
               Id:
              </label>
            
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.id}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Cedula: 
              </label>
              <input
                className="form-control"
                name="Cedula"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Cedula}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Nombres: 
              </label>
              <input
                className="form-control"
                name="Nombres"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Nombres}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Apellido :
              </label>
              <input
                className="form-control"
                name="Apellido"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Apellido}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Correo: 
              </label>
              <input
                className="form-control"
                name="Correo"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Correo}

              />
            </FormGroup>
            <FormGroup>
              <label>
                Semestre : 
              </label>
              <input
                className="form-control"
                name="Semestre"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Semestre}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Direccion: 
              </label>
              <input
                className="form-control"
                name="Direccion"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Direccion}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.editar(this.state.form)}
            >
              Editar
            </Button>
            <Button
              color="danger"
              onClick={() => this.cerrarModalActualizar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>



        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
           <div><h3>Insertar Estudiantes</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
                Id: 
              </label>
              
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.data.length+1}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Cedula: 
              </label>
              <input
                className="form-control"
                name="Cedula"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Nombres : 
              </label>
              <input
                className="form-control"
                name="Nombres"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Apellido : 
              </label>
              <input
                className="form-control"
                name="Apellido"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
             <FormGroup>
              <label>
                Correo: 
              </label>
              <input
                className="form-control"
                name="Correo"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Semestre 
              </label>
              <input
                className="form-control"
                name="Semestre"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Direccion 
              </label>
              <input
                className="form-control"
                name="Direccion"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.insertar()}
            >
              Insertar
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => this.cerrarModalInsertar()}
            >
              Cancelar
            </Button>
        
          </ModalFooter>
        </Modal>
      </>
      
    );
  }
}
ListaEstudiantes.layout = "MenuLayout"
export default ListaEstudiantes;