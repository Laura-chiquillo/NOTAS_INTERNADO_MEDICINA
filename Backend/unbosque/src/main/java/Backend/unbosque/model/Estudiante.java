package Backend.unbosque.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("Estudiante")
public class Estudiante {

        @Id
        private String idEstudiante;
        private String documento;
        private String primerNombre;
        private String segundoNombre;
        private String primerApellido;
        private String segundoApellido;
        private double promedio;
        private String semestreE;
        private String correo;
        private String telefono;
        private boolean estado;

        public Estudiante(String idEstudiante, String documento, String primerNombre, String segundoNombre,
                String primerApellido, String segundoApellido, double promedio, String semestreE, String correo,
                String telefono, boolean estado) {
            this.idEstudiante = idEstudiante;
            this.documento = documento;
            this.primerNombre = primerNombre;
            this.segundoNombre = segundoNombre;
            this.primerApellido = primerApellido;
            this.segundoApellido = segundoApellido;
            this.promedio = promedio;
            this.semestreE = semestreE;
            this.correo = correo;
            this.telefono = telefono;
            this.estado = estado;
        }

        public String getIdEstudiante() {
            return idEstudiante;
        }

        public void setIdEstudiante(String idEstudiante) {
            this.idEstudiante = idEstudiante;
        }

        public String getDocumento() {
            return documento;
        }

        public void setDocumento(String documento) {
            this.documento = documento;
        }

        public String getPrimerNombre() {
            return primerNombre;
        }

        public void setPrimerNombre(String primerNombre) {
            this.primerNombre = primerNombre;
        }

        public String getSegundoNombre() {
            return segundoNombre;
        }

        public void setSegundoNombre(String segundoNombre) {
            this.segundoNombre = segundoNombre;
        }

        public String getPrimerApellido() {
            return primerApellido;
        }

        public void setPrimerApellido(String primerApellido) {
            this.primerApellido = primerApellido;
        }

        public String getSegundoApellido() {
            return segundoApellido;
        }

        public void setSegundoApellido(String segundoApellido) {
            this.segundoApellido = segundoApellido;
        }

        public double getPromedio() {
            return promedio;
        }

        public void setPromedio(double promedio) {
            this.promedio = promedio;
        }

        public String getSemestreE() {
            return semestreE;
        }

        public void setSemestreE(String semestreE) {
            this.semestreE = semestreE;
        }

        public String getCorreo() {
            return correo;
        }

        public void setCorreo(String correo) {
            this.correo = correo;
        }

        public String getTelefono() {
            return telefono;
        }

        public void setTelefono(String telefono) {
            this.telefono = telefono;
        }

        public boolean isEstado() {
            return estado;
        }

        public void setEstado(boolean estado) {
            this.estado = estado;
        }

        @Override
        public String toString() {
            return "Estudiante [correo=" + correo + ", documento=" + documento + ", estado=" + estado
                    + ", idEstudiante=" + idEstudiante + ", primerApellido=" + primerApellido + ", primerNombre="
                    + primerNombre + ", promedio=" + promedio + ", segundoApellido=" + segundoApellido
                    + ", segundoNombre=" + segundoNombre + ", semestreE=" + semestreE + ", telefono=" + telefono + "]";
        }     


        @Override
        public boolean equals(Object est){
            if(est instanceof Estudiante){
                return this.idEstudiante.equals(((Estudiante) est).idEstudiante);
            }
            return false;
        }
}