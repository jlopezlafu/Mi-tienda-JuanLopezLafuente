import { Box, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import React, { useContext } from "react";
import "../assets/css/index.css";
import "../assets/css/ItemCount.css";
import { generalContext } from "../components/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({ products }) => {
  const { addItem } = useContext(generalContext);

  const onAddToCart = (quantity) => {
    addItem(products, quantity);
  };

  return (
    <Box sx={{ backgroundColor: "#ffffff" }} className="detailContainer">
      {products.id ? (
        <Box
          sx={{ backgroundColor: "#ffffff" }}
          className="detailCont"
          key={products.id}
        >
          <img
            style={{ height: "400px", marginTop: 10 }}
            src={products.img}
            alt="product.name"
          ></img>
          <Typography sx={{ color: "#0A2647" }} variant="h5">
            {products.title}
          </Typography>
          <Typography sx={{ color: "#0A2647" }}>
            Stock: {products.stock}
          </Typography>
          <Typography sx={{ color: "#0A2647" }}>
            Precio: {"Pesos " + products.price}
          </Typography>
          <Box className="box">
            <Box className="box2">
              <ItemCount initial={0} stock={10} onAddToCart={onAddToCart} />
            </Box>
          </Box>
        </Box>
      ) : (
        <CircularProgress />
      )}
    </Box>
  );
};

export default ItemDetail;
