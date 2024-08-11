import React from "react";
import "../../fontawesome/css/all.css";
import Navbar from "../Components/Navbar";
import Services from "../Components/Services";
import About from "../Components/About";
import Produit from "../Components/Produit";
import Blog from "../Components/Blog";
import NewsLetter from "../Components/NewsLetter";
import Footer from "../Components/Footer";
import Home from "../Components/Home";

export default function page() {
  return (
    <div>
      <Navbar />
      <Home />
      <Services />
      <About />
      <Produit />
      <Blog />
      <NewsLetter />
      <Footer />
    </div>
  );
}
