import userIcon from "../assets/icono_usuario.svg";
import lockIcon from "../assets/icono_contraseña.svg";
import Card from "../components/Card";
import Input from "../components/Input";
import Button from "../components/Button.tsx";
import styles from "../styles/LoginPage.module.css";
import iconLogo from "../assets/logo.svg";

function LoginPage() {
  return (
    <div className={styles.contenedor}>
      <div className={["contenedor-logo", styles.logo_container].join(" ")}>
        <div className={styles.card_logo}>
          <img className={styles.img_logo} src={iconLogo}></img>
          <h1 className={styles.titulo_logo}>RestaurApp</h1>
          <h2 className={styles.eslogan_logo}>
            Sistema integral para la gestión de tu restaurante.
          </h2>
        </div>
      </div>
      <div className={["contenedor-login", styles.login_container].join(" ")}>
        <Card>
          <h1 className={styles.titulo}>Iniciar sesión</h1>

          <div className={styles.contenedor_input}>
            <label className={styles.subtitulo} htmlFor="usuario">
              Usuario
            </label>
            <Input
              icon={userIcon}
              id="usuario"
              placeholder="Ingrese tu nombre de usuario"
            ></Input>

            <label className={styles.subtitulo} htmlFor="contrasena">
              Contraseña
            </label>
            <Input
              icon={lockIcon}
              id="contrasena"
              placeholder="Ingrese tu contraseña"
            ></Input>
          </div>

          <Button>Iniciar sesión</Button>
        </Card>
      </div>
    </div>
  );
}

export default LoginPage;
