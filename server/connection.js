const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './.env') });

// TODO:
// const db = process.env.MONGODB_URI || 'mongodb://localhost:27017/juicycluster';

const DB_USER = process.env.DB_USER;
const DB_PASS = encodeURIComponent(process.env.DB_PASS);
const DB_CLUSTER = process.env.DB_CLUSTER;

const db = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_CLUSTER}/?retryWrites=true&w=majority`;

console.log('DB_USER:', DB_USER);
console.log('DB_CLUSTER:', DB_CLUSTER);

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log(`Juicy Server 🍒 connected to MongoDB!`);
    } catch (err) {
        console.error(`Failed to Connect to MongoDB 😭`, err);
    }
};

module.exports = connectDB;