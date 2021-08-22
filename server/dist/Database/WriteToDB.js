"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database = require('./Database');
const products = require('./data/Products');
const customers = require('./data/Customers');
async function initialCreate() {
    database.model('customers').bulkCreate(customers);
    database.model('products').bulkCreate(products);
}
async function createOrder(customer_id, items) {
    const newOrder = await database.model("orders").create({
        customer_id: customer_id
    });
    const orderItemsModel = database.model('orderItems');
    for (let item of items) {
        await orderItemsModel.create({
            order_id: newOrder.getDataValue('order_id'),
            product_id: item.product_id,
            quantity: item.quantity
        });
    }
}
createOrder(1, [{
        product_id: 2,
        quantity: 3,
    }, { product_id: 4, quantity: 5 },
]);
createOrder(2, [
    { product_id: 1, quantity: 1, },
    { product_id: 2, quantity: 2 },
]);
// createOrder(2, [{product_id: 1,}])
exports.createOrder = createOrder;
