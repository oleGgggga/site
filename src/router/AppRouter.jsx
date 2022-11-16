import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import About from "../pages/About";
import Css from "../pages/Css";
import Home from "../pages/Home";
import Html from "../pages/Html";
import React from "../pages/React";
import Services from "../pages/Services";

const AppRouter = () => {
  return(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<Services />} />
      <Route path="html" element={<Html />} />
      <Route path="css" element={<Css />} />
      <Route path="react" element={<React/>} />
    </Routes>
    <Footer />
  </BrowserRouter>
  );
};

export default AppRouter;
