require('dotenv').config({ path: '../../.env' })
import express from 'express';
import readDB from './Database/readDatabase';

const app = express();


app.listen(5000, () => {
    console.log("listening on port 5000")
})

app.get('/products', async (req, res) => {
    const dbRes = readDB.getAllProducts();
    res.send(dbRes);
})