import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";

function Cart(props: {
  cartItems: Array<any>;
  removeFromCart: (id: number) => void;
  checkoutFunc: () => void;
}) {
  function handleRemove(id) {
    props.removeFromCart(id);
  }
  return (
    <Dropdown className="pb-3">
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Cart ({props.cartItems.length})
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {props.cartItems.map((item) => {
          return (
            <Dropdown.ItemText className="cart-item" key={item.id}>
              <span>
                {item.name} (x{item.quantity})
              </span>
              <span>
                <button
                  className="cart-remove-button"
                  onClick={() => handleRemove(item.id)}
                >
                  x
                </button>
              </span>
            </Dropdown.ItemText>
          );
        })}
        <Dropdown.ItemText>
          Total:{" $"}
          {props.cartItems.reduce(
            (prev, curr) => (prev += curr.quantity * curr.price),
            0,
          )}
        </Dropdown.ItemText>
        <Dropdown.ItemText>
          <Button onClick={props.checkoutFunc}>Pay Now</Button>{" "}
        </Dropdown.ItemText>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Cart;
