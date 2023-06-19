import { Schema, models, model } from "mongoose";

const productSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
  },
  category: {
    type: String,
  },
  image: {
    type: String,
    required: [true, "Image is required"],
  },
});

const Product = models.Product || model("Product", productSchema);
export default Product;
