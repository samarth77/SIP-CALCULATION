import React, { useState, useEffect } from "react";

const Calculator = function ({ handleCalc }) {
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

    const columns = {
      month: 0,
      amount: 1,
      month_return: 2,
      total: 3,
      rrpm: 4,
      invested: 5,
    };
    const CAGR_ReturnRate = roi / 12;
    const data = [];
    for (let i = 0; i < pCnt; i++) {
      const row = [];
      //   for (let j = 0; j < Object.keys(columns).length; j++) {
      if (row[i] == undefined) {
        row[columns.month] = i + 1;
        row[columns.invested] = Number(pAmt);
        row[columns.amount] =
          i == 0
            ? Number(pAmt)
            : Number(
                Number(data[i - 1][columns.total]) +
                  Number(row[columns.invested])
              ).toFixed(2);
        row[columns.rrpm] = Number(CAGR_ReturnRate).toFixed(2);
        row[columns.month_return] = Number(
          (Number(row[columns.amount]) * Number(row[columns.rrpm])) / 100
        ).toFixed(2);
        row[columns.total] = Number(
          Number(row[columns.amount]) + Number(row[columns.month_return])
        ).toFixed(2);
      }
      data[i] = row;
    }
    // const data = [
    //   [2000.0, 25.0, 2025.0, 1.25, 2000],
    //   [4025.0, 50.31, 4075.31, 1.25, 2000],
    //   [6075.31, 75.94, 6151.25, 1.25, 2000],
    //   [8151.25, 101.89, 8253.14, 1.25, 2000],
    //   [10253.14, 128.16, 10381.31, 1.25, 2000],
    //   [12381.31, 154.77, 12536.08, 1.25, 2000],
    //   [14536.08, 181.7, 14717.78, 1.25, 2000],
    //   [16717.78, 208.97, 16926.75, 1.25, 2000],
    //   [18926.75, 236.58, 19163.33, 1.25, 2000],
    //   [21163.33, 264.54, 21427.87, 1.25, 2000],
    //   [23427.87, 292.85, 23720.72, 1.25, 2000],
    //   [25720.72, 321.51, 26042.23, 1.25, 2000],
    //   [2000.0, 25.0, 2025.0, 1.25, 2000],
    //   [4025.0, 50.31, 4075.31, 1.25, 2000],
    //   [6075.31, 75.94, 6151.25, 1.25, 2000],
    //   [8151.25, 101.89, 8253.14, 1.25, 2000],
    //   [10253.14, 128.16, 10381.31, 1.25, 2000],
    //   [12381.31, 154.77, 12536.08, 1.25, 2000],
    //   [14536.08, 181.7, 14717.78, 1.25, 2000],
    //   [16717.78, 208.97, 16926.75, 1.25, 2000],
    //   [18926.75, 236.58, 19163.33, 1.25, 2000],
    //   [21163.33, 264.54, 21427.87, 1.25, 2000],
    //   [23427.87, 292.85, 23720.72, 1.25, 2000],
    //   [25720.72, 321.51, 26042.23, 1.25, 2000],
    //   [2000.0, 25.0, 2025.0, 1.25, 2000],
    //   [4025.0, 50.31, 4075.31, 1.25, 2000],
    //   [6075.31, 75.94, 6151.25, 1.25, 2000],
    //   [8151.25, 101.89, 8253.14, 1.25, 2000],
    //   [10253.14, 128.16, 10381.31, 1.25, 2000],
    //   [12381.31, 154.77, 12536.08, 1.25, 2000],
    //   [14536.08, 181.7, 14717.78, 1.25, 2000],
    //   [16717.78, 208.97, 16926.75, 1.25, 2000],
    //   [18926.75, 236.58, 19163.33, 1.25, 2000],
    //   [21163.33, 264.54, 21427.87, 1.25, 2000],
    //   [23427.87, 292.85, 23720.72, 1.25, 2000],
    //   [25720.72, 321.51, 26042.23, 1.25, 2000],
    // ];
    handleCalc(data);
  };

  return (
    <>
      <h2>Calculate your SIP</h2>
      <table>
        <tbody>
          <tr>
            <td>Monthly Principal Amount:</td>
            <td>
              <input
                type="text"
                name="principal"
                id="principal"
                placeholder="Principal Amount"
                onChange={onChangePAmt}
              />{" "}
            </td>
          </tr>
          <tr>
            <td>Rate of Return expected:</td>
            <td>
              <input
                type="text"
                name="roi"
                id="roi"
                placeholder="Rate of Return"
                onChange={onChangeRoi}
              />
            </td>
          </tr>
          <tr>
            <td>Number of months to invest:</td>
            <td>
              <input
                type="text"
                name="payments-count"
                id="payments-count"
                placeholder="Number of Months"
                onChange={onChangePCnt}
              />
            </td>
          </tr>
          <tr>
            <td> Periodic ROI: </td>
            <td>
              <span id="periodic-roi">
                <span id="periodic-roi">{proi}</span>
              </span>
            </td>
          </tr>
          <tr>
            <td>Invested Amount:</td>
            <td>
              <span id="total-amt">
                <span id="total-amt-value">₹ {tAmt}</span>
              </span>
            </td>
          </tr>
          <tr>
            <td>Estimated Return: </td>
            <td>
              <span id="expected-return">
                <span id="expected-return-value">₹ {rAmt}</span>
              </span>
            </td>
          </tr>
          <tr>
            <td>Total Maturity Amount:</td>
            <td>
              <span id="maturity-amt">
                <span id="maturity-amt-value"> ₹ {mAmt}</span>
              </span>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <button id="calc" onClick={calculateMaturity}>
                Calculate
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
export default Calculator;
