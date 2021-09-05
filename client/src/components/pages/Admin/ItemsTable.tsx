import React, { useState, useEffect } from "react";
import TableItem from "./TableItem";
import axios from "../../../variables/myAxios";
import AddModal from "./AddItemModal";

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

  function deleteItem(id: any) {
    axios
      .delete("/products/" + id)
      .then((res) => getProducts())
      .catch((err) => alert(err));
  }

  function addProduct(productData) {
    axios
      .post("/products", productData)
      .then((res) => getProducts())
      .catch((err) => alert(err));
  }

  function editItem(id, editedProduct) {
    axios
      .put("/products/" + id, editedProduct)
      .then((res) => getProducts())
      .catch((err) => alert(err));
    // TODO update item at DB.
  }

  return (
    <div>
      <h3>All Products</h3>

      <AddModal submitForm={addProduct} />
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <TableItem
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              description={product.description}
              image={product.img}
              deleteFunction={deleteItem}
              editFunction={editItem}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ItemsTable;
