// import React from 'react'
import { Button, Box, Container, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);

  function getFakeProducts() {
    axios.get("https://fakestoreapi.com/products?limit=9")
    .then((response) => {
      setProducts(response.data);
      console.log("Fake Store Products:", response.data);
    })
    .catch((error) => {
      console.error("Error fetching fake store products:", error);
    });
  }

  function getMongoProducts() {
    axios.get("http://localhost:3000/products")
    .then((response) => {
      setProducts(response.data);
      console.log("MongoDB Products:", response.data);
    })
    .catch((error) => {
      console.error("Error fetching MongoDB products:", error);
    });
  }

  useEffect(() => {
    getFakeProducts();
  }, []);

  return (
    <Container maxWidth="xl" sx={{ mt: 5, mb: 5 }}>

      <Box sx={{ background: "linear-gradient(135deg, #111, #2b2b2b)", borderRadius: 3, py: 8, textAlign: "center", color: "white", mb: 5 }}>
        <Typography variant="h2" sx={{ fontFamily: "serif", fontWeight: "bold", letterSpacing: 3 }}>GUCCI LUXURY COLLECTION</Typography>
        <Typography variant="h6" sx={{ mt: 2, color: "#D4AF37" }}>Explore our premium product collection</Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 5 }}>
        <Button variant="contained" onClick={getMongoProducts} sx={{ backgroundColor: "#D4AF37", color: "black", fontWeight: "bold", "&:hover": { backgroundColor: "#b8860b" } }}>MongoDB Products</Button>

        <Button variant="contained" onClick={getFakeProducts} sx={{ backgroundColor: "black", color: "white", fontWeight: "bold", "&:hover": { backgroundColor: "#333" } }}>Fake Store Products</Button>
      </Box>

      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 4 }}>
        {products.map((product) => (
          <ProductCard key={product._id || product.id} product={product} />
        ))}
      </Box>

    </Container>
  );
};

export default Home;