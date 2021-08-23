require('dotenv').config({ path: '../../../.env' })
import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize(
  process.env.DB_NAME!,
  process.env.DB_USER!,
  process.env.DB_PASS!,
  {
    dialect: "mysql",
    host: process.env.DB_HOST!,
    port: parseInt(process.env.DB_PORT!),
  }
);

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

const Product = sequelize.define(
  "products",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: DataTypes.STRING,
    img: DataTypes.STRING(2100),
    stock: DataTypes.INTEGER,
  },
  { tableName: "products" }
);

const Customer = sequelize.define(
  "customers",
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: DataTypes.STRING,
  },
  { tableName: "customers" }
);

const Order = sequelize.define(
  "orders",
  {},
  { tableName: "orders" }
);

Customer.hasMany(Order);
Order.belongsTo(Customer);

const OrderItem = sequelize.define(
  "order_items",
  {
    quantity: DataTypes.INTEGER,
  },
  { tableName: "order_items" }
);

Order.hasMany(OrderItem);
OrderItem.belongsTo(Order);

Product.hasMany(OrderItem);
OrderItem.belongsTo(Product);

// sequelize.sync({force: true});

export default sequelize;
