import type { ReactNode } from "react";
import styles from "../styles/Input.module.css";

type Props = {
  children?: ReactNode;
  placeholder: string;
  id: string;
  icon: string;
};

function Input({ id, children, placeholder, icon }: Props) {
  return (
    <div className={styles.inputWrapper}>
      {icon && <img src={icon} className={styles.icon}></img>}
      <input className={styles.input} id={id} placeholder={placeholder}>
        {children}
      </input>
    </div>
  );
}

export default Input;
