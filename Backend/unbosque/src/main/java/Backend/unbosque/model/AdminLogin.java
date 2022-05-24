package Backend.unbosque.model;

public class AdminLogin {

        private String correo;
        private String contraseña;

        public AdminLogin(String correo, String contraseña) {
            this.correo = correo;
            this.contraseña = contraseña;
        }

        public String getCorreo() {
            return this.correo;
        }

        public void setCorreo(String correo) {
            this.correo = correo;
        }

        public String getContraseña() {
            return this.contraseña;
        }

        public void setContraseña(String contraseña) {
            this.contraseña = contraseña;
        }
}
