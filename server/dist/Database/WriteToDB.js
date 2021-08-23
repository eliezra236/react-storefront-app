"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrder = void 0;
const Database_1 = __importDefault(require("./Database"));
const Products_1 = __importDefault(require("./data/Products"));
const Customers_1 = __importDefault(require("./data/Customers"));
async function initialCreate() {
    await Database_1.default.model('customers').bulkCreate(Customers_1.default);
    await Database_1.default.model('products').bulkCreate(Products_1.default);
}
async function createOrder(customerId, items) {
    const newOrder = await Database_1.default.model("orders").create({
        customerId: customerId
    });
    const orderItemsModel = Database_1.default.model('order_items');
    for (let item of items) {
        await orderItemsModel.create({
            orderId: newOrder.getDataValue('id'),
            productId: item.productId,
            quantity: item.quantity
        });
    }
}
exports.createOrder = createOrder;
