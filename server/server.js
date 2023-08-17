const express = require('express');
const connectDB = require('./connection');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './.env') });

const PORT = process.env.PORT || 3005;

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const startServer = async () => {
    try {
        await connectDB();

        app.listen(PORT, () => {
            console.log(`Juicy Server 🍒 listening on port ${PORT}!`);
        });
    } catch (err) {
        console.error(`Failed to Connect to MongoDB 😭`, err);
        process.exit(1); // failure code
    }
};

startServer();