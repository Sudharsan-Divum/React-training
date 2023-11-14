import { observer } from "mobx-react";
import { Routing } from "./routes";

function App() {
  return (
    <>
      <Routing />
    </>
  );
}

export default observer(App);
