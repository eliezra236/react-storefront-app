import React from 'react'

function UniqueSalesCard(props: {sellInfo: Array<any>}) {
    return (
      <div>
        <table>
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
        </table>
      </div>
    );
}

export default UniqueSalesCard
