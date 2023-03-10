import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "../assets/css/index.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Item = ({ product }) => {
  return (
    <Box sx={{ backgroundColor: "#ffffff" }} className="contItem">
      <img
        style={{ height: "400px" }}
        src={product.img}
        alt="product.name"
      ></img>
      <Typography sx={{ color: "#0A2647" }} variant="h5">
        {product.title}
      </Typography>
      <Typography sx={{ color: "#0A2647" }}>Stock: {product.stock}</Typography>
      <Typography sx={{ color: "#0A2647" }}>
        Precio: {"Pesos " + product.price}
      </Typography>
      <Box className="bottomDetail">
        <Link to={`/item/${product.id}`}>
          <Button
            sx={{
              backgroundColor: "#0A2647",
              borderRadius: 2,
              "&:hover": {
                backgroundColor: "#0A2647",
                color: "inherit",
              },
            }}
            variant="contained"
            id={product.id}
          >
            <Typography
              sx={{
                color: "#ffffff",
                "&:hover": {
                  backgroundColor: "inherit",
                  color: "inherit",
                },
              }}
            >
              {" "}
              DETALLES
            </Typography>
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Item;
