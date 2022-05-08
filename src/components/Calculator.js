import React, { useEffect, useState } from "react";
import CalcPad from "./CalcPad";
import Screen from "./Screen";
import "../style/calculator.css";

function Calculator() {
  const [screenInput, setScreenInput] = useState("0");
  useEffect(() => {
    if(screenInput.length > 9){
    const screenNumb = parseFloat(screenInput).toExponential(2);
    setScreenInput(`${screenNumb}`);
  }
  },[screenInput])
  

  return (
    <div className="calc">
      <Screen screenInput={screenInput} />
      <CalcPad
        input = {screenInput}
        setInput={setScreenInput}
      />
    </div>
  );
}

export default Calculator;
