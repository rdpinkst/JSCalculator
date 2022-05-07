import React from "react";
import "../style/calcPad.css";

function CalcPad({
  input,
  setInput,
  otherNumber,
  setNumber,
  operator,
  setOperator,
}) {
  const keyValues = [
    "AC",
    "+/-",
    "%",
    "/",
    "7",
    "8",
    "9",
    "x",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "=",
  ];

  function add(a, b) {
    return a + b;
  }

  function subtract(a, b) {
    return a - b;
  }

  function multiply(a, b) {
    return a * b;
  }

  function divide(a, b) {
    return a / b;
  }

  function clickButton(e) {
    const valueBtn = e.target.textContent;
    const checkNumber = parseInt(valueBtn);
    if (checkNumber) {
      setInput((prevState) => {
        if (prevState === "0" && !operator) {
          return e.target.textContent;
        } else if (operator) {
          let numb = prevState;
          setNumber(numb);
          return e.target.textContent;
        } else {
          return prevState + e.target.textContent;
        }
      });
    } else if (valueBtn === "AC") {
      setInput("0");
    } else if (valueBtn === "+/-") {
      setInput((prevState) => {
        if (prevState.includes("-")) {
          const newNumb = parseFloat(prevState) * -1;
          return `${newNumb}`;
        } else {
          return "-" + prevState;
        }
      });
    } else if (valueBtn === "%") {
      setInput((prevState) => {
        const numbPercent = parseFloat(prevState) / 100;
        return `${numbPercent}`;
      });
    } else if (valueBtn === ".") {
      setInput((prevState) => {
        if (prevState.includes(".")) {
          return prevState;
        } else {
          return prevState + ".";
        }
      });
    } else {
      setOperator(e.target.textContent);
    }
  }

  const pad = keyValues.map((val) => {
    return (
      <button className={`val-${val} button`} key={val} onClick={clickButton}>
        {val}
      </button>
    );
  });
  return <div className="pad-calc">{pad}</div>;
}

export default CalcPad;
