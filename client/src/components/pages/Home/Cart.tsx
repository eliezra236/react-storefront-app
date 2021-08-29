import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

function Cart(props: { cartItems: Array<any> }) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Cart ({props.cartItems.length})
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {props.cartItems.map((item) => {
          return <Dropdown.ItemText>{item.name}</Dropdown.ItemText>;
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Cart;
