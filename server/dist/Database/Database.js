"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config({ path: __dirname + "/../../.env" });
const sequelize_1 = require("sequelize");
console.log(process.env.DB_NAME);
const sequelize = new sequelize_1.Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    dialect: "mysql",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    logging: false,
});
async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    }
    catch (error) {
        console.error("Unable to connect to the database:", error);
        throw error;
    }
}
testConnection();
const Product = sequelize.define("products", {
    product_id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    product_name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    product_price: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    product_description: sequelize_1.DataTypes.STRING,
    product_img: sequelize_1.DataTypes.STRING(2100),
    product_stock: sequelize_1.DataTypes.INTEGER,
}, { tableName: "products" });
const Customer = sequelize.define("customers", {
    customer_id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    first_name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    last_name: sequelize_1.DataTypes.STRING,
}, { tableName: "customers" });
const Order = sequelize.define("orders", {
    order_id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    customer_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, { tableName: "orders" });
const OrderItems = sequelize.define("order_items", {
    order_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    product_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    quantity: sequelize_1.DataTypes.INTEGER,
}, { tableName: "order_items" });
// Relations
let options = {
    foreignKey: 'customer_id',
};
// Order
Customer.hasMany(Order, options);
Order.belongsTo(Customer, options);
// Order Items
options.foreignKey = "order_id";
Order.hasMany(OrderItems, options);
OrderItems.belongsTo(Order, options);
options.foreignKey = 'product_id';
Product.hasMany(OrderItems, options);
OrderItems.belongsTo(Product, options);
sequelize.sync({ alter: true });
module.exports = sequelize;
