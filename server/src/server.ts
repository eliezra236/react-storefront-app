require("dotenv").config({ path: "../../.env" });
import express from "express";
import cors from 'cors';
import readDB from "./Database/ReadDatabase";
import writeToDB from "./Database/WriteToDB";
import { IProduct } from "./Database/interfaces";


const app = express();
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.listen(5000, () => {
  console.log("listening on port 5000");
});

// Status
// 422 - InvalidArgumentException: wrong input


// requests for all products

app
  .route("/products/")
  .get(async (req, res) => {
    const dbRes = await readDB.getAllProducts();
    res.send(dbRes);
  })
  .post(async (req, res, next) => {
    // test it with axios
    console.log(req.body);
    try {
      const dbRes = await writeToDB.addProduct(req.body);
      res.send(res);
    } catch(err) {
      res.status(422).send({ message: "Incorrect Product, please follow the schema", schema: JSON.stringify(IProduct)})
    }
  });




// requests for specific product

app
  .route("/products/:id")
  .get(async (req, res) => {
    const dbRes = await readDB.getSingleProduct(parseInt(req.params.id));
    res.send(dbRes);
  })
  .put(async (req, res) => {
    // TODO: test with Axios
    res.send(true);
  })
  .delete(async (req, res) => {
    const dbRes = await writeToDB.deleteProduct(parseInt(req.params.id));
    res.send(dbRes);
  });
