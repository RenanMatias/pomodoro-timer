import "./styles/theme.css";
import "./styles/global.css";

import { Contariner } from "./components/Contariner";
import { Heading } from "./components/Heading";

export function App() {
  return (
    <>
      <Contariner>
        <Heading>LOGO</Heading>
      </Contariner>
      <Contariner>
        <Heading>MENU</Heading>
      </Contariner>
      <Contariner>
        <Heading>FORM</Heading>
      </Contariner>
      <Contariner>
        <Heading>FOOTER</Heading>
      </Contariner>
    </>
  );
}
