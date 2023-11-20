import { sprinkles } from "../styles/sprinkles.css";

export interface Button1Props {
  children: string;
}

export const Button1 = ({ children: label }: Button1Props) => {
  return <button className={sprinkles({ paddingTop: "80px" })}>{label}</button>;
};
