import * as styles from "./Button1.css.ts";

export interface Button1Props {
  children: string;
}

export const Button1 = ({ children: label }: Button1Props) => {
  return <button className={styles.button1}>{label}</button>;
};
