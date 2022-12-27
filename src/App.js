import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import BodyApp from "./components/BodyApp";


export default function App() {
  return (
    <div>
      <Navbar />
      <BodyApp />
      <ItemListContainer greeting={"Bienvenido Tienda Ascenso"} />
      <Footer />
    </div>
  );
}
