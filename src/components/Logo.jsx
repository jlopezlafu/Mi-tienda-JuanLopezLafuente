import logo from "../assets/images/logo.png";
import "../assets/css/Navbar.css";

const Logo = () => {
  return (
    <button className="btn-logo">
      <img className="logo" src={logo} alt="logo"></img>
    </button>
  );
};

export default Logo;
