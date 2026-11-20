
import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const clearDisplay = () => {
    setInput("");
  };

  const calculate = () => {
    try {
      if (!/^[0-9+\-*/.() ]+$/.test(input)) {
        setInput("Error");
        return;
      }

      const result = Function('"use strict"; return (' + input + ')')();

      setInput(
        Number.isFinite(result) ? String(result) : "Error"
      );
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="calculator">
      <h2>Simple Calculator</h2>

      <input
        type="text"
        className="display"
        value={input}
        readOnly
      />

      <div className="buttons">
        <button className="clear" onClick={clearDisplay}>C</button>
        <button onClick={() => handleClick("/")}>/</button>
        <button onClick={() => handleClick("*")}>*</button>
        <button onClick={() => handleClick("-")}>-</button>

        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("+")}>+</button>

        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick(".")}>.</button>

        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button className="equal" onClick={calculate}>=</button>

        <button className="zero" onClick={() => handleClick("0")}>0</button>
      </div>
    </div>
  );
}

export default Calculator;
