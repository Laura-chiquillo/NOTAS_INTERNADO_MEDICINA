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
  ModalFooter,
} from "reactstrap";

const data = [
  { id: 1, Cedula: "9120928122", Nombres: "Naruto", Apellido:  "Naruto" , Correo: "pepito@unbosque.edu.co", Semestre: "10", Direccion: "Cra 8h #167-87", },
  { id: 2, Cedula: "9120928122", Nombres: "Catalina", Apellido: "Naruto", Correo: "pepito@unbosque.edu.co", Semestre: "10", Direccion: "Cra 8h #167-87",  },
  { id: 3, Cedula: "9120928122", Nombres: "Dario", Apellido: "Naruto"   , Correo: "pepito@unbosque.edu.co", Semestre: "10", Direccion: "Cra 8h #167-87",  },
  { id: 4, Cedula: "9120928122", Nombres: "Ana" ,Apellido: "Naruto"     , Correo: "pepito@unbosque.edu.co", Semestre: "10", Direccion: "Cra 8h #167-87",  },
  { id: 5, Cedula: "9120928122", Nombres: "Tatiana", Apellido: "Naruto" , Correo: "pepito@unbosque.edu.co", Semestre: "10", Direccion: "Cra 8h #167-87",   },
  { id: 6, Cedula: "9120928122", Nombres: "Jenny", Apellido:  "Naruto"  , Correo: "pepito@unbosque.edu.co", Semestre: "10", Direccion: "Cra 8h #167-87",   },
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
      Correo: "",
      Semestre: "",
      Direccion: "",
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
      if (dato.id == registro.id) {
        arreglo[contador].Cedula = dato.Cedula;
        arreglo[contador].Nombres= dato.Nombres;
        arreglo[contador].Apellido= dato.Apellido;
        arreglo[contador].Correo = dato.Correo;
        arreglo[contador].Semestre= dato.Semestre;
        arreglo[contador].Direccion = dato.Direccion;
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
        if (dato.id == registro.id) {
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
          <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Crear</Button>
          <br />
          <br />
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Cedula</th>
                <th>Nombres</th>
                <th>Apellido</th>
                <th>Correo</th>
                <th>Semestre</th>
                <th>Direccion</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.id}</td>
                  <td>{dato.Cedula}</td>
                  <td>{dato.Nombres}</td>
                  <td>{dato.Apellido}</td>
                  <td>{dato.Correo}</td>
                  <td>{dato.Semestre}</td>
                  <td>{dato.Direccion}</td>
                  <td>
                    <Button
                      color="primary"
                      onClick={() => this.mostrarModalActualizar(dato)}
                    >
                      Editar
                    </Button>{" "}
                    <Button color="danger" onClick={()=> this.eliminar(dato)}>Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
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
export default ListaEstudiantes;