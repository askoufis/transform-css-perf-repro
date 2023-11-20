import { sprinkles } from "../styles/sprinkles.css.ts";

export interface Button4Props {
  children: string;
}

export const Button4 = ({ children: label }: Button4Props) => {
  return <button className={sprinkles({ paddingTop: "80px" })}>{label}</button>;
};
