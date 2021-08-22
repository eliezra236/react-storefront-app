import database  from './Database';
const products = require('./data/Products');
const customers = require('./data/Customers');

async function initialCreate() {
    database.model('customers').bulkCreate(customers);
    database.model('products').bulkCreate(products);
}

interface Item {
  product_id: number,
  quantity: number
}

async function createOrder(customer_id: number, items: Array<Item>) {

    const newOrder = await database.model("orders").create({
      customer_id: customer_id
    });

    const orderItemsModel = database.model('order_items');
    for(let item of items) {
        await orderItemsModel.create({
          order_id: newOrder.getDataValue('order_id'),
          product_id: item.product_id,
          quantity: item.quantity 
        })
    }
}

createOrder(1, [{
  product_id: 2,
  quantity: 3,
}, {product_id: 4, quantity: 5},
])

createOrder(2, [
  {product_id: 1, quantity: 1,}, 
  {product_id: 2, quantity: 2},
])

export { createOrder }
