import React from "react";
import "../style/calcPad.css"

function CalcPad() {
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

  const pad = keyValues.map(val => {
      return (
          <div className={`val-${val} button`} key={val}>
              <p>{val}</p>
          </div>
      )
  })
  return <div className="pad-calc">{pad}</div>;
}

export default CalcPad;
