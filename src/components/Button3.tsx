import * as styles from "./Button3.css.ts";

export interface Button3Props {
  children: string;
}

export const Button3 = ({ children: label }: Button3Props) => {
  return <button className={styles.button3}>{label}</button>;
};
