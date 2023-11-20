import { sprinkles } from "../styles/sprinkles.css";

export interface Button3Props {
  children: string;
}

export const Button3 = ({ children: label }: Button3Props) => {
  return <button className={sprinkles({ paddingTop: "80px" })}>{label}</button>;
};
