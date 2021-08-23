import database from './Database';
import products from './data/Products';
import customers from './data/Customers';

async function initialCreate() {
  await database.model('customers').bulkCreate(customers);
  await database.model('products').bulkCreate(products);
}

// initialCreate();


interface Item {
  productId: number,
  quantity: number
}

async function createOrder(customerId: number, items: Array<Item>) {

  const newOrder = await database.model("orders").create({
    customerId: customerId
  });

  const orderItemsModel = database.model('order_items');
  for (let item of items) {
    await orderItemsModel.create({
      orderId: newOrder.getDataValue('id'),
      productId: item.productId,
      quantity: item.quantity
    })
  }
}

// createOrder(1, [
//   { productId: 2, quantity: 3, },
//   { productId: 4, quantity: 5 },
// ])

// createOrder(2, [
//   { productId: 1, quantity: 1, },
//   { productId: 2, quantity: 2 },
// ])

export { createOrder }
