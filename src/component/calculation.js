import React from "react";

export function MonthRow({ row, i }) {
  return (
    <>
      {row.map((col) => {
        return <td style={{ border: "1px solid" }}>{col}</td>;
      })}
    </>
  );
}

export default function Calculation({ stats }) {
  return (
    <>
      <div></div>
      <table style={{ border: "1px solid" }}>
        <thead>
          <tr style={{ border: "1px solid" }}>
            <td style={{ border: "1px solid" }}>Month</td>
            <td style={{ border: "1px solid" }}>Amount</td>
            <td style={{ border: "1px solid" }}>Return</td>
            <td style={{ border: "1px solid" }}>Total</td>
            <td style={{ border: "1px solid" }}>Return Rate (per month)</td>
            <td style={{ border: "1px solid" }}>Monthly Investment</td>
          </tr>
        </thead>
        <tbody>
          {stats &&
            stats.map((row, i) => {
              return (
                <tr key={i} style={{ border: "1px solid" }}>
                  <MonthRow row={row} i={i} />
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}
