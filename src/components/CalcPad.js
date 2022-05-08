import React, { useEffect, useState } from "react";
import "../style/calcPad.css";

function CalcPad({ input, setInput }) {
  const [otherNumb, setOtherNumb] = useState("");
  const [operator, setOperator] = useState("");
  const [nextOperator, setNextOperator] = useState("");
  const [evaluate, setEvaluate] = useState(false);

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

  function computeNumb(a, b, sign) {
    switch (sign) {
      case "+":
        return add(a, b);
      case "-":
        return subtract(a, b);
      case "x":
        return multiply(a, b);
      case "/":
        return divide(a, b);
      default:
        console.log("Don't know how to compute.");
    }
  }

  function clickButton(e) {
    const valueBtn = e.target.textContent;
    const checkNumber = parseInt(valueBtn);
    if (checkNumber) {
      setInput((prevState) => {
        if (prevState === "0" && !operator) {
          return e.target.textContent;
        } else if (operator && !evaluate) {
          return e.target.textContent;
        } else {
          return prevState + e.target.textContent;
        }
      });
    } else if (valueBtn === "AC") {
      setInput("0");
      setOtherNumb("");
      setOperator("");
      setNextOperator("");
      setEvaluate(false);
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
          return prevState + e.target.textContent;
        } else {
          return prevState + ".";
        }
      });
    } else if (operator && !evaluate) {
      setEvaluate((prevState) => !prevState);
      setNextOperator(e.target.textContent);
    } else if(!operator && valueBtn === "="){
      setOperator("");
    }
    else {
      setOperator(e.target.textContent);
    }
  }

  useEffect(() => {
    if (evaluate) {
      const numbValA = parseFloat(otherNumb);
      const numbValB = parseFloat(input);
      setInput(`${computeNumb(numbValA, numbValB, operator)}`);
      setEvaluate((prevState) => !prevState);
      setOperator(prevState => {
        if(nextOperator === "="){
          prevState = "";
          return prevState;
        }else {
          return nextOperator
        }
        });
    } else if (!evaluate && operator) {
      setOtherNumb(input);
    }
  }, [evaluate, operator]);

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
