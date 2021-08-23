import database from './Database';

// All read options plain:true remove all the meta data (prevResults, etc...) to make it lighter as JSON.


// Options in order to make the query return the foregin keys as well, to get full order details
const detailedOrder = {
    include: [
        {
            model: database.model('order_items'),
            include: [database.model('products')]
        }
    ],
}

async function getAllOrders() {
    const res = await database.model('orders').findAll(detailedOrder);
    const plainRes = res.map(singleRes => singleRes.get({plain: true}));

    return plainRes;
}

async function getSingleOrder(id: number) {
    const findOneOptions = {where: {id: id}}
    Object.assign(findOneOptions, detailedOrder);
    const res = await database.model('orders').findOne( findOneOptions);
    return res?.get({plain: true});
}

async function getAllProducts() {
    const res = await database.model('products').findAll({raw: true});
    return res;
}

export default { getAllOrders, getSingleOrder, getAllProducts }