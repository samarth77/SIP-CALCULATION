import React, { useState } from "react";
import Calculation from "./component/calculation";
import Calculator from "./component/calculator";

export default function App() {
  const [cal, setCal] = useState(null);
  const calculateMaturity = (value) => {
    setCal(value);
  };
  return (
    <>
      <div>
        <h3>SIP CALCULATOR</h3>
      </div>
      <div>
        <div style={{ float: "left", width: "50%" }}>
          <Calculator handleCalc={calculateMaturity} />
        </div>
        <div
          style={{
            float: "left",
            width: "50%",
            height: "500px",
            overflow: "scroll",
          }}
        >
          {cal && <Calculation stats={cal} />}
        </div>
      </div>
    </>
  );
}
