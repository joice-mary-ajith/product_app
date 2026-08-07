// import React from 'react'
import {Card} from "@mui/material";
import {CardContent} from "@mui/material";
import {CardMedia} from "@mui/material";
import {Typography} from "@mui/material";

const ProductCard = ({ product }) => {
  return (
    <Card sx={{ width: 280, minHeight: 400, padding: 2, textAlign: "center" }}>
      <CardMedia component="img" height="220" image={product.image} alt={product.title} sx={{ objectFit: "contain" }} />

      <CardContent>
        <Typography variant="h6">{product.title}</Typography>
        <Typography sx={{ mt: 1 }}>Price: ${product.price}</Typography>
        <Typography sx={{ mt: 1 }}>Rating: {product.rating?.rate ?? product.rating}</Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
