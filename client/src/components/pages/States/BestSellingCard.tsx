import React from "react";
import Table from "react-bootstrap/Table";

function bestSellingCard(props: { sellInfo: Array<any> }) {
  return (
    <div>
      <h5 className="state-sub-title">Best Selling (Quanitity)</h5>
      <Table striped className="stats-table">
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Quantity Sold</th>
          </tr>
        </thead>
        <tbody>
          {props.sellInfo.map((item) => {
            return (
              <tr>
                <td>{item.productId}</td>
                <td>{item.product["name"]}</td>
                <td>{item.totalQuantity}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default bestSellingCard;
