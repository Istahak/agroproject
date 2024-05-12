import React from "react";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Features from "../components/Feature/Features";
import ExpertInfo from "../components/ExpertInfo/ExpertInfo";
import Footer from "../components/Footer/Footer";
import "../assets/Style/HomePage.css";
const HomePage = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <div className="homePage">
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Navbar />
      <Hero />
      <Features />
      <ExpertInfo />
      <Footer />
    </div>
  );
};

export default HomePage;
