const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//https://www.mongodb.com/developer/products/mongodb/mongodb-schema-design-best-practices/

const juiceSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    style: {
        type: String,
    }
});

const Juice = mongoose.model('Juice', juiceSchema);
module.exports = Juice;