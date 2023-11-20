import * as styles from "./Button2.css.ts";

export interface Button2Props {
  children: string;
}

export const Button2 = ({ children: label }: Button2Props) => {
  return <button className={styles.button2}>{label}</button>;
};
