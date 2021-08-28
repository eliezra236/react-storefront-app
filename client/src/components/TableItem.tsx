import React from "react";
import EditItemModal from "./EditItemModal";

function TableItem(props: {
  id: any;
  name: string;
  price: number;
  description: string;
  image: string;
  deleteFunction: (id: number) => void;
  editFunction: (id: number, editedItem: {any}) => void;
}) {
  function handleDelete() {
    props.deleteFunction(props.id)
  }
  return (
    <tr>
      <td>
        <img src={props.image} alt="Product" />
      </td>
      <td>{props.name}</td>
      <td>{props.price}</td>
      <td>{props.description}</td>
      <td>
        <EditItemModal itemProps={props}/>
        <button onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
}

export default TableItem;
