import database from "./Database";
import products from "./data/Products";
import customers from "./data/Customers";
import { IProduct } from './interfaces';

async function initialCreateProducts() {
  await database.model("customers").bulkCreate(customers);
  await database.model("products").bulkCreate(products);
}

async function initialCreateOrders() {
  await createOrder(1, [
    { productId: 2, quantity: 3, totalPrice: 3 },
    { productId: 4, quantity: 5, totalPrice: 5 },
  ]);

  await createOrder(2, [
    { productId: 1, quantity: 1, totalPrice: 5 },
    { productId: 2, quantity: 2, totalPrice: 2 },
  ]);
}

// uncomment for initial
// initialCreateProducts();
// initialCreateOrders();

interface IOrderItem {
  productId: number;
  quantity: number;
  totalPrice: number;
}

async function createOrder(customerId: number, items: Array<IOrderItem>) {
  const newOrder = await database.model("orders").create({
    customerId: customerId,
  });

  const orderItemsModel = database.model("order_items");
  for (let item of items) {
    await orderItemsModel.create({
      orderId: newOrder.getDataValue("id"),
      productId: item.productId,
      quantity: item.quantity,
      totalPrice: item.totalPrice,
    });
  }
}

async function addProduct(newProduct: IProduct) {
  const res = await database.model("products").create(newProduct);

  return res.get({ plain: true });
}

async function editProduct(id: number, editedProduct: IProduct) {
  let record;
  try {
    record = await database.model("products").findOne({ where: { id: id } });
    Object.assign(record, editedProduct);
    await record?.save();
  } catch (err) {
    console.log("couldn't edit ", editedProduct, " at id ", id);
    return err;
  }
  return record.get({plain: true});
}

async function deleteProduct(id: number) {
  // paranoid is set to true, so it just soft delete.
  await database.model("products").destroy({ where: { id: id } });
  
  return true;
}



export default { createOrder, addProduct, editProduct, deleteProduct };
