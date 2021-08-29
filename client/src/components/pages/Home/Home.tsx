import React, { useState, useEffect } from "react";
import axios from "../../../variables/myAxios";
import CardGroup from "react-bootstrap/CardGroup"
import HomeCard from "./HomeCard";
import Container from "react-bootstrap/esm/Container";
import Cart from "./Cart";

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
    const newCartItems = [...cartItems];
    const foundItem = newCartItems.find((item) => item.id === newItem.id);
    foundItem ? foundItem.quantity++ : newCartItems.push(newItem);
    console.log(newCartItems);
    setCartItems(newCartItems);
  }

  function removeFromCart(id) {
    setCartItems(oldItems => oldItems.filter(item => !item.id === id));
  }

  return (
    <Container>
      <Cart cartItems={cartItems} />
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
