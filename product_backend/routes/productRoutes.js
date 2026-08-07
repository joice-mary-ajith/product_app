const express = require("express");
const router = express.Router();
const productModel = require("../models/Product");

// Add product
router.post("/", async (req, res) => {
  const product = new productModel(req.body);

  try {
    const savedProduct = await product.save();

    res.status(201).json({
      message: "Product added successfully",
      product: savedProduct
    });
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
});

// Get all products
router.get("/", async (req, res) => {
  try {
    const products = await productModel.find();

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

// Update product
router.put("/:id", async (req, res) => {
  try {
    const updatedProduct = await productModel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });

    if (!updatedProduct) {
      return res.status(404).json({
        message: "Product not found"
      });
    }

    res.status(200).json({
      message: "Product updated successfully",
      product: updatedProduct
    });
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
});

// Delete product
router.delete("/:id", async (req, res) => {
  try {
    const deletedProduct = await productModel.findByIdAndDelete(req.params.id);

    if (!deletedProduct) {
      return res.status(404).json({
        message: "Product not found"
      });
    }

    res.status(200).json({
      message: "Product deleted successfully",
      product: deletedProduct
    });
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
});

module.exports = router;