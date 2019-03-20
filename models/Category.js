const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now,
        required: true
    }
});
const Category = mongoose.model('Category', CategorySchema);
module.exports = Category;