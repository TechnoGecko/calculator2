import React, { useState } from "react";
import ReactFCCTest from "react-fcctest";
import { evaluate } from "mathjs";
import "./App.css";

const App = () => {
  const [evaluated, setEvaluated] = useState(false);
  const [prevEntry, setPrevEntry] = useState("");
  const [allowDecimal, setAllowDecimal] = useState(true);
  const [prevVal, setPrevVal] = useState("");
  const [equation, setEquation] = useState("0");
  const [result, setResult] = useState("");
  const isOperator = /[x/+-]/;
  const endsWithOperator = /[x+-/]$/;
  const endsWithNegativeSign = /\d [x/+-]{1}-$/;
  const multipleDecimals = /\.+/;

  const handleNumbers = (e) => {
    if (equation === "0") {
      setEquation(e.target.name);
      setPrevEntry(e.target.name);
    } else {
      setEquation(equation.concat(e.target.name));
      setPrevEntry(e.target.name);
    }
  };

  const handleOperator = (e) => {
    const operator = e.target.name;
    if (evaluated) {
      setEquation(prevVal.concat(operator));
      setEvaluated(false);
    } else {
      setEquation(equation.concat(operator));
    }

    setPrevEntry(operator);
    setAllowDecimal(true);
  };

  const handleDecimal = () => {
    if (allowDecimal) {
      setEquation(equation.concat("."));
      setPrevEntry(".");
      setAllowDecimal(false);
    }
  };

  const handleResult = () => {
    var filtered = equation.match(/(\*|\+|\/|-)?(\.|\-)?\d+/g).join("");
    const answer =
      Math.round(1000000000000 * evaluate(filtered)) / 1000000000000;
    if (answer.length > 15) {
      answer = answer.slice(0, 14);
    }
    setResult(answer.toString());
    setEquation(answer.toString());
    setPrevVal(answer.toString());
    setAllowDecimal(true);
    setEvaluated(true);
  };

  const clear = () => {
    setEquation("0");
    setResult("");
    setPrevVal("");
    setPrevEntry("");
    setEvaluated(false);
    setAllowDecimal(true);
  };

  const backspace = () => {
    if (equation.length === 1) {
      clear();
    } else {
      setEquation(equation.slice(0, -1));
    }
  };

  const initalize = () => {
    setEvaluated(false);
    setPrevEntry("");
    setAllowDecimal(true);
    setPrevVal("");
    setEquation("0");
    setResult("");
  };

  return (
    <>
      <ReactFCCTest />
      <div className="container">
        <form id="screen">
          <input id="display" type="text" value={equation} readOnly={true} />
          <input
            id="result"
            type="text"
            value={result}
            readOnly={true}
            placeholder="0"
          ></input>
        </form>

        <div className="keypad">
          <button className="highlight" onClick={clear} id="clear">
            Clear
          </button>
          <button className="highlight" onClick={backspace} id="backspace">
            C
          </button>
          <button
            id="divide"
            className="highlight"
            name="/"
            onClick={handleOperator}
          >
            &divide;
          </button>
          <button id="seven" name="7" onClick={handleNumbers}>
            7
          </button>
          <button id="eight" name="8" onClick={handleNumbers}>
            8
          </button>
          <button id="nine" name="9" onClick={handleNumbers}>
            9
          </button>
          <button
            id="multiply"
            className="highlight"
            name="*"
            onClick={handleOperator}
          >
            &times;
          </button>
          <button id="four" name="4" onClick={handleNumbers}>
            4
          </button>
          <button id="five" name="5" onClick={handleNumbers}>
            5
          </button>
          <button id="six" name="6" onClick={handleNumbers}>
            6
          </button>
          <button
            id="subtract"
            className="highlight"
            name="-"
            onClick={handleOperator}
          >
            &ndash;
          </button>
          <button id="one" name="1" onClick={handleNumbers}>
            1
          </button>
          <button id="two" name="2" onClick={handleNumbers}>
            2
          </button>
          <button id="three" name="3" onClick={handleNumbers}>
            3
          </button>
          <button
            id="add"
            className="highlight"
            name="+"
            onClick={handleOperator}
          >
            +
          </button>
          <button id="zero" name="0" onClick={handleNumbers}>
            0
          </button>
          <button
            id="decimal"
            className="highlight"
            name="."
            onClick={handleDecimal}
          >
            .
          </button>
          <button className="highlight" onClick={handleResult} id="equals">
            =
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
