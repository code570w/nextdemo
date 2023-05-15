const mongoose = require("mongoose");
mongoose.set('strictQuery', false);


const ProductsSchema = mongoose.Schema({
    product_name:String,
    price:Number,
    description:String,
})
 mongoose.models = {};
 module.exports = mongoose.model('posters',ProductsSchema);
