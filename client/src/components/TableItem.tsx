import React from 'react'

function TableItem(props: {title: string, price: number, desc: string, image: string}) {
    return (
        <tr>
            <td>{props.title}</td>
            <td>{props.price}</td>
            <td>{props.desc}</td>
            <td>{props.image}</td>
        </tr>
    )
}

export default TableItem
