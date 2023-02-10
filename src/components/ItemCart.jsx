import { Box, Button, Typography } from "@mui/material";
import React, { useContext } from "react";
import { generalContext } from "../components/CartContext";

const ItemCart = ({ product }) => {
  const { removeItem } = useContext(generalContext);

  const handleRemoveItem = (id) => {
    removeItem(id);
  };
  return (
    <Box sx={{ backgroundColor: "#ffffff" }}>
      {product.id ? (
        <Box sx={{ backgroundColor: "#ffffff", margin: 5 }} key={product.id}>
          <img
            style={{ height: "200px" }}
            src={product.img}
            alt="product.name"
          ></img>
          <Typography sx={{ color: "#0A2647" }} variant="h5">
            {product.title}
          </Typography>
          <Typography sx={{ color: "#0A2647" }}>
            Stock: {product.stock}
          </Typography>
          <Typography sx={{ color: "#0A2647" }}>
            Precio: {"Pesos " + product.price}
          </Typography>
          <br />
          <Box sx={{ backgroundColor: "#ffffff" }}>
            <Button
              sx={{
                backgroundColor: "#3B3486",
                borderRadius: 2,
                "&:hover": {
                  backgroundColor: "#inherit",
                  color: "inherit",
                },
              }}
              variant="contained"
              onClick={() => {
                handleRemoveItem(product.id);
              }}
            >
              <Typography
                sx={{
                  color: "#ffffff",
                  "&:hover": {
                    backgroundColor: "#inherit",
                    color: "inherit",
                  },
                }}
              >
                🛒
              </Typography>
            </Button>
          </Box>
        </Box>
      ) : (
        <Box>"Cargando..."</Box>
      )}
    </Box>
  );
};

export default ItemCart;
