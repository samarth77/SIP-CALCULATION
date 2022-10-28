import React, { useState, useEffect } from "react";

const Calculator = function () {
  const [pAmt, setPAmt] = useState(0);
  const [roi, setRoi] = useState(0);
  const [pCnt, setPCnt] = useState(0);
  const [proi, setProi] = useState(0);
  const [mAmt, setMAmt] = useState(0);
  const [tAmt, setTAmt] = useState(0);
  const [rAmt, setRAmt] = useState(0);

  const onChangePAmt = (e) => {
    setPAmt(e.target.value);
  };
  const onChangeRoi = (e) => {
    setRoi(e.target.value);
  };
  const onChangePCnt = (e) => {
    setPCnt(e.target.value);
  };
  const calculateMaturity = () => {
    let _proi = roi / 12 / 100;
    setProi(_proi.toFixed(6));
    let invested = pAmt * pCnt;
    setTAmt(invested.toFixed(0));
    let maturityAmt = (pAmt * ((1 + _proi) ** pCnt - 1) * (1 + _proi)) / _proi;
    setMAmt(maturityAmt.toFixed(0));
    setRAmt((maturityAmt - invested).toFixed(0));
  };

  return (
    <>
      <h2>Calculate your SIP</h2>
      <div>
        Principal Amount:
        <input
          type="text"
          name="principal"
          id="principal"
          placeholder="Principal Amount"
          onChange={onChangePAmt}
        />{" "}
        {pAmt}
      </div>
      <div>
        Rate of Return expected:
        <input
          type="text"
          name="roi"
          id="roi"
          placeholder="Rate of Return"
          onChange={onChangeRoi}
        />
        {roi}
      </div>
      <div>
        Number of months to invest:
        <input
          type="text"
          name="payments-count"
          id="payments-count"
          placeholder="Number of Months"
          onChange={onChangePCnt}
        />
        {pCnt}
      </div>
      <div>
        <span id="periodic-roi">
          Periodic ROI: <span id="periodic-roi">{proi}</span>
        </span>
      </div>
      <div>
        <span id="total-amt">
          Invested Amount: <span id="total-amt-value">{tAmt}</span>
        </span>
      </div>
      <div>
        <span id="expected-return">
          Estimated Return: <span id="expected-return-value">{rAmt}</span>
        </span>
      </div>
      <div>
        <span id="maturity-amt">
          Total Maturity Amount: <span id="maturity-amt-value">{mAmt}</span>
        </span>
      </div>
      <div>
        <button id="calc" onClick={calculateMaturity}>
          Calculate
        </button>
      </div>
    </>
  );
};
export default Calculator;
