import React from 'react'

function bestSellingCard(props: {sellInfo: Array<any>}) {
    return (
      <div>
        <table>
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
                  <td>{item.product['name']}</td>
                  <td>{item.totalQuantity}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
}

export default bestSellingCard
