import sequelize, {Op} from "sequelize";
import database from "./Database";

// All read options plain:true remove all the meta data (prevResults, etc...) to make it lighter as JSON.

// Options in order to make the query return the foregin keys as well, to get full order details
// Set paranoid to false to get product info even if product was deleted.
const detailedOrder = {
  include: [
    {
      model: database.model("order_items"),
      include: [{ model: database.model("products"), paranoid: false }],
    },
  ],
};

const getPlainRes = (res) => res.map((item) => item.get({ plain: true }));

async function getAllOrders() {
  const res = await database.model("orders").findAll(detailedOrder);
  const plainRes = getPlainRes(res);

  return plainRes;
}

async function getSingleOrder(id: number) {
  const findOneOptions = { where: { id: id } };
  Object.assign(findOneOptions, detailedOrder);
  const res = await database.model("orders").findOne(findOneOptions);
  return res?.get({ plain: true });
}

async function getAllProducts() {
  let res;
  try {
    res = await database.model("products").findAll({ raw: true });
  } catch (err) {
    console.log("Error at getAllProducts");
    res = err;
  }
  return res;
}

async function getSingleProduct(id: number) {
  let res;
  try {
    res = await database.model("products").findOne({ where: { id: id } });
  } catch (err) {
    console.log("Error at getSingleProduct with id ", id);
    res = err;
  }
  return res;
}

async function getBestSelling(limit: number) {
  const res = await database.model("order_items").findAll({
    attributes: [
      "productId",
      [sequelize.fn("sum", sequelize.col("quantity")), "totalQuantity"],
    ],
    group: ["productId"],
    include: [{ model: database.model("products") }],
    order: [[sequelize.col("totalQuantity"), "DESC"]],
    limit: limit,
  });
  const plainRes = getPlainRes(res);

  return plainRes;
}

async function getUniqueBestSelling(limit: number) {
  const res = await database.model("order_items").findAll({
    attributes: [
      "productId",
      [sequelize.fn("count", sequelize.col("productId")), "totalOrders"],
    ],
    group: ["productId"],
    include: [{ model: database.model("products") }],
    order: [[sequelize.col("totalOrders"), "DESC"]],
    limit: limit,
  });
  const plainRes = getPlainRes(res);

  return plainRes;
}

async function getLastDaysSales(days: number) {
  const res = await database.model("order_items").findAll({
    where: {
      createdAt: {
        [Op.lt]: new Date(),
        [Op.gt]: new Date(new Date().getTime() - days * 24 * 60 * 60 * 1000)
      },
    },
    attributes: [
      /* add other attributes you may need from your table */
      [sequelize.fn('DATE', sequelize.col('createdAt')), 'Date'],
      [sequelize.fn('sum', sequelize.col('totalPrice')), 'totalSales']
    ],
    group: 'Date'
  });

  const plainRes = getPlainRes(res);
  return plainRes;
}

export default {
  getAllOrders,
  getSingleOrder,
  getAllProducts,
  getSingleProduct,
  getBestSelling,
  getUniqueBestSelling,
  getLastDaysSales,
};
