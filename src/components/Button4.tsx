import * as styles from "./Button4.css.ts";

export interface Button4Props {
  children: string;
}

export const Button4 = ({ children: label }: Button4Props) => {
  return <button className={styles.button4}>{label}</button>;
};
