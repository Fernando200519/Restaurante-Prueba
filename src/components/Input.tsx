import styles from "../styles/Input.module.css";

type Props = {
  placeholder: string;
  id: string;
  icon: string;
  tipo?: string;
  valor?: string; // Lo que está escrito en el input
  alCambiar?: (valor: string) => void; // Función que se ejecuta cuando el usuario escribe
  // Props nuevas para el toggle de contraseña
  tieneTogglePassword?: boolean;
  passwordVisible?: boolean;
  iconoOjoAbierto?: string;
  iconoOjoCerrado?: string;
  alTogglePassword?: () => void;
  mostrarToggleSoloConTexto?: boolean; // Solo mostrar el ojo cuando hay texto
};

function Input({
  id,
  placeholder,
  icon,
  tipo = "text",
  valor = "",
  alCambiar,
  tieneTogglePassword = false,
  passwordVisible = false,
  iconoOjoAbierto,
  iconoOjoCerrado,
  alTogglePassword,
  mostrarToggleSoloConTexto = false,
}: Props) {
  // Función que se ejecuta cada vez que el usuario escribe algo
  const manejarCambio = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (alCambiar) {
      alCambiar(e.target.value); // Envía lo que escribió el usuario
    }
  };

  // Decidir si mostrar el toggle del ojo
  const deberMostrarToggle =
    tieneTogglePassword &&
    (!mostrarToggleSoloConTexto ||
      (mostrarToggleSoloConTexto && valor && valor.length > 0));

  return (
    <div className={styles.inputWrapper}>
      {icon && <img src={icon} className={styles.icon} alt="" />}
      <input
        className={styles.input}
        id={id}
        type={tipo}
        placeholder={placeholder}
        value={valor}
        onChange={manejarCambio}
      />

      {/* Ícono del ojo para toggle de contraseña */}
      {deberMostrarToggle && iconoOjoAbierto && iconoOjoCerrado && (
        <img
          src={passwordVisible ? iconoOjoAbierto : iconoOjoCerrado}
          className={styles.eyeIcon}
          alt={passwordVisible ? "Ocultar contraseña" : "Mostrar contraseña"}
          onClick={alTogglePassword}
        />
      )}
    </div>
  );
}

export default Input;
