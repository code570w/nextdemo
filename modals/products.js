const mongoose = require("mongoose");
mongoose.set('strictQuery', false);


const ProductsSchema = mongoose.Schema({
    product_name:String,
    price:Number,
    category:  { type: String, default: 'none' },
    description:String,
    status:{ type: Boolean, default: true },
})
 mongoose.models = {};
  module.exports = mongoose.model('products',ProductsSchema,'products');
// module.exports = mongoose.model('Books',BooksSchema,'test');