require("dotenv").config({ path: "../../.env" });
import express from "express";
import cors from "cors";
import readDB from "./Database/ReadDatabase";
import writeToDB from "./Database/WriteToDB";

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
  .post(async (req, res) => {
    try {
      const dbRes = await writeToDB.addProduct(req.body);
      res.send("Item was added successfully");
    } catch (err) {
      console.log("failed", err);
      res
        .status(422)
        .send({ message: "Incorrect Product, please follow the schema" });
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
    try {
      const dbRes = await writeToDB.editProduct(
        parseInt(req.params.id),
        req.body,
      );
      res.send("Edit Was successfull");
    } catch (err) {
      res.status(400).send({ message: "couldn't edit, check your schema" });
    }
  })
  .delete(async (req, res) => {
    try {
      const dbRes = await writeToDB.deleteProduct(parseInt(req.params.id));
      res.send(dbRes);
    } catch (err) {
      res.status(400).send({ message: "couldn't delete, check your schema" });
    }
  });

// REQUEST FOR ORDERS
app.route("/orders").post((req, res) => {
  try {
    // Right now there is no customers difference so all are for customer 1.
    const dbRes = writeToDB.createOrder(1, req.body);
    res.send("Order was created succesfully");
  } catch (err) {
    res
      .status(422)
      .send({ message: "Invalid Order, please follow the schema" });
  }
});

app.route("/orders").post((req, res) => {
  try {
    // Right now there is no customers difference so all are for customer 1.
    const dbRes = writeToDB.createOrder(1, req.body);
    res.send("Order was created succesfully");
  } catch (err) {
    res
      .status(422)
      .send({ message: "Invalid Order, please follow the schema" });
  }
});


// REQUEST FOR STATISTICS
app.get("/stats/uniquebestselling/:limit", async (req, res) => {
  try {
    const dbRes = await readDB.getUniqueBestSelling(parseInt(req.params.limit));
    res.send(dbRes);
  }
  catch(err) {
    res.status(400).send({ message: "There was a problem getting the unique best selling data"})
  }
})

app.get("/stats/bestselling/:limit", async (req, res) => {
  try {
    const dbRes = await readDB.getBestSelling(parseInt(req.params.limit));
    res.send(dbRes);
  }
  catch(err) {
    res.status(400).send({ message: "There was a problem getting the best selling data"})
  }
})


app.get("/stats/lastdayssales/:days", async (req, res) => {
  try {
    const dbRes = await readDB.getLastDaysSales(parseInt(req.params.days));
    res.send(dbRes);
  }
  catch(err) {
    res.status(400).send({ message: "There was a problem getting the last days data"})
  }
})

