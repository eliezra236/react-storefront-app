import React from "react";
import Table from "react-bootstrap/Table";

function UniqueSalesCard(props: { sellInfo: Array<any> }) {
  return (
    <div>
      <h5>Best Selling (Unique Orders)</h5>
      <Table striped>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Number Of Orders</th>
          </tr>
        </thead>
        <tbody>
          {props.sellInfo.map((item) => {
            return (
              <tr>
                <td>{item.productId}</td>
                <td>{item.product["name"]}</td>
                <td>{item.totalOrders}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default UniqueSalesCard;
