import React from 'react'

function TableItem(props: {title: string, price: number, desc: string, image: string}) {
    return (
        <tr>
            <td><img src={props.image} alt="Product" /></td>
            <td>{props.title}</td>
            <td>{props.price}</td>
            <td>{props.desc}</td>
            <td>
                <button>Edit</button>
                <button>Delete</button>
            </td>
        </tr>
    )
}

export default TableItem
