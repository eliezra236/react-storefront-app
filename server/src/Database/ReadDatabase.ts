import database  from './Database';

async function getAllOrders() {
    const res = await database.model('orders').findAll();

    // @ts-ignore
    console.log(await res[4].getItems());
}

getAllOrders();