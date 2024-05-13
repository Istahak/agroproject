import React from "react";
import styled from "styled-components";
// import { useGlobalContext } from "../../Context/context";
import image from "../../assets/images/about.jpg";

const HeroSection = () => {
  //   const { name, image } = useGlobalContext();

  return (
    <Wrapper>
      <div className="container grid grid-cols-2 gap-8 items-center">
        {/* Text content on the left */}
        <div className="section-hero-data">
          <p className="hero-top-data">About Us</p>
          <h1 className="hero-heading">{name}</h1>
          <p className="hero-para">
            We are students of the University of Dhaka. We built this project to
            help the agriculture domain of our country. With expert guidance, AI
            integration, and a community forum, we aim to help the farmers of our
            country.
          </p>
          {/* <Button className="btn hireme-btn">
            <NavLink to="/contact"> hire me </NavLink>
          </Button> */}
        </div>

        {/* Image on the right */}
        <div className="section-hero-image">
          <picture>
            <img src={image} alt="hero image" className="hero-img h-[300px] object-cover" />
          </picture>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;

  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
  }

  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }

  .hero-img {
    max-width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
`;

export default HeroSection;
