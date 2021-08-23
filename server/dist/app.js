"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config({ path: '../../.env' });
const express_1 = __importDefault(require("express"));
const readDatabase_1 = __importDefault(require("./Database/readDatabase"));
const app = express_1.default();
app.listen(5000, () => {
    console.log("listening on port 5000");
    console.log(process.env.DB_HOST);
    readDatabase_1.default.getAllOrders().then(res => console.log(res));
});
app.get('/products', (req, res) => {
});
