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
    logging: false,
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
    product_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    product_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    product_description: DataTypes.STRING,
    product_img: DataTypes.STRING(2100),
    product_stock: DataTypes.INTEGER,
  },
  { tableName: "products" }
);

const Customer = sequelize.define(
  "customers",
  {
    customer_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: DataTypes.STRING,
  },
  { tableName: "customers" }
);

const Order = sequelize.define(
  "orders",
  {
    order_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { tableName: "orders" }
);

const OrderItems = sequelize.define(
  "order_items",
  {
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: DataTypes.INTEGER,
  },
  { tableName: "order_items" }
);

// Relations

let options = {
  foreignKey: 'customer_id',
  as: 'customer'
};

// Order
Customer.hasMany(Order, options);
Order.belongsTo(Customer, options);


// Order Items
options.foreignKey = "order_id";
options.as = "items"
Order.hasMany(OrderItems, options);
OrderItems.belongsTo(Order, options);

options.foreignKey = 'product_id';
options.as = 'product'
Product.hasMany(OrderItems, options);
OrderItems.belongsTo(Product, options);

sequelize.sync({ alter: true });

export default sequelize;
