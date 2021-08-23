"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: '../../../.env' });
const sequelize_1 = require("sequelize");
console.log(process.env.DB_USER);
const sequelize = new sequelize_1.Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    dialect: "mysql",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
});
// async function testConnection() {
//   try {
//     await sequelize.authenticate();
//     console.log("Connection has been established successfully.");
//   } catch (error) {
//     console.error("Unable to connect to the database:", error);
//     throw error;
//   }
// }
// testConnection();
const Product = sequelize.define("products", {
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    description: sequelize_1.DataTypes.STRING,
    img: sequelize_1.DataTypes.STRING(2100),
    stock: sequelize_1.DataTypes.INTEGER,
}, { tableName: "products" });
const Customer = sequelize.define("customers", {
    firstName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    lastName: sequelize_1.DataTypes.STRING,
}, { tableName: "customers" });
const Order = sequelize.define("orders", {}, { tableName: "orders" });
Customer.hasMany(Order);
Order.belongsTo(Customer);
const OrderItem = sequelize.define("order_items", {
    quantity: sequelize_1.DataTypes.INTEGER,
}, { tableName: "order_items" });
Order.hasMany(OrderItem);
OrderItem.belongsTo(Order);
Product.hasMany(OrderItem);
OrderItem.belongsTo(Product);
// sequelize.sync({force: true});
exports.default = sequelize;
