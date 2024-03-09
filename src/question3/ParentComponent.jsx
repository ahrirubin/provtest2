import { useState } from "react";
import ColorSelector from "./ColorSelector";

export default function ParentComponent() {
  const [color, setColor] = useState("");

  function handleColor(color) {
    setColor(color);
  }

  return (
    <div>
      <p>{color}</p>

      <ChildComponent handleColor={handleColor}></ChildComponent>
    </div>
  );
}
