import React, { useState } from "react";
import CalcPad from "./CalcPad";
import Screen from "./Screen";
import "../style/calculator.css";

function Calculator() {
  const [screenInput, setScreenInput] = useState("0");
  const [otherNumb, setOtherNumb] = useState("");
  const [operator, setOperator] = useState("");

  return (
    <div className="calc">
      <Screen screenInput={screenInput} />
      <CalcPad
        input = {screenInput}
        setInput={setScreenInput}
        otherNumb={otherNumb}
        setNumber={setOtherNumb}
        operator = {operator}
        setOperator = {setOperator}
      />
    </div>
  );
}

export default Calculator;
