import { useState } from "react";

// css
import "./ColorItem.css";

export function ColorItem({ color }) {
  const [isCopied, setIsCopied] = useState(false);
  const { hex, weight, type, rgb } = color;
  const isShade = type === "shade" ? true : false;
  const textColor = isShade ? "white" : "black";
  const [red, green, blue] = rgb;

  const inlineStyle = {
    color: textColor,
    backgroundColor: `rgb(${red}, ${green}, ${blue})`,
  };

  function divClick() {
    navigator.clipboard.writeText(`#${hex.toUpperCase()}`);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  }

  return (
    <div className="colorItem" onClick={divClick} style={inlineStyle}>
      <p className="weight">{weight}%</p>
      <p className="hexValue">#{hex.toUpperCase()}</p>
      {isCopied && <p className="copyConfirmation">COPIED TO CLIPBOARD</p>}
    </div>
  );
}
