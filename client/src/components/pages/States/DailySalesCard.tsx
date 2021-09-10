import React from "react";
import Table from "react-bootstrap/Table";

function DailySalesCard(props: { sellInfo: Array<any> }) {
  return (
    <div>
      <h5 className="state-sub-title">Daily Sales</h5>
      <Table striped>
        <thead>
          <tr>
            <th>Date</th>
            <th>Total Sales</th>
          </tr>
        </thead>
        <tbody>
          {props.sellInfo.map((dayInfo) => {
            return (
              <tr>
                <td>{dayInfo.Date}</td>
                <td>{dayInfo.totalSales}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default DailySalesCard;
