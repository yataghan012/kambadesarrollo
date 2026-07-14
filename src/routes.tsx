import { RouteObject } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ComoFunciona from "./pages/ComoFunciona";
import Productos from "./pages/Productos";
import Relojes from "./pages/productos/Relojes";
import CelularesNotebooks from "./pages/productos/CelularesNotebooks";
import HardwareMineria from "./pages/productos/HardwareMineria";
import Camaras from "./pages/productos/Camaras";
import Bebidas from "./pages/productos/Bebidas";
import Consolas from "./pages/productos/Consolas";
import LegalidadAduana from "./pages/LegalidadAduana";
import QuienEstaDetras from "./pages/QuienEstaDetras";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "como-funciona", element: <ComoFunciona /> },
      { path: "productos", element: <Productos /> },
      { path: "productos/relojes", element: <Relojes /> },
      { path: "productos/celulares-notebooks", element: <CelularesNotebooks /> },
      { path: "productos/hardware-mineria", element: <HardwareMineria /> },
      { path: "productos/camaras", element: <Camaras /> },
      { path: "productos/bebidas", element: <Bebidas /> },
      { path: "productos/consolas", element: <Consolas /> },
      { path: "legalidad-y-aduana", element: <LegalidadAduana /> },
      { path: "quien-esta-detras", element: <QuienEstaDetras /> },
    ],
  },
];
