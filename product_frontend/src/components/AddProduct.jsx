// import React from 'react'
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const [form, setForm] = useState({
    productName: "",
    image: "",
    price: "",
    rating: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.productName || !form.image || !form.price || !form.rating) {
      alert("Please fill all fields");
      return;
    }

    if (Number(form.price) <= 0) {
      alert("Price must be greater than 0");
      return;
    }

    if (Number(form.rating) < 0 || Number(form.rating) > 5) {
      alert("Rating must be between 0 and 5");
      return;
    }

    const newProduct = {
      title: form.productName,
      image: form.image,
      price: Number(form.price),
      rating: Number(form.rating),
    };

    console.log("New Product:", newProduct);

    axios.post("http://localhost:3000/products", newProduct)
    .then((response) => {
      alert(response.data.message);

      setForm({
        productName: "",
        image: "",
        price: "",
        rating: "",
      });
    })
    .catch((error) => {
      console.error("Error adding product:", error);
      alert(error.response?.data?.message || "Product could not be added");
    });
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>Add Product</Typography>

      <Box component="form" onSubmit={handleSubmit} sx={{ border: "2px solid black", borderRadius: 2, p: 4 }}>
        <TextField fullWidth margin="normal" label="Product Name" name="productName" value={form.productName} onChange={handleChange} />
        <TextField fullWidth margin="normal" label="Image URL" name="image" value={form.image} onChange={handleChange} />
        <TextField fullWidth margin="normal" label="Price" type="number" name="price" value={form.price} onChange={handleChange} />
        <TextField fullWidth margin="normal" label="Rating" type="number" name="rating" value={form.rating} onChange={handleChange} />
        <Button type="submit" variant="contained" fullWidth sx={{ mt: 3 }}>Add Product</Button>
      </Box>
    </Container>
  );
};

export default AddProduct;