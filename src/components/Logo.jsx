import logo from "../assets/images/logo.png";
import "../assets/css/Navbar.css";

const Logo = () => {
  return (
    <button className="logoBottom">
      <img className="logo" src={logo} alt="ascenso logo"></img>
    </button>
  );
};

export default Logo;
