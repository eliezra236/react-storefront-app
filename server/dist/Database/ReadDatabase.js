"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = __importDefault(require("./Database"));
const detailedOrder = {
    include: [
        {
            model: Database_1.default.model('order_items'),
            include: [Database_1.default.model('products')]
        }
    ],
};
async function getAllOrders() {
    const res = await Database_1.default.model('orders').findAll(detailedOrder);
    return res;
}
async function getSingleOrder(id) {
    const findOneOptions = { where: { id: id } };
    Object.assign(findOneOptions, detailedOrder);
    const res = await Database_1.default.model('orders').findOne(findOneOptions);
    return res;
}
async function getAllProducts() {
    const res = await Database_1.default.model('products').findAll({ raw: true });
    return res;
}
exports.default = { getAllOrders, getSingleOrder, getAllProducts };
