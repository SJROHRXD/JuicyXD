const { Schema } = require('mongoose');

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

module.exports = juiceSchema;