import ArgentinosQuilmes from "../assets/images/ArgentinosQuilmes.jpg";
import BrownAdrogue from "../assets/images/BrownAdrogue.jpg";
import Temperley from "../assets/images/Temperley.jpg";
import LosAndes from "../assets/images/LosAndes.jpg";
import TristanSuarez from "../assets/images/TristanSuarez.jpg";
import Quilmes from "../assets/images/Quilmes.jpg";
import SanMiguel from "../assets/images/SanMiguel.jpg";
import Sacachispas from "../assets/images/Sacachispas.jpg";

const shoes = [
  {
    id: 1,
    title: "Argentinos de Quilmes",
    size: "S/M/L/XL",
    color: "Blanca/Celeste",
    price: "9000 $",
    pictureURL: ArgentinosQuilmes,
    category: "Metropolitana",
  },
  {
    id: 2,
    title: "Temperley",
    size: "S/M/L/XL",
    color: "Celeste",
    price: "12000 $",
    pictureURL: Temperley,
    category: "Nacional",
  },
  {
    id: 3,
    title: "Brown de Adrogue",
    size: "S/M/L/XL",
    color: "Roja",
    price: "11000 $",
    pictureURL: BrownAdrogue,
    category: "Nacional",
  },
  {
    id: 4,
    title: "Los Andes",
    size: "S/M/L/XL",
    color: "Roja",
    price: "10000 $",
    pictureURL: LosAndes,
    category: "Metropolitana",
  },
  {
    id: 5,
    title: "Tristan Suarez",
    size: "S/M/L/XL",
    color: "Azul",
    price: "9000 $",
    pictureURL: TristanSuarez,
    category: "Nacional",
  },
  {
    id: 6,
    title: "Quilmes",
    size: "S/M/L/XL",
    color: "Blanca",
    price: "12700 $",
    pictureURL: Quilmes,
    category: "Nacional",
  },
  {
    id: 7,
    title: "San Miguel",
    size: "S/M/L/XL",
    color: "Blanco/Verde",
    price: "8000 $",
    pictureURL: SanMiguel,
    category: "Metropolitana",
  },
  {
    id: 8,
    title: "Sacachispas",
    size: "S/M/L/XL",
    color: "Violeta",
    price: "9000 $",
    pictureURL: Sacachispas,
    category: "Metropolitana",
  },
];

export const getProduct = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(shoes);
    }, 2000);
  });
};
