import React from "react";
import styled from "styled-components";
import HeroSection from "../components/HeroSection/HeroSection";
import { useGlobalContext } from "../Context/context";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const About = () => {
  // const { udpateAboutPage } = useGlobalContext();

  // useEffect(() => udpateAboutPage(), []);

  return (
    <Wrapper>
      <Navbar />
      <HeroSection />
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Minimum height of viewport */
`;

export default About;
