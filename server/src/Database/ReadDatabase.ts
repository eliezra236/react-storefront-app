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

async function getAllOrders() {
  const res = await database.model("orders").findAll(detailedOrder);
  const plainRes = res.map((singleRes: any) => singleRes.get({ plain: true }));

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
  } catch(err) {
    console.log("Error at getAllProducts")
    res = err;
  }
  return res;
}

async function getSingleProduct(id: number) {
  let res;
  try {
    res = await database.model('products').findOne({where: {id: id}})
  } catch(err) {
    console.log("Error at getSingleProduct with id ", id)
    res = err;
  }
  return res;
  
}

export default { getAllOrders, getSingleOrder, getAllProducts, getSingleProduct };