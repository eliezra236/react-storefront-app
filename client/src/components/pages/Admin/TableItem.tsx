import React from "react";
import EditItemModal from "./EditItemModal";
import Button from "react-bootstrap/Button";

function TableItem(props: {
  id: any;
  name: string;
  price: number;
  description: string;
  image: string;
  deleteFunction: (id: number) => void;
  editFunction: (id: number, editedItem: { any }) => void;
}) {
  function handleDelete() {
    props.deleteFunction(props.id);
  }
  return (
    <tr>
      <td>
        <img src={props.image} alt="Product" />
      </td>
      <td>{props.name}</td>
      <td>{props.price}</td>
      <td>{props.description}</td>
      <td className="options-td">
        <div className="buttons-container">
          <EditItemModal itemProps={props} />
          <Button className="ms-4" variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </div>
      </td>
    </tr>
  );
}

export default TableItem;
