import React, { useState, useEffect } from "react";
import axios from "../../variables/myAxios";
import CardGroup from "react-bootstrap/CardGroup";
import Dropdown from "react-bootstrap/Dropdown";
import HomeCard from "../HomeCard";
import Container from "react-bootstrap/esm/Container";

function Home() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  function getProducts() {
    axios
      .get("/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => alert(err));
  }

  function addToCart(newItem) {
    // TODO: fix the quantity problem (not getting it)
    const newCartItems = [...cartItems];
    const foundItem = newCartItems.find((item) => item.id === newItem.id);
    foundItem ? foundItem.quantity++ : newCartItems.push(newItem);
    console.log(newCartItems);
    setCartItems(newCartItems);
  }

  return (
    <Container>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Cart ({cartItems.length})
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {cartItems.map((item) => {
            return <Dropdown.ItemText>{item.name}</Dropdown.ItemText>;
          })}
        </Dropdown.Menu>
      </Dropdown>
      <CardGroup>
        {products.map((product) => (
          <HomeCard
            key={product.id}
            info={{ ...product }}
            addToCart={addToCart}
          />
        ))}
      </CardGroup>
    </Container>
  );
}

export default Home;
