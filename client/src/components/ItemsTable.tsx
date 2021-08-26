import React, { useState, useEffect } from "react";
import TableItem from "./TableItem";
import axios from "../variables/myAxios";
import AddModal from "./AddModal";

function ItemsTable() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  function getProducts() {
    axios
      .get("/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) =>
        alert("There was a problem loading the products, please try again"),
      );
  }

  function deleteItem(id) {
    // TODO: delete item from DB
    setProducts((oldProducts) => {
      return oldProducts.filter((product) => product.id !== id);
    });
  }

  function addProduct(productData) {
    // TODO add item to DB
    setProducts((oldProducts) => {
      return [...oldProducts, productData];
    });
  }

  function updateProduct(id, updatedProduct) {
    // TODO update item at DB.
  }

  function testSubmit(event) {
    console.log(event.currentTarget);
    event.preventDefault();
  }

  return (
    <div>
      <h3>All Products</h3>
      <form onSubmit={testSubmit}>
        <label htmlFor="testInput">user</label>
        <input id="testInput" type="text" />
        <button type="submit">submit</button>
      </form>
      <AddModal submitForm={addProduct} />
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <TableItem
              key={product.id}
              title={product.name}
              price={product.price}
              desc={product.description}
              image={product.img}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ItemsTable;
