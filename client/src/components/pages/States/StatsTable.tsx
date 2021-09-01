import React from "react";

function StatsTable(props: { headers: Array<string>; data: [] }) {
  return (
    <table>
      <thead>
        <tr>
          {props.headers.map((header) => (
            <th>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.data.map((item) => {
          return (
            <tr>
              <td>{item}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default StatsTable;
