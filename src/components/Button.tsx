import type { ReactNode } from "react";
import styles from "../styles/Button.module.css";

type Props = {
  children: ReactNode;
  tipo?: "button" | "submit" | "reset"; // Tipo de botón
  alHacerClic?: () => void; // Función que se ejecuta al hacer clic
};

function Button({ children, tipo = "button", alHacerClic }: Props) {
  return (
    <button className={styles.button} type={tipo} onClick={alHacerClic}>
      {children}
    </button>
  );
}

export default Button;
