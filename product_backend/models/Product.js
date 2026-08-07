const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Product title is required"],
    minlength: [5, "Title must contain at least 5 characters"],
    maxlength: [100, "Title cannot contain more than 100 characters"]
  },

  price: {
    type: Number,
    required: [true, "Price is required"],
    min: [1, "Price must be greater than 0"]
  },

  image: {
    type: String,
    required: [true, "Image URL is required"],
    match: [/^https?:\/\/.+/, "Enter a valid image URL"]
  },

  rating: {
    type: Number,
    required: [true, "Rating is required"],
    min: [0, "Rating cannot be less than 0"],
    max: [5, "Rating cannot be greater than 5"]
  }
});

module.exports = mongoose.model("product", productSchema);