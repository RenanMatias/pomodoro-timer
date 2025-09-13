import { Heading } from "./components/Heading";

import "./styles/theme.css";
import "./styles/global.css";

export function App() {
  console.log("App component rendered");

  return (
    <>
      <Heading />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore quae vero illum optio ea. Veritatis dolores,
        minima perferendis facilis aliquid praesentium, et ipsam earum harum molestiae consequatur excepturi, cupiditate
        beatae!
      </p>
    </>
  );
}
