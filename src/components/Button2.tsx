import { sprinkles } from "../styles/sprinkles.css";

export interface Button2Props {
  children: string;
}

export const Button2 = ({ children: label }: Button2Props) => {
  return <button className={sprinkles({ paddingTop: "80px" })}>{label}</button>;
};
