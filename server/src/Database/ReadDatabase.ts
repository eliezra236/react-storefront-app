import database from './Database';

const detailedOrder = {
    include: [
        {
            model: database.model('order_items'),
            include: [database.model('products')]
        }
    ],
}

async function getAllOrders() {
    console.log(database.models);
    const res = await database.model('orders').findAll(detailedOrder);
    return res;
}

async function getSingleOrder(id: number) {
    const findOneOptions = {where: {id: id}}
    Object.assign(findOneOptions, detailedOrder);
    const res = await database.model('orders').findOne( findOneOptions);
    return res;
}
