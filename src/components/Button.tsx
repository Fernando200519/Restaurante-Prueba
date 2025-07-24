import type { ReactNode } from "react";
import styles from "../styles/Button.module.css";

type Props = {
  children: ReactNode;
};

function Button({ children }: Props) {
  return <button className={styles.button}>{children}</button>;
}

export default Button;
