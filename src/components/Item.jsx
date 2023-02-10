import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "../assets/css/index.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Items = ({ product }) => {
  return (
    <Box sx={{ backgroundColor: "#ffffff" }} className="contItem">
      <img className="images" src={product.img} alt="product" />
      <Typography sx={{ color: "#0A2647" }} variant="h5">
        {product.title}
      </Typography>
      <Typography sx={{ color: "#0A2647" }}>
        {"Pesos " + product.price}
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
              🛒 COMPRAR
            </Typography>
          </Button>
        </Link>
      </Box>
      <Typography sx={{ color: "#0A2647", marginTop: 5 }}>
        ENVIO GRATIS
      </Typography>
    </Box>
  );
};

export default Items;
