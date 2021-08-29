import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState } from "react";

function HomeCard(props: {
  info: {
    id: any;
    name: string;
    price: number;
    description: string;
    img: string;
    quantity: 1;
  };
  addToCart: (item) => void;
}) {
  function handleAddToCart() {
    props.addToCart(props.info);
  }

  return (
    <Card className="home-card">
      <Card.Img variant="top" src={props.info.img} />
      <Card.Body>
        <Card.Title>{props.info.name}</Card.Title>
        <Card.Text>{props.info.description}</Card.Text>
        <Button onClick={handleAddToCart} variant="primary">
          Add To Cart
        </Button>
      </Card.Body>
    </Card>
  );
}

export default HomeCard;
