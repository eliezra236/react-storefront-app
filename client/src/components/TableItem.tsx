import React from "react";

function TableItem(props: {
  id: any;
  title: string;
  price: number;
  desc: string;
  image: string;
  deleteFunction: (id: number) => void;
}) {
  function handleDelete() {
    props.deleteFunction(props.id)
  }
  return (
    <tr>
      <td>
        <img src={props.image} alt="Product" />
      </td>
      <td>{props.title}</td>
      <td>{props.price}</td>
      <td>{props.desc}</td>
      <td>
        <button>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
}

export default TableItem;
