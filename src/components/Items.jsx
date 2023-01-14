import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/index.css";

const Items = ({ title, size, color, price, image, id }) => {
  return (
    <div className="item-container">
      <img className="images" src={image} alt="product" />
      <h2>{title}</h2>
      <p>size: {size}</p>
      <p>Color: {color}</p>
      <p>Price: {price}</p>
      <div className="details-btn">
        <Link to={`/item/${id}`}>
          <Button
            sx={{
              backgroundColor: "#922B21",
              borderRadius: 2,
              "&:hover": {
                backgroundColor: "inherit",
                color: "#000",
              },
            }}
            variant="contained"
            id={id}
          >
            DETALLE
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Items;
