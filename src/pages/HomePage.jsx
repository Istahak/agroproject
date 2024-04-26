import React from "react";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Features from "../components/Feature/Features";
import ExpertInfo from "../components/ExpertInfo/ExpertInfo";
import Footer from "../components/Footer/Footer";
import "../assets/Style/HomePage.css";
const HomePage = () => {
  return (
    <div className="Home-page">
      <Header />
      <Navbar />
      <Hero />
      <Features/>
      <ExpertInfo />
      <Footer/>
    </div>
  );
};

export default HomePage;
