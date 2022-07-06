import Values from "values.js";
import { ColorItem } from "./ColorItem";
import { useState } from "react";

// css
import "./App.css";

function App() {
  const tints = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10];
  const shades = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

  const [value, setValue] = useState("");
  const [userColor, setUserColor] = useState("#C24263");

  let inputBorderColor = {
    border: "",
  };

  let color;
  try {
    color = new Values(userColor);
  } catch {
    inputBorderColor = {
      outline: "2px solid red",
    };

    color = new Values("#C24263");
  }

  return (
    <div className="App">
      <section className="input-section">
        <label htmlFor="colorInput">Color Generator</label>
        <input
          placeholder="#C24263"
          style={inputBorderColor}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={() => setUserColor(value)}>Submit</button>
      </section>
      <section className="colorItemContainer">
        {tints.map((tint) => (
          <ColorItem key={`tint-${tint}`} color={color.tint(tint)} />
        ))}

        {shades.map((shade) => (
          <ColorItem key={`shade-${shade}`} color={color.shade(shade)} />
        ))}
      </section>
    </div>
  );
}

export default App;
