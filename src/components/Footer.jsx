import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box, Typography } from "@mui/material";
import "../assets/css/Footer.css";

// Son component
const Footer = () => {
  return (
    <Box className="footer-container" sx={{ backgroundColor: "#A0C3D2" }}>
      <a className="socialIcon" href="https://www.instagram.com/">
        <InstagramIcon variant="outlinedSizeSmall" color="inherit" />
        /Tienda Ascenso
      </a>
      <a className="socialIcon" href="https://www.twitter.com/">
        <TwitterIcon variant="outlinedSizeSmall" color="inherit" />
        /Tienda Ascenso
      </a>
      <Box className="copyright-text">
        <Typography
          sx={{
            color: "#0A2647",
            "&:hover": { color: "inherit" },
          }}
        >
          © 2022 Tienda Ascenso - Todos los derechos reservados
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
