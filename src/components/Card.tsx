import type { ReactNode } from "react";
import styles from "../styles/Card.module.css";

type Props = {
  children: ReactNode;
};

function Card({ children }: Props) {
  return <div className={styles.card}>{children}</div>;
}

export default Card;
