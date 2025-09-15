import { Heading } from "./components/Heading";

import "./styles/theme.css";
import "./styles/global.css";
import { TimerIcon } from "lucide-react";

export function App() {
  console.log("App component rendered");

  return (
    <>
      <Heading>
        Hello, world!
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore quae vero illum optio ea. Veritatis dolores,
        minima perferendis facilis aliquid praesentium, et ipsam earum harum molestiae consequatur excepturi, cupiditate
        beatae!
      </p>
    </>
  );
}
