const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './.env') });

// const db = process.env.MONGODB_URI || 'mongodb://localhost:27017/juicycluster';

const DB_USER = process.env.DB_USER;
const DB_PASS = encodeURIComponent(process.env.DB_PASS);
const DB_CLUSTER = process.env.DB_CLUSTER;

const db = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_CLUSTER}/?retryWrites=true&w=majority`;

console.log('DB_USER:', DB_USER);

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('MongoDB connected');
    } catch (err) {
        console.error('Failed to connect to MongoDB', err);
    }
};

module.exports = connectDB;