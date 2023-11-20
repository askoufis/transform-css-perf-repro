import { Button1 } from "./components/Button1";
import { Button2 } from "./components/Button2";
import { Button3 } from "./components/Button3";
import { Button4 } from "./components/Button4";

// Uncomment some buttons and restart the dev server to see slower initial load times as the sprinkles file is processed multiple times
export const App = () => {
  return (
    <div>
      <Button1>1</Button1>
      {/* <Button2>2</Button2> */}
      {/* <Button3>3</Button3> */}
      {/* <Button4>4</Button4> */}
    </div>
  );
};
