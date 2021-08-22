"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    product_name;
    product_price;
    product_description;
    product_img;
    product_stock;
    constructor(product_name, product_price, product_description, product_img, product_stock) {
        this.product_name = product_name;
        this.product_price = product_price;
        this.product_description = product_description;
        this.product_img = product_img;
        this.product_stock = product_stock;
    }
}
const products = [
    new Product("Bonus Heart", 3, "Adds an additional hit point but lightly weakens your attack power", "https://static.wikia.nocookie.net/cuphead/images/e/e8/Heart_Charm.png/revision/latest/scale-to-width-down/85?cb=20180323191534", 10),
    new Product("Smoke Bomb", 7, "You will not take damage during a dash. A great defense maneuver.", "https://static.wikia.nocookie.net/cuphead/images/f/f2/Smoke_Dash.png/revision/latest/scale-to-width-down/84?cb=20180323191733", 20),
    new Product("P. Sugar", 3, "The first parry move is automatic -- all you need to do is jump", "https://static.wikia.nocookie.net/cuphead/images/c/cb/P_Sugar.png/revision/latest/scale-to-width-down/118?cb=20180323192053", 20),
    new Product("Coffee", 3, "Super meter continuously fills -- in addition to what you earn", "https://static.wikia.nocookie.net/cuphead/images/e/e9/Coffee.png/revision/latest/scale-to-width-down/85?cb=20180323192238", 20),
    new Product("Twin Heart", 5, "Adds two additional hit points but weakens your attack power.", "https://static.wikia.nocookie.net/cuphead/images/a/a5/Twin_Heart_Charm.png/revision/latest/scale-to-width-down/89?cb=20180323192505", 20),
    new Product("Whetstone", 3, "Your first parry move doubles as a damaging axe attack", "https://static.wikia.nocookie.net/cuphead/images/9/9f/Whetstone.png/revision/latest/scale-to-width-down/163?cb=20180323191429", 20),
];
exports.default = products;
