import React, { useState } from "react";
import Axios from 'axios';
import TableItem from "./TableItem";
import axios from "axios";

const API_URL = "http://localhost:3000/api/products"

function ItemsTable() {
  const [products, setProducts] = useState([]);

  function deleteItem(id) {
    axios.get(API_URL);
    // TODO: delete item from DB
    setProducts(oldProducts => {
      return oldProducts.filter(product => product.id !== id)
    })
  }

  function addProduct(product) {
    axios.post(API_URL);
    // TODO add item to DB
    setProducts(oldProducts => {
      return [...oldProducts, product]
    })
  }

  function updateProduct(id, updatedProduct) {
    // TODO update item at DB.
  }

  return (
    <div>
      <button>Add</button>

      <table>
        <tr>
          <th>Title</th>
          <th>Price</th>
          <th>Description</th>
          <th>Image</th>
        </tr>
        {products.map(product => {
          <TableItem
            title={product.title}
            price={product.item}
            desc={product.desc}
            image={product.image} />
        })}
      </table>
    </div>
  );
}

export default ItemsTable;
