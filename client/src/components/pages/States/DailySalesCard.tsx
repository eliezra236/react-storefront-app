import React from 'react'

function DailySalesCard(props: {sellInfo: Array<any>}) {
    return (
      <div>
        <table>
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
        </table>
      </div>
    );
}

export default DailySalesCard
