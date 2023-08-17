const mongoose = require('mongoose');
const connectDB = require('./connection');
const Juice = require('./src/models/Juice');

const juices = [
    {
        name: 'Juice 1',
        style: 'Sassy'
    },
    {
        name: 'Juice 2',
        style: 'Silly'
    },
    {
        name: 'Juice 3',
        style: 'Saucy'
    }
];

const seedDB = async () => {
    // Connect to DB
    await connectDB();

    // Clean DB
    await Juice.deleteMany({});

    // Insert Juices
    await Juice.insertMany(juices);

    console.log('DB Seeded!');
    mongoose.connection.close();
};

seedDB();