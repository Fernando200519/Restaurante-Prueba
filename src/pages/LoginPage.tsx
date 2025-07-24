import userIcon from "../assets/icono_usuario.svg";
import lockIcon from "../assets/icono_contraseña.svg";
import Card from "../components/Card";
import Input from "../components/Input";
import Button from "../components/Button.tsx";
import styles from "../styles/LoginPage.module.css";
import iconLogo from "../assets/logo.svg";
import eyeOpenIcon from "../assets/ojo_abierto.svg"; // Agrega esta línea
import eyeClosedIcon from "../assets/ojo_cerrado.svg"; // Agrega esta línea
import { useState } from "react";

function LoginPage() {
  // Estado para guardar lo que el usuario escribe
  const [datosFormulario, setDatosFormulario] = useState({
    usuario: "",
    contrasena: "",
  });

  // Función que se ejecuta cuando el usuario escribe en los inputs
  const manejarCambio = (campo: string, valor: string) => {
    setDatosFormulario((prev) => ({
      ...prev,
      [campo]: valor,
    }));
  };

  // Estado para controlar si la contraseña está visible
  const [mostrarContrasena, setMostrarContrasena] = useState(false);

  // Función para alternar entre mostrar/ocultar contraseña
  const alternarVisibilidadContrasena = () => {
    setMostrarContrasena(!mostrarContrasena);
  };

  // Función que se ejecuta cuando se hace clic en "Iniciar sesión"
  const manejarEnvio = (e: React.FormEvent) => {
    // e.preventDefault(); // Evita que la página se recargue

    // Aquí puedes ver lo que escribió el usuario
    console.log("Usuario escribió:", datosFormulario);

    // Validaciones básicas
    if (!datosFormulario.usuario) {
      alert("Por favor ingresa tu usuario");
      return;
    }

    if (!datosFormulario.contrasena) {
      alert("Por favor ingresa tu contraseña");
      return;
    }

    // Aquí iría la lógica para verificar usuario y contraseña
    // Por ahora solo mostramos un mensaje
    alert(
      `Intentando iniciar sesión con usuario: ${datosFormulario.usuario} y contraseña: ${datosFormulario.contrasena}`
    );
  };

  return (
    <div className={styles.contenedor}>
      <div className={["contenedor-logo", styles.logo_container].join(" ")}>
        <div className={styles.card_logo}>
          <img
            className={styles.img_logo}
            src={iconLogo}
            alt="Logo RestaurApp"
          ></img>
          <h1 className={styles.titulo_logo}>RestaurApp</h1>
          <h2 className={styles.eslogan_logo}>
            Sistema integral para la gestión de tu restaurante.
          </h2>
        </div>
      </div>

      <div className={["contenedor-login", styles.login_container].join(" ")}>
        <Card>
          <h1 className={styles.titulo}>Iniciar sesión</h1>

          <form onSubmit={manejarEnvio} className={styles.contenedor_input}>
            <label className={styles.subtitulo} htmlFor="usuario">
              Usuario
            </label>
            <Input
              icon={userIcon}
              id="usuario"
              placeholder="Ingrese tu nombre de usuario"
              tipo="text"
              valor={datosFormulario.usuario}
              alCambiar={(valor) => manejarCambio("usuario", valor)}
            ></Input>

            <label className={styles.subtitulo} htmlFor="contrasena">
              Contraseña
            </label>
            <Input
              icon={lockIcon}
              id="contrasena"
              placeholder="Ingrese tu contraseña"
              tipo={mostrarContrasena ? "text" : "password"}
              valor={datosFormulario.contrasena}
              alCambiar={(valor) => manejarCambio("contrasena", valor)}
              // Props nuevas para el ojo
              tieneTogglePassword={true}
              passwordVisible={mostrarContrasena}
              iconoOjoAbierto={eyeOpenIcon}
              iconoOjoCerrado={eyeClosedIcon}
              alTogglePassword={alternarVisibilidadContrasena}
              mostrarToggleSoloConTexto={true}
            />
            <Button tipo="submit">Iniciar sesión</Button>
          </form>
        </Card>
      </div>
    </div>
  );
}

export default LoginPage;
