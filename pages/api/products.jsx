const Product = require("../../modals/products");
import { ConnectDB } from "../../config/database";

export default async function handler(req, res) {
   await ConnectDB();
    const products = await Product.find({});
    // console.log('productsproducts',products);
   res.status(200).json({ success: true , products })
}
  